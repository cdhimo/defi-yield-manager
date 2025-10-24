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
      {/* White triangle with rounded corners */}
      <div 
        style={{
          width: width * 0.8,
          height: height * 0.8,
          background: 'white',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          borderRadius: '3px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Blue mountain/wave cutout using negative space */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(0, 50, 73, 0.95) 0%, rgba(0, 126, 167, 0.85) 100%)',
            clipPath: 'polygon(0% 100%, 25% 100%, 50% 25%, 75% 100%, 100% 100%, 100% 0%, 0% 0%)',
            borderRadius: '3px'
          }}
        />
      </div>
    </div>
  );
};

export default Logo;
