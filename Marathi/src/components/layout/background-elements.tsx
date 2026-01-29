import React from 'react';

const BackgroundElements = () => {
  // Elements based on the visual design instructions and HTML structure
  // Butterfly, Flower (Sakura), Balloon, Sunflower, Ribbon, Clover
  const elements = [
    { icon: '🦋', top: '15%', left: '5%', size: 'text-2xl md:text-3xl lg:text-4xl' },
    { icon: '🌸', top: '10%', right: '8%', size: 'text-2xl md:text-3xl lg:text-4xl' },
    { icon: '🎈', bottom: '25%', left: '7%', size: 'text-2xl md:text-3xl lg:text-4xl' },
    { icon: '🌻', bottom: '35%', right: '5%', size: 'text-2xl md:text-3xl lg:text-4xl' },
    { icon: '🎀', top: '45%', left: '3%', size: 'text-2xl md:text-3xl lg:text-4xl' },
    { icon: '🍀', top: '65%', right: '10%', size: 'text-2xl md:text-3xl lg:text-4xl' },
  ];

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0" 
      aria-hidden="true"
      style={{
        width: '100%',
        height: '100dvh',
      }}
    >
      {elements.map((el, index) => (
        <div
          key={index}
          className={`absolute ${el.size} transition-all duration-1000 ease-in-out`}
          style={{
            top: el.top,
            left: el.left,
            right: el.right,
            bottom: el.bottom,
            opacity: 0.4, // Consistent with high-level design "opacity around 0.4"
            fontFamily: 'var(--font-display)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '45px', // Match computed styles width
            height: '40px', // Match computed styles height
          }}
        >
          {el.icon}
        </div>
      ))}
    </div>
  );
};

export default BackgroundElements;