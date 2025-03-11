"use client";

import { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

// Floating element component for decorative purposes
const FloatingElement = ({ delay = 0, size = 20, color = "#777777", x = 0, y = 0 }) => {
  return (
    <motion.div
      className="absolute rounded-full opacity-40 pointer-events-none"
      style={{ 
        width: size, 
        height: size, 
        backgroundColor: color,
        top: `calc(50% + ${y}px)`,
        left: `calc(50% + ${x}px)`,
        filter: "blur(1px)"
      }}
      animate={{
        y: [0, -15, 0, 15, 0],
        x: [0, 10, 0, -10, 0],
        scale: [1, 1.1, 1, 0.9, 1],
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
        repeat: Infinity,
        repeatDelay: 0,
        delay
      }}
    />
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [floatingElements, setFloatingElements] = useState<Array<{id: number, x: number, y: number, size: number, color: string, delay: number}>>([]);
  
  // Generate random floating elements
  useEffect(() => {
    const elements = [];
    const colors = ['#777777', '#777777', '#777777', '#777777', '#777777'];
    
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        x: Math.random() * 600 - 300,
        y: Math.random() * 600 - 300,
        size: Math.random() * 15 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2
      });
    }
    
    setFloatingElements(elements);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFocus = (field: string) => {
    setFocusedField(field);
  };
  
  const handleBlur = () => {
    setFocusedField(null);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none -z-10">
        {floatingElements.map((element) => (
          <FloatingElement 
            key={element.id}
            delay={element.delay}
            size={element.size}
            color={element.color}
            x={element.x}
            y={element.y}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <AnimatedSection className="mb-16 text-center" style="bounce">
          <h2 className="text-4xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-gray-400 mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Have a question or want to work together? Send me a message and I'll get back to you as soon as possible.
          </p>
        </AnimatedSection>
        
        <motion.div 
          className="max-w-2xl mx-auto bg-gray-800 rounded-xl shadow-2xl p-8 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {submitSuccess ? (
            <div className="text-center py-10">
              <svg className="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
              <p className="mb-6">Thank you for reaching out. I'll get back to you soon.</p>
              <button 
                onClick={() => setSubmitSuccess(false)}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6 relative">
                <label 
                  htmlFor="name" 
                  className={`block mb-2 font-medium transition-all duration-300 ${
                    focusedField === 'name' ? 'text-white' : 'text-gray-300'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                />
              </div>
              
              <div className="mb-6 relative">
                <label 
                  htmlFor="email" 
                  className={`block mb-2 font-medium transition-all duration-300 ${
                    focusedField === 'email' ? 'text-white' : 'text-gray-300'
                  }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                />
              </div>
              
              <div className="mb-6 relative">
                <label 
                  htmlFor="message" 
                  className={`block mb-2 font-medium transition-all duration-300 ${
                    focusedField === 'message' ? 'text-white' : 'text-gray-300'
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 resize-none"
                />
              </div>
              
              <div className="text-right">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </div>
            </form>
          )}
          
          {submitError && (
            <div className="mt-4 p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-200">
              {submitError}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 