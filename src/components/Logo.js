import React, { useEffect, useRef } from 'react';

const Logo = ({ width = 40, height = 40, className = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#003249');
    gradient.addColorStop(1, '#007ea7');

    // Fill background
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Create white triangle
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(width * 0.25, height * 0.75); // Bottom left
    ctx.lineTo(width * 0.75, height * 0.75); // Bottom right
    ctx.lineTo(width * 0.5, height * 0.25);  // Top center
    ctx.closePath();
    ctx.fill();

    // Create inner blue mountain shape
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(width * 0.33, height * 0.75); // Bottom left
    ctx.lineTo(width * 0.5, height * 0.33);  // Peak
    ctx.lineTo(width * 0.67, height * 0.75); // Bottom right
    ctx.closePath();
    ctx.fill();
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block' }}
    />
  );
};

export default Logo;
