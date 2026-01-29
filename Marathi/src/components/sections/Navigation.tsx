"use client";

import React, { useState } from "react";
import { Volume2 } from "lucide-react";

const Navigation = () => {
  const [activeLang, setActiveLang] = useState<"en" | "hi" | "mr">("en");

  const navItems = [
    { label: "ABCs", emoji: "🔤", href: "/", active: true },
    { label: "123s", emoji: "🔢", href: "/numbers" },
    { label: "Shapes", emoji: "🔷", href: "/shapes" },
    { label: "Game", emoji: "🎮", href: "/shapes-game" },
  ];

  const languages = [
    { id: "en", label: "English", flag: "🇬🇧" },
    { id: "hi", label: "हिंदी", flag: "🇮🇳" },
    { id: "mr", label: "मराठी", flag: "🇮🇳" },
  ];

  return (
    <div className="w-full">
      {/* Decorative Floating Elements Container - Positioned behind nav content but within the relative flow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute text-2xl md:text-3xl lg:text-4xl opacity-40 animate-bounce" 
          style={{ top: '15%', left: '5%', animationDuration: '3s' }}
        >
          🦋
        </div>
        <div 
          className="absolute text-2xl md:text-3xl lg:text-4xl opacity-40" 
          style={{ top: '10%', right: '8%' }}
        >
          🌸
        </div>
        <div 
          className="absolute text-2xl md:text-3xl lg:text-4xl opacity-40 animate-pulse" 
          style={{ bottom: '25%', left: '8%' }}
        >
          🎈
        </div>
        <div 
          className="absolute text-2xl md:text-3xl lg:text-4xl opacity-40" 
          style={{ bottom: '35%', right: '6%' }}
        >
          🌻
        </div>
        <div 
          className="absolute text-2xl md:text-3xl lg:text-4xl opacity-40" 
          style={{ top: '45%', right: '15%' }}
        >
          🎀
        </div>
      </div>

      <header className="relative z-10">
        {/* Module Navigation Bar */}
        <nav className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 py-4 px-4 bg-transparent">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="no-underline hover-pop"
            >
              <div
                className={`
                  flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3
                  rounded-full font-semibold text-sm sm:text-base md:text-lg
                  transition-all duration-300 shadow-md
                  ${
                    item.active
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-card text-foreground hover:bg-muted"
                  }
                `}
                style={item.active ? { backgroundColor: 'rgb(233, 32, 99)' } : {}}
              >
                <span className="text-lg sm:text-xl">{item.emoji}</span>
                <span className="font-display tracking-tight">{item.label}</span>
              </div>
            </a>
          ))}
        </nav>

        {/* Language & Utility Switcher */}
        <div className="flex items-center justify-center gap-2 py-2">
          <button className="p-1.5 rounded-full hover:bg-muted transition-colors">
            <Volume2 className="w-4 h-4 text-muted-foreground" />
          </button>
          
          <div className="flex gap-1 bg-card rounded-full p-1 shadow-md border border-border/50">
            {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setActiveLang(lang.id as 'en' | 'hi' | 'mr')}
                  className={`
                    px-3 py-1.5 rounded-full text-sm font-medium transition-all
                    flex items-center gap-1.5 font-body
                  ${
                    activeLang === lang.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "hover:bg-muted text-muted-foreground"
                  }
                `}
                style={activeLang === lang.id ? { backgroundColor: 'rgb(233, 32, 99)' } : {}}
              >
                <span>{lang.flag}</span>
                <span className="hidden sm:inline">{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;