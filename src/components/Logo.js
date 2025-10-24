import React from 'react';

const Logo = ({ width = 40, height = 40, className = "" }) => {
  return (
    <img 
      src="/vuno-logo.svg" 
      alt="Vuno" 
      className={className}
      style={{ 
        width: width, 
        height: height,
        display: 'block'
      }}
    />
  );
};

export default Logo;
