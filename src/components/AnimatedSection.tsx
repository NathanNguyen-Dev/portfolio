"use client";

import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type AnimationStyle = 'fade' | 'slide' | 'zoom' | 'bounce' | 'flip' | 'spin' | 'swing';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  style?: AnimationStyle;
  duration?: number;
  hover?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  style = 'fade',
  duration = 0.8,
  hover = false,
  onMouseEnter,
  onMouseLeave,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onMouseLeave) onMouseLeave();
  };

  // Define the animation styling
  const getTransformValue = () => {
    switch (direction) {
      case 'up':
        return 'translateY(50px)';
      case 'down':
        return 'translateY(-50px)';
      case 'left':
        return 'translateX(50px)';
      case 'right':
        return 'translateX(-50px)';
      case 'none':
        return 'none';
      default:
        return 'translateY(50px)';
    }
  };

  const getAnimationStyle = () => {
    switch (style) {
      case 'fade':
        return { opacity: 0, transform: getTransformValue() };
      case 'zoom':
        return { opacity: 0, transform: 'scale(0.8)' };
      case 'bounce':
        return { opacity: 0, transform: 'translateY(50px)' };
      case 'flip':
        return { opacity: 0, transform: 'rotateX(-90deg)' };
      case 'spin':
        return { opacity: 0, transform: 'rotate(-180deg)' };
      case 'swing':
        return { opacity: 0, transform: 'rotate(-15deg)' };
      default:
        return { opacity: 0, transform: getTransformValue() };
    }
  };

  const getAnimatedStyle = () => {
    if (!isVisible) return getAnimationStyle();

    const defaultTransition = `${duration}s ease-out ${delay}s`;
    const bounceTransition = `${duration}s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay}s`;

    switch (style) {
      case 'fade':
        return { 
          opacity: 1, 
          transform: 'translate(0)',
          transition: `opacity ${defaultTransition}, transform ${defaultTransition}`
        };
      case 'zoom':
        return { 
          opacity: 1, 
          transform: 'scale(1)',
          transition: `opacity ${defaultTransition}, transform ${defaultTransition}`
        };
      case 'bounce':
        return { 
          opacity: 1, 
          transform: 'translateY(0)',
          transition: `opacity ${defaultTransition}, transform ${bounceTransition}`
        };
      case 'flip':
        return { 
          opacity: 1, 
          transform: 'rotateX(0)', 
          transition: `opacity ${defaultTransition}, transform ${bounceTransition}`
        };
      case 'spin':
        return { 
          opacity: 1, 
          transform: 'rotate(0)', 
          transition: `opacity ${defaultTransition}, transform ${bounceTransition}`
        };
      case 'swing':
        return { 
          opacity: 1, 
          transform: 'rotate(0)', 
          transition: `opacity ${defaultTransition}, transform ${bounceTransition}`
        };
      default:
        return { 
          opacity: 1, 
          transform: 'translate(0)',
          transition: `opacity ${defaultTransition}, transform ${defaultTransition}`
        };
    }
  };

  const getHoverStyle = () => {
    if (!hover || !isHovered) return {};

    switch (style) {
      case 'zoom':
        return { transform: 'scale(1.05)', transition: 'transform 0.3s ease' };
      case 'bounce':
        return { transform: 'translateY(-10px)', transition: 'transform 0.3s ease' };
      case 'spin':
        return { transform: 'rotate(5deg)', transition: 'transform 0.3s ease' };
      case 'swing':
        return { transform: 'rotate(5deg)', transition: 'transform 0.3s ease' };
      default:
        return { transform: 'translateY(-5px)', transition: 'transform 0.3s ease' };
    }
  };

  // Base style only contains properties that don't change between states
  const baseStyle = {
    ...getAnimationStyle(),
  };

  // Combine the styles based on visibility and hover state
  const combinedStyle = isVisible
    ? { ...baseStyle, ...getAnimatedStyle(), ...(hover ? getHoverStyle() : {}) }
    : { 
        ...baseStyle,
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`
      };

  return (
    <div
      ref={ref}
      className={className}
      style={combinedStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default AnimatedSection; 