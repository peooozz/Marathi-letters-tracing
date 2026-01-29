"use client";

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCcw, Check, Star } from 'lucide-react';
import { MarathiCharacter } from '@/lib/marathi-data';
import confetti from 'canvas-confetti';
import { marathiTracingData } from '@/lib/marathi-tracing-data';

interface TracingModalProps {
  character: MarathiCharacter | null;
  onClose: () => void;
}

const TOLERANCE = 40; // Pixels in SVG coordinate space (1000x1000)
// 10px in 500px real space is 20px in 1000px SVG space.
// User asked for 8-10px tolerance. Let's use 20 units in our 1000x1000 grid if display is 500px.
// Actually, 10px on a 500px wide element is 2% of the width. 2% of 1000 is 20 units.
const SVG_TOLERANCE = 25; 

const TracingModal: React.FC<TracingModalProps> = ({ character, onClose }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [currentStrokeIndex, setCurrentStrokeIndex] = useState(0);
  const [progress, setProgress] = useState(0); // 0 to 1 for current stroke
  const [isDrawing, setIsDrawing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [completedPaths, setCompletedPaths] = useState<string[]>([]);
  
  const tracingData = useMemo(() => 
    character ? marathiTracingData[character.char] : null
  , [character]);

  const currentStroke = tracingData?.paths[currentStrokeIndex];

  // Tick sound using Web Audio API
  const playTick = useCallback(() => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.1);
    } catch (e) {
      console.error('Audio error', e);
    }
  }, []);

  const getSVGPoint = (e: React.MouseEvent | React.TouchEvent): { x: number, y: number } | null => {
    if (!svgRef.current) return null;
    const svg = svgRef.current;
    const pt = svg.createSVGPoint();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    pt.x = clientX;
    pt.y = clientY;
    const transformed = pt.matrixTransform(svg.getScreenCTM()?.inverse());
    return { x: transformed.x, y: transformed.y };
  };

  const findProgressOnPath = (point: { x: number, y: number }, pathElement: SVGPathElement) => {
    const length = pathElement.getTotalLength();
    let bestDist = Infinity;
    let bestLength = 0;
    
    // Sampling path to find closest point
    // Using a more efficient binary search or local search would be better for performance
    // but for 1000 units, 100 samples is okay.
    const samples = 100;
    for (let i = 0; i <= samples; i++) {
      const l = (i / samples) * length;
      const p = pathElement.getPointAtLength(l);
      const d = Math.sqrt(Math.pow(p.x - point.x, 2) + Math.pow(p.y - point.y, 2));
      if (d < bestDist) {
        bestDist = d;
        bestLength = l;
      }
    }
    
    return { distance: bestDist, lengthOnPath: bestLength, totalLength: length };
  };

  const [pathLengths, setPathLengths] = useState<Record<string, number>>({});

  useEffect(() => {
    if (tracingData) {
      const lengths: Record<string, number> = {};
      tracingData.paths.forEach(p => {
        const el = document.createElementNS("http://www.w3.org/2000/svg", "path");
        el.setAttribute("d", p.d);
        lengths[p.id] = el.getTotalLength();
      });
      setPathLengths(lengths);
    }
  }, [tracingData]);

  const currentPathLength = currentStroke ? pathLengths[currentStroke.id] || 1000 : 1000;

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isCompleted || !currentStroke) return;
    const point = getSVGPoint(e);
    if (!point) return;

    const dummyPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    dummyPath.setAttribute("d", currentStroke.d);
    
    const { distance, lengthOnPath } = findProgressOnPath(point, dummyPath);
    
    if (distance < SVG_TOLERANCE && lengthOnPath < 50) {
      setIsDrawing(true);
      setIsError(false);
      setProgress(lengthOnPath / dummyPath.getTotalLength());
    }
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || isCompleted || !currentStroke) return;
    const point = getSVGPoint(e);
    if (!point) return;

    const dummyPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    dummyPath.setAttribute("d", currentStroke.d);

    const { distance, lengthOnPath, totalLength } = findProgressOnPath(point, dummyPath);
    const newProgress = lengthOnPath / totalLength;

    if (distance > SVG_TOLERANCE) {
      setIsDrawing(false);
      setIsError(true);
      return;
    }

    if (newProgress >= progress - 0.05) {
      setProgress(Math.max(progress, newProgress));
      setIsError(false);

      if (newProgress > 0.98) {
        finishStroke();
      }
    }
  };

  const finishStroke = () => {
    setIsDrawing(false);
    playTick();
    
    if (!tracingData) return;
    
    setCompletedPaths(prev => [...prev, currentStroke!.id]);
    
    if (currentStrokeIndex < tracingData.paths.length - 1) {
      setCurrentStrokeIndex(prev => prev + 1);
      setProgress(0);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    setIsCompleted(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2563eb', '#60a5fa', '#93c5fd']
    });
  };

  const reset = () => {
    setCurrentStrokeIndex(0);
    setProgress(0);
    setIsDrawing(false);
    setIsCompleted(false);
    setIsError(false);
    setCompletedPaths([]);
  };

  if (!character || !tracingData) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md" onClick={onClose}>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-xl bg-white rounded-[40px] shadow-2xl overflow-hidden p-6 md:p-8 flex flex-col items-center gap-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#fef9c3] rounded-2xl flex items-center justify-center text-4xl font-bold text-gray-800">
                {character.char}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">अक्षर गिरवा</h2>
                <p className="text-gray-500 text-sm">Trace the Marathi letter correctly</p>
              </div>
            </div>
            <button onClick={onClose} className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          {/* Tracing Area */}
          <div className="relative w-full aspect-square bg-white rounded-3xl border-4 border-gray-100 shadow-inner overflow-hidden flex items-center justify-center group">
            <svg
              ref={svgRef}
              viewBox="0 0 1000 1000"
              className="w-full h-full touch-none select-none"
              onMouseDown={handleStart}
              onMouseMove={handleMove}
              onMouseUp={() => setIsDrawing(false)}
              onTouchStart={handleStart}
              onTouchMove={handleMove}
              onTouchEnd={() => setIsDrawing(false)}
            >
              {/* Layer 1: Guide Outline (Light Grey) */}
              {tracingData.paths.map(p => (
                <path
                  key={`guide-${p.id}`}
                  d={p.d}
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="80"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ))}

              {/* Layer 2: Animated Dotted Guide for current stroke */}
              {!isCompleted && currentStroke && (
                <path
                  id={currentStroke.id}
                  d={currentStroke.d}
                  fill="none"
                  stroke={isError ? "#ef4444" : "#d1d5db"}
                  strokeWidth="80"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="20 40"
                  className={isDrawing ? "" : "animate-[dash_2s_linear_infinite]"}
                />
              )}

              {/* Layer 3: Completed Strokes */}
              {tracingData.paths.map(p => {
                const isFinished = completedPaths.includes(p.id);
                if (!isFinished) return null;
                return (
                  <path
                    key={`done-${p.id}`}
                    d={p.d}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="80"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                );
              })}

              {/* Layer 4: Current Progress Fill */}
              {!isCompleted && currentStroke && isDrawing && (
                <path
                  d={currentStroke.d}
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="80"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={`${progress * 2000} 2000`} // Approximation for total length
                  style={{ 
                    strokeDasharray: `${progress * (document.getElementById(currentStroke.id) as any)?.getTotalLength() || 1000} 2000` 
                  }}
                />
              )}

              {/* Stroke Numbers */}
              {!isCompleted && tracingData.paths.map((p, i) => {
                if (completedPaths.includes(p.id)) return null;
                // Only show number for current and next few?
                // Actually, show all starts for clarity but highlight current
                const startPt = p.d.split(' ')[1].split(',');
                return (
                  <g key={`num-${p.id}`} transform={`translate(${startPt[0]}, ${startPt[1]})`}>
                    <circle 
                      r="25" 
                      fill={i === currentStrokeIndex ? "#f59e0b" : "#9ca3af"} 
                      className={i === currentStrokeIndex ? "animate-pulse" : ""}
                    />
                    <text 
                      dy=".3em" 
                      textAnchor="middle" 
                      fill="white" 
                      fontSize="30" 
                      fontWeight="bold"
                    >
                      {i + 1}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Error Feedback Overlay */}
            {isError && !isDrawing && !isCompleted && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 pointer-events-none bg-red-500/5 flex items-center justify-center"
              >
                <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Stay on the line!
                </div>
              </motion.div>
            )}

            {/* Success State Overlay */}
            <AnimatePresence>
              {isCompleted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-50 bg-white/90 flex flex-col items-center justify-center p-6 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6"
                  >
                    <Check className="w-12 h-12 text-white" strokeWidth={4} />
                  </motion.div>
                  <h3 className="text-4xl font-black text-gray-800 mb-2">अप्रतिम!</h3>
                  <p className="text-gray-500 font-bold mb-8">Excellent work!</p>
                  <button
                    onClick={onClose}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-xl transition-all active:scale-95"
                  >
                    <Star className="w-5 h-5 fill-current" />
                    <span>पुढचे अक्षर</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Controls */}
          {!isCompleted && (
            <div className="w-full flex gap-4">
              <button
                onClick={reset}
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl font-bold transition-all active:scale-95"
              >
                <RotateCcw className="w-5 h-5" />
                <span>पुन्हा करा</span>
              </button>
            </div>
          )}
        </motion.div>
      </div>
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </AnimatePresence>
  );
};

export default TracingModal;
