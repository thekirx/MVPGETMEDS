import React from 'react';

const LogoIcon = () => {
  return (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Medical cross */}
      <path 
        d="M16 6V26M6 16H26" 
        stroke="white" 
        strokeWidth="3" 
        strokeLinecap="round"
      />
      <rect 
        x="12" 
        y="12" 
        width="8" 
        height="8" 
        fill="white"
      />
      
      {/* Pill shape */}
      <ellipse 
        cx="16" 
        cy="16" 
        rx="4" 
        ry="6" 
        fill="none" 
        stroke="white" 
        strokeWidth="2"
      />
      
      {/* Pulse line */}
      <path 
        d="M4 28 L8 24 L12 28 L16 20 L20 28 L24 24 L28 28" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default LogoIcon;