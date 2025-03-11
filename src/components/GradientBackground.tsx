"use client";

import React, { useEffect, useRef } from 'react';

type GradientBackgroundProps = {
  className?: string;
};

const GradientBackground: React.FC<GradientBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const frameRef = useRef<number>(0);
  const gradientAngle = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize canvas
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 2; // Make it larger than viewport
      
      const context = canvas.getContext('2d');
      if (!context) return;
      
      contextRef.current = context;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Animation function
    const animate = () => {
      if (!contextRef.current) return;
      
      const context = contextRef.current;
      const width = canvas.width;
      const height = canvas.height;
      
      // Clear canvas
      context.clearRect(0, 0, width, height);
      
      // Create and animate circular gradient
      gradientAngle.current += 0.003;
      const centerX = width / 2;
      const centerY = height / 2;
      const outerRadius = Math.max(width, height) * 0.8;
      
      // Move center based on time
      const offsetX = Math.sin(gradientAngle.current * 0.5) * width * 0.1;
      const offsetY = Math.cos(gradientAngle.current * 0.7) * height * 0.1;
      
      const gradient = context.createRadialGradient(
        centerX + offsetX, centerY + offsetY, 0,
        centerX, centerY, outerRadius
      );
      
      // Monochromatic grayscale colors with low opacity
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)'); // White
      gradient.addColorStop(0.3, 'rgba(220, 220, 220, 0.15)'); // Light Gray
      gradient.addColorStop(0.6, 'rgba(180, 180, 180, 0.1)'); // Medium Gray
      gradient.addColorStop(1, 'rgba(100, 100, 100, 0.05)'); // Dark Gray
      
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);
      
      // Add a second layer with subtle grain texture
      const gradient2 = context.createLinearGradient(
        0, 0,
        width, height
      );
      
      gradient2.addColorStop(0, 'rgba(40, 40, 40, 0.03)'); // Very Dark Gray
      gradient2.addColorStop(1, 'rgba(200, 200, 200, 0.03)'); // Light Gray
      
      context.fillStyle = gradient2;
      context.fillRect(0, 0, width, height);
      
      // Add subtle noise/grain (optional)
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 2;
        context.fillStyle = `rgba(0, 0, 0, ${Math.random() * 0.01})`;
        context.fillRect(x, y, size, size);
      }
      
      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full -z-10 pointer-events-none ${className}`}
    />
  );
};

export default GradientBackground; 