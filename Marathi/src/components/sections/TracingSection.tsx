"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { swar, vyanjan, MarathiCharacter } from '@/lib/marathi-data';
import TracingModal from './TracingModal';

const TracingSection = () => {
  const [activeTab, setActiveTab] = useState<'swar' | 'vyanjan'>('swar');
  const [selectedChar, setSelectedChar] = useState<MarathiCharacter | null>(null);

  const characters = activeTab === 'swar' ? swar : vyanjan;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="bg-[#fef9c3] rounded-[40px] p-6 md:p-10">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('swar')}
            className={`px-10 py-3 rounded-full font-bold transition-all text-xl shadow-lg ${activeTab === 'swar' ? 'bg-[#ef4444] text-white' : 'bg-white text-gray-400 border-2 border-transparent'}`}
          >
            स्वर
          </button>
          <button
            onClick={() => setActiveTab('vyanjan')}
            className={`px-10 py-3 rounded-full font-bold transition-all text-xl shadow-lg ${activeTab === 'vyanjan' ? 'bg-[#3b82f6] text-white' : 'bg-white text-gray-400 border-2 border-transparent'}`}
          >
            व्यंजन
          </button>
        </div>

        {/* Grid with requested theme */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {characters.map((item) => (
            <motion.button
              key={item.char}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedChar(item)}
              className={`
                relative aspect-square rounded-[40px] ${item.colorClass}
                flex items-center justify-center shadow-xl border-4 border-white/20
                overflow-hidden group
              `}
            >
              {/* Decorative Dots */}
              <div className="absolute top-4 left-4 w-6 h-6 bg-white/20 rounded-full" />
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded-full" />
              
              <span className="text-6xl md:text-7xl font-display text-white drop-shadow-lg">
                {item.char}
              </span>

              {/* Shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </motion.button>
          ))}
        </div>
      </div>

      <TracingModal
        character={selectedChar}
        onClose={() => setSelectedChar(null)}
      />
    </div>
  );
};

export default TracingSection;
