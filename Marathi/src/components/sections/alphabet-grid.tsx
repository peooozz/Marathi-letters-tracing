"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { swar, vyanjan, MarathiCharacter } from '@/lib/marathi-data';
import FlashcardModal from './FlashcardModal';
import TracingSection from './TracingSection';

const AlphabetGrid = () => {
  const [activeTab, setActiveTab] = useState<'swar' | 'vyanjan'>('swar');
  const [selectedChar, setSelectedChar] = useState<MarathiCharacter | null>(null);
  const [showTracing, setShowTracing] = useState(false);

  const characters = activeTab === 'swar' ? swar : vyanjan;

  return (
    <div className="w-full pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-10 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowTracing(!showTracing)}
          className={`
            w-full max-w-2xl p-6 rounded-[32px] shadow-kid border-4 border-white
            flex flex-col items-center justify-center gap-2 transition-all
            ${showTracing ? 'bg-[#4f46e5] text-white' : 'bg-white text-[#4f46e5]'}
          `}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold font-display">
            अक्षर गिरवायला शिका!
          </h2>
          <p className={`text-lg md:text-xl font-medium ${showTracing ? 'text-white/80' : 'text-gray-600'}`}>
            मराठी अक्षरे गिरवून सराव करा
          </p>
        </motion.button>
      </div>

      {/* Tracing Section (Conditional) */}
      <AnimatePresence>
        {showTracing && (
          <motion.div
            key="tracing-section"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <TracingSection />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Alphabet Grid */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <header className="text-center py-6 md:py-10">
          <div className="inline-flex items-center gap-2 md:gap-3">
            <span className="text-3xl md:text-4xl animate-bounce" style={{ animationDuration: '3s' }}>🌈</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-rainbow font-display">
              मराठी मुळाक्षरे शिका!
            </h1>
            <span className="text-3xl md:text-4xl animate-pulse">⭐</span>
          </div>
          <div className="mt-3 md:mt-4 flex items-center justify-center gap-2 text-muted-foreground">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-letter-yellow fill-current" />
            <p className="text-base md:text-lg lg:text-xl font-medium font-body">
              चित्र आणि उच्चार पाहण्यासाठी अक्षरावर क्लिक करा!
            </p>
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-letter-yellow fill-current" />
          </div>
        </header>

        {/* Tabs for Main Grid */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab('swar')}
            className={`px-8 py-3 rounded-2xl font-bold transition-all text-xl ${activeTab === 'swar' ? 'bg-[#ef4444] text-white shadow-lg' : 'bg-white text-gray-400 hover:text-gray-600 border-2 border-transparent hover:border-gray-100'}`}
          >
            स्वर
          </button>
          <button
            onClick={() => setActiveTab('vyanjan')}
            className={`px-8 py-3 rounded-2xl font-bold transition-all text-xl ${activeTab === 'vyanjan' ? 'bg-[#3b82f6] text-white shadow-lg' : 'bg-white text-gray-400 hover:text-gray-600 border-2 border-transparent hover:border-gray-100'}`}
          >
            व्यंजन
          </button>
        </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4 md:gap-5">
            {characters.map((item) => (
              <motion.button
                key={item.char}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedChar(item)}
                className={`
                  relative aspect-square rounded-3xl
                  ${item.colorClass}
                  text-white font-bold
                  flex flex-col items-center justify-center
                  cursor-pointer select-none
                  transition-all duration-300
                  shadow-kid hover:shadow-xl
                  overflow-hidden group tile-bubble
                `}
              >
                {/* Character Text */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md font-display leading-none">
                    {item.char}
                  </span>
                  <span className="text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-opacity font-body mt-1">
                    {item.example}
                  </span>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              </motion.button>
            ))}
          </div>
        </div>

        <FlashcardModal
          character={selectedChar}
          onClose={() => setSelectedChar(null)}
        />

        <footer className="mt-12 text-center text-muted-foreground font-body px-4">
          <p className="text-sm md:text-base italic">
            टीप: उच्चार ऐकण्यासाठी &apos;पुन्हा ऐका&apos; बटण दाबा.
          </p>
        </footer>
      </div>
    );
  };

export default AlphabetGrid;
