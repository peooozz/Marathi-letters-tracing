import React from 'react';
import { Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="text-center py-6 md:py-10 px-4 relative z-10 w-full max-w-6xl mx-auto">
      {/* Main Title Section */}
      <div className="inline-flex items-center justify-center gap-2 md:gap-3 mb-2">
        <span className="text-3xl md:text-4xl lg:text-5xl select-none" role="img" aria-label="rainbow">
          🌈
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          <span className="text-rainbow">
            मराठी वर्णमाला शिका!
          </span>
        </h1>
        <span className="text-3xl md:text-4xl lg:text-5xl select-none" role="img" aria-label="star">
          ⭐
        </span>
      </div>

      {/* Instructional Subtext */}
      <div className="mt-3 md:mt-4 flex items-center justify-center gap-2 text-muted-foreground">
        <Sparkles 
          className="w-4 h-4 md:w-5 md:h-5 text-letter-yellow fill-letter-yellow" 
          aria-hidden="true" 
        />
        <p className="text-base md:text-lg lg:text-xl font-medium font-body bg-clip-text">
          अधिक जाणून घेण्यासाठी अक्षरावर क्लिक करा!
        </p>
        <Sparkles 
          className="w-4 h-4 md:w-5 md:h-5 text-letter-yellow fill-letter-yellow" 
          aria-hidden="true" 
        />
      </div>

      {/* Decorative Styles (Preserving globals.css reference) */}
      <style jsx global>{`
        .text-rainbow {
          background: linear-gradient(to right, #ef4444, #f59e0b, #10b981, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }
      `}</style>
    </header>
  );
};

export default Header;