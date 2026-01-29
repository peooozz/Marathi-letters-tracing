"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2 } from 'lucide-react';
import { MarathiCharacter } from '@/lib/marathi-data';
import { speakMarathi } from '@/lib/audio';

interface FlashcardModalProps {
  character: MarathiCharacter | null;
  onClose: () => void;
}

const FlashcardModal: React.FC<FlashcardModalProps> = ({ character, onClose }) => {
  useEffect(() => {
    if (character) {
      const textToSpeak = `${character.char} म्हणजे ${character.example}`;
      speakMarathi(textToSpeak);
    }
  }, [character]);

  if (!character) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={onClose}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={`relative w-full max-w-md aspect-[3/4] sm:aspect-auto sm:min-h-[500px] rounded-[40px] shadow-2xl overflow-hidden ${character.colorClass} border-8 border-white p-6 flex flex-col items-center justify-between text-white`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Letter */}
          <div className="flex flex-col items-center mt-4">
            <span className="text-8xl md:text-9xl font-display drop-shadow-lg leading-none">
              {character.char}
            </span>
            <span className="text-xl opacity-90 font-medium uppercase tracking-widest mt-2">
              {character.transliteration}
            </span>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-square max-w-[280px] rounded-3xl overflow-hidden shadow-inner bg-white/10 border-4 border-white/20 my-6">
            <img
              src={character.image}
              alt={character.example}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Word & Audio */}
          <div className="flex flex-col items-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-display text-center drop-shadow-md">
              {character.example}
            </h2>
            <button
              onClick={() => speakMarathi(`${character.char} म्हणजे ${character.example}`)}
              className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform"
            >
              <Volume2 className="w-5 h-5" />
              <span>पुन्हा ऐका</span>
            </button>
          </div>

          {/* Decorative Bubbles */}
          <div className="absolute top-10 left-10 w-12 h-12 bg-white/10 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-10 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default FlashcardModal;
