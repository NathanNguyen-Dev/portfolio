"use client";

import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import TypedText from './TypedText';
import ParticleBackground from './ParticleBackground';

const typedStrings = ["AI Systems", "ML Models", "Data Pipelines", "Business Solutions", "Future Technology"];

const Hero = () => {
  return (
    <section id="home" className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
      <ParticleBackground />
      
      <div className="container max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          <div className="w-full md:w-2/3 order-2 md:order-1 md:pl-4">
            <AnimatedSection className="space-y-6" direction="right" delay={0.1} style="slide">
              <div className="inline-block py-1 px-3 bg-gray-800 rounded-full">
                <span className="text-xs font-semibold tracking-wider text-white">Hello, I'm</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Nathan Nguyen
              </h1>
              
              <div className="flex items-center text-xl md:text-2xl font-medium text-gray-300">
                <span className="mr-2">I build</span>
                <TypedText 
                  strings={typedStrings}
                  className="text-gray-400"
                />
              </div>
              
              <p className="text-lg text-gray-400 max-w-lg">
                Data Scientist & Machine Learning Engineer specializing in building intelligent systems that solve real-world problems.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://github.com/NathanNguyen-Dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/nathan-nguyennhat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transform hover:-translate-y-1 transition-all duration-300"
                >
                  View Projects
                </a>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="w-full md:w-1/3 flex justify-center md:justify-end order-1 md:order-2 md:pr-4">
            <AnimatedSection direction="left" delay={0.3} style="fade">
              <Image
                src="/images/profile.svg"
                alt="Nathan Nguyen"
                width={280}
                height={280}
                style={{ objectFit: 'contain' }}
                priority
                className="transition-transform duration-500 hover:scale-105"
              />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <svg 
          className="w-5 h-5 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 