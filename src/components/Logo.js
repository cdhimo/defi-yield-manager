import React from 'react';

const Logo = ({ width = 40, height = 40, className = "" }) => {
  return (
    <div 
      className={`logo-container ${className}`}
      style={{ 
        width: width, 
        height: height,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Triangle shape that flows with the background */}
      <div 
        style={{
          width: width * 0.8,
          height: height * 0.8,
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '2px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Inner mountain shape */}
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: width * 0.4,
            height: height * 0.6,
            background: 'rgba(0, 126, 167, 0.3)',
            clipPath: 'polygon(50% 100%, 0% 60%, 100% 60%)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />
      </div>
    </div>
  );
};

export default Logo;
