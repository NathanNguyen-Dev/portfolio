"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Calculate the eye movement based on mouse position
  const eyeX = (mousePosition.x / (typeof window !== 'undefined' ? window.innerWidth : 1) - 0.5) * 10;
  const eyeY = (mousePosition.y / (typeof window !== 'undefined' ? window.innerHeight : 1) - 0.5) * 10;
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };
  
  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black p-4">
      <motion.div 
        className="max-w-2xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="relative w-48 h-48 mx-auto mb-8"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Robot face */}
          <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 shadow-xl flex flex-col items-center justify-center overflow-hidden border-4 border-gray-200 dark:border-gray-700">
            {/* Eyes */}
            <div className="flex space-x-8 mb-4 mt-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <motion.div 
                  className="w-4 h-4 rounded-full bg-gray-800 dark:bg-gray-300"
                  animate={{ x: eyeX, y: eyeY }}
                  transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
                />
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <motion.div 
                  className="w-4 h-4 rounded-full bg-gray-800 dark:bg-gray-300"
                  animate={{ x: eyeX, y: eyeY }}
                  transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
                />
              </div>
            </div>
            
            {/* Mouth */}
            <motion.div 
              className="w-16 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
              initial={{ width: "2rem" }}
              animate={{ width: ["2rem", "3rem", "2rem"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Antenna */}
            <motion.div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-1 h-6 bg-gray-400 dark:bg-gray-600"></div>
              <div className="w-3 h-3 rounded-full bg-gray-800 dark:bg-gray-300 mx-auto"></div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-4 text-gray-800 dark:text-gray-200"
          variants={itemVariants}
        >
          404
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
          variants={itemVariants}
        >
          Page Not Found
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto"
          variants={itemVariants}
        >
          Oops! The page you're looking for has been moved to another dimension.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="inline-block"
          >
            <Link 
              href="/" 
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium shadow-lg"
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-12 text-sm text-gray-500 dark:text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p>Try moving your mouse to interact with the robot!</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound; 