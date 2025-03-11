"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import GradientBackground from './GradientBackground';

// Real project data provided by the user
const projects = [
  {
    id: 1,
    title: 'NIA - AI Agent for Post-discharged Patients',
    description: 'Developed a text-based AI Agent to check up on discharged patients on a regular basis, answering inquiries about their post-op system and tracking their recovery journey.',
    technologies: ['n8n', 'DigitalOcean', 'Docker', 'RAG', 'Python', 'API'],
    image: '/project_images/nia_hack.png',
    hackathon: 'AIML MedHackathon Melbourne',
    codeLink: 'https://github.com/NathanNguyen-Dev/MedHack-Flatliners',
  },
  {
    id: 2,
    title: 'AirBnB Host Growth Hacking in Melbourne',
    description: 'Analysis on how AirBnb hosts can get the fastest growth for their profile operating in Melbourne. Won first place at the Alteryx Student Hackathon 2023.',
    technologies: ['Alteryx', 'Python', 'R', 'Data Analysis', 'Visualization'],
    image: '/project_images/air_bnb_hack.png',
    hackathon: 'Alteryx Student Hackathon 2023 - First Place',
    codeLink: 'https://www.canva.com/design/DAFhjNQdVw8/QQFa71dC7NlzThwToQq4zg/view?utm_content=DAFhjNQdVw8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h54d45c661c',
  },
  {
    id: 3,
    title: 'Comic Me - Cycle GAN Implementation',
    description: 'Used Cycle GAN architecture to transform selfie pictures into cartoonized avatar portraits. Created during the Coderschool Hackathon 2020.',
    technologies: ['TensorFlow', 'Streamlit', 'Python', 'Computer Vision', 'GANs'],
    image: '/project_images/comic_me_banner.png',
    hackathon: 'Coderschool Hackathon 2020',
    codeLink: 'https://github.com/NathanNguyen-Dev/Comic_Me_V1',
  },
];

const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);
  
  const handleMouseEnter = (id: number) => {
    setActiveProjectId(id);
  };
  
  const handleMouseLeave = () => {
    setActiveProjectId(null);
  };

  return (
    <section id="projects" className="py-20 bg-black text-white relative overflow-hidden">
      <GradientBackground className="opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16" style="zoom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            My Projects
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gray-200 transform transition-transform duration-300 ease-in-out origin-left"></span>
          </h2>
          <p className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto">
            Here are some of my award-winning data science and machine learning projects from hackathons and competitions.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              className={`group bg-gray-800 rounded-xl overflow-hidden shadow-lg ${activeProjectId === project.id ? 'ring-2 ring-gray-300 scale-[1.02]' : 'hover:scale-[1.02]'} transition-all duration-300`}
              style={index % 2 === 0 ? 'bounce' : 'zoom'}
              delay={0.1 * (index + 1)}
              hover={true}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 transform transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                    className="transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevent infinite callback loop
                      console.log(`Failed to load image: ${project.image}`);
                    }}
                  />
                  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                  {project.title}
                </h3>
                <div className="mb-2 transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                  <span className="inline-block bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">
                    {project.hackathon}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 transition-opacity duration-300 group-hover:opacity-90">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2 text-gray-300">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-gray-700 rounded-md text-xs transform transition-all duration-300 group-hover:bg-gray-600 hover:scale-105"
                        style={{
                          transitionDelay: `${techIndex * 50}ms`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  {project.codeLink && (
                    <Link 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center px-4 py-2 overflow-hidden rounded-lg text-sm font-medium text-gray-300 transition-all duration-300"
                    >
                      <span className="absolute left-0 top-0 h-full w-0 bg-gray-300 opacity-10 transition-all duration-300 group-hover:w-full"></span>
                      <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      <span className="relative">View Project</span>
                    </Link>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 