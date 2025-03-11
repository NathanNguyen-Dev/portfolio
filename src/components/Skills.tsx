"use client";

import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import GradientBackground from './GradientBackground';

// Sample skills data updated for Data Science and Machine Learning
const technicalSkills = [
  'Python',
  'Machine Learning',
  'Deep Learning',
  'LLM Engineering',
  'Data Analysis',
  'Natural Language Processing',
  'Computer Vision',
  'SQL',
  'Cloud Computing (AWS/Azure)',
];

// Data Science tools and frameworks
const dsTools = [
  'TensorFlow',
  'PyTorch',
  'Scikit-learn',
  'Pandas',
  'NumPy',
  'Matplotlib',
  'Seaborn', 
  'Jupyter',
  'Docker/Kubernetes',
];

// Business Intelligence tools
const biTools = [
  'Tableau',
  'Power BI',
  'Looker',
  'QlikView',
  'Google Data Studio',
  'Excel (Advanced)',
];

// LLM-specific tools and frameworks
const llmTools = [
  'LangChain',
  'LangGraph',
  'OpenAI API',
  'Hugging Face Transformers',
  'Llama Index',
  'Retrieval Augmented Generation (RAG)',
  'Vector Databases',
  'Prompt Engineering',
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredDsTool, setHoveredDsTool] = useState<string | null>(null);
  const [hoveredBiTool, setHoveredBiTool] = useState<string | null>(null);
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 bg-white text-black relative overflow-hidden">
      <GradientBackground className="opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16" style="flip">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            My Skills
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gray-800"></span>
          </h2>
          <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
            A combination of technical expertise that I bring to every data science project.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 gap-12">
          {/* Technical Skills */}
          <AnimatedSection direction="right" delay={0.2} style="slide">
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left relative inline-block">
              Technical Skills
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gray-600"></span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technicalSkills.map((skill, index) => (
                <AnimatedSection 
                  key={index} 
                  className="group bg-gray-50 p-4 rounded-lg shadow text-center relative overflow-hidden border border-gray-200" 
                  delay={0.1 * (index % 4 + 1)}
                  style="bounce"
                  hover={true}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <span className="font-medium relative z-10">{skill}</span>
                  <div className="absolute bottom-0 left-0 w-full h-0 bg-gray-200 transition-all duration-300 group-hover:h-full"></div>
                </AnimatedSection>
              ))}
            </div>
            
            {/* ML & Data Science Tools */}
            <AnimatedSection className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200 relative overflow-hidden" delay={0.4} style="zoom">
              <div className="absolute top-0 right-0 w-40 h-40 -translate-y-1/2 translate-x-1/2 bg-gradient-to-br from-gray-200/30 to-gray-400/30 rounded-full"></div>
              <h4 className="font-bold text-xl mb-4 relative">ML & Data Science Tools</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3 relative z-10">
                {dsTools.map((tool, index) => (
                  <div 
                    key={index} 
                    className={`bg-white px-3 py-2 rounded-md text-sm shadow-sm border transition-all duration-300 
                      ${hoveredDsTool === tool 
                        ? 'border-gray-400 transform scale-105 shadow-md' 
                        : 'border-gray-200'}`}
                    onMouseEnter={() => setHoveredDsTool(tool)}
                    onMouseLeave={() => setHoveredDsTool(null)}
                  >
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full ${hoveredDsTool === tool ? 'bg-gray-800' : 'bg-gray-400'} mr-2`}></div>
                      {tool}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            {/* Business Intelligence Tools */}
            <AnimatedSection className="mt-5 bg-gray-50 p-6 rounded-lg border border-gray-200 relative overflow-hidden" delay={0.5} style="zoom">
              <div className="absolute top-0 left-0 w-40 h-40 -translate-y-1/2 -translate-x-1/2 bg-gradient-to-tl from-gray-200/30 to-gray-400/30 rounded-full"></div>
              <h4 className="font-bold text-xl mb-4 relative">Business Intelligence Tools</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3 relative z-10">
                {biTools.map((tool, index) => (
                  <div 
                    key={index} 
                    className={`bg-white px-3 py-2 rounded-md text-sm shadow-sm border transition-all duration-300 
                      ${hoveredBiTool === tool 
                        ? 'border-gray-400 transform scale-105 shadow-md' 
                        : 'border-gray-200'}`}
                    onMouseEnter={() => setHoveredBiTool(tool)}
                    onMouseLeave={() => setHoveredBiTool(null)}
                  >
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full ${hoveredBiTool === tool ? 'bg-gray-800' : 'bg-gray-400'} mr-2`}></div>
                      {tool}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            {/* LLM Tools & Frameworks */}
            <AnimatedSection className="mt-5 bg-gray-100 p-6 rounded-lg border border-gray-200 relative overflow-hidden" delay={0.6} style="zoom">
              <div className="absolute bottom-0 left-0 w-40 h-40 translate-y-1/2 -translate-x-1/2 bg-gradient-to-tr from-gray-300/30 to-gray-500/30 rounded-full"></div>
              <h4 className="font-bold text-xl mb-4 relative">LLM Engineering Tools</h4>
              <div className="grid grid-cols-2 gap-3 mt-3 relative z-10">
                {llmTools.map((tool, index) => (
                  <div 
                    key={index} 
                    className={`bg-white px-3 py-2 rounded-md text-sm shadow-sm border transition-all duration-300 
                      ${hoveredTool === tool 
                        ? 'border-gray-400 transform scale-105 shadow-md' 
                        : 'border-gray-200'}`}
                    onMouseEnter={() => setHoveredTool(tool)}
                    onMouseLeave={() => setHoveredTool(null)}
                  >
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full ${hoveredTool === tool ? 'bg-gray-800' : 'bg-gray-400'} mr-2`}></div>
                      {tool}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Skills; 