import React from 'react';
import { education } from '../data/portfolioData';

const EducationItem = ({ title, subtitle, duration, index }) => (
  <div 
    data-aos="fade-up" 
    data-aos-delay={index * 150}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-red-500/30 hover:shadow-[0_15px_35px_rgba(255,42,42,0.1)] transition-all duration-500 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center w-full"
  >
    <div>
      <h3 className="text-white text-2xl font-black mb-2 tracking-tight">
        {title}
      </h3>
      <p className="text-white/60 text-sm font-medium">
        {subtitle}
      </p>
    </div>
    <div className="mt-4 md:mt-0 text-[#ff2a2a] text-sm font-mono font-bold uppercase tracking-wider bg-[#ff2a2a]/10 px-4 py-2 rounded-full border border-[#ff2a2a]/20">
      {duration}
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#ff2a2a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Academics
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Education
          </h2>
        </div>

        {/* Education List */}
        <div className="flex flex-col w-full">
          <EducationItem 
            title={education.degree} 
            subtitle={education.institution} 
            duration={education.cgpa} 
            index={1} 
          />
          <EducationItem 
            title={education.twelfth} 
            subtitle="Higher Secondary Certificate" 
            duration="Completed" 
            index={2} 
          />
          <EducationItem 
            title={education.tenth} 
            subtitle="Secondary School Certificate" 
            duration="Completed" 
            index={3} 
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
