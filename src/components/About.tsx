"use client";

import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
        </AnimatedSection>
        
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="space-y-6" direction="up" delay={0.2}>
            <p className="text-lg text-gray-700">
              Hello! I'm <strong>Nathan Nguyen</strong>, a Data Engineer and Machine Learning practitioner with a passion for building efficient data pipelines and developing impactful predictive models that solve real-world business challenges.
            </p>
            
            <p className="text-lg text-gray-700">
              In my professional career, I've developed data solutions that increased projected profits by $1.4M for F&B brands, designed optimization tools that streamlined supply chains, and created algorithms that reduced model inference time by 80%. I've also built ETL pipelines using MongoDB, Airbyte, and DBT, and maintained Docker containers for seamless data flow between frontend, backend, and cloud servers.
            </p>
            
            <p className="text-lg text-gray-700">
              Beyond my technical work, I'm an avid hackathon participant who thrives in high-pressure creative environments. I've contributed to multiple winning projects by developing innovative solutions under tight deadlines. When I'm not coding, I'm a serious video game min-maxer who approaches games with the same analytical mindset I bring to data problems—optimizing strategies and finding elegant solutions to complex challenges.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <AnimatedSection className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300" delay={0.4}>
                <h3 className="font-bold text-xl mb-2">Education</h3>
                <p className="text-gray-600">
                  MSc Data Science<br />
                  Deakin University<br />
                  2023-2025
                </p>
              </AnimatedSection>
              
              <AnimatedSection className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300" delay={0.5}>
                <h3 className="font-bold text-xl mb-2">Location</h3>
                <p className="text-gray-600">
                  Melbourne, Victoria<br />
                  Australia<br />
                  Available for remote work
                </p>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About; 