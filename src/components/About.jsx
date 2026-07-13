import React from 'react';
import stackImage from '../assets/HeroImg.png';
import { aboutContent } from '../data/portfolioData';

const MernIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]" viewBox="0 0 128 128">
      {/* Central React Atom */}
      <g stroke="#00d8ff" strokeWidth="5" fill="none" transform="translate(10, 10)">
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(30 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(90 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(150 54 54)" />
        <circle cx="54" cy="54" r="8" fill="#00d8ff" />
      </g>
      {/* MongoDB Leaf */}
      <path fill="#439934" d="M36 84c-3-6-4-15 0-22 3 7 9 10 10 15 2 1.5 1 3-2 5l-8 2zm4-25c2 4 4 11 0 16-1-5-6-8-7-12-2-1-1-3 2-4l5 0z" />
      {/* Node.js Hexagon */}
      <path fill="#339933" d="M98 32l-12-7-12 7v14l12 7 12-7V32zm-12 1.5l8 4.6v9.3l-8 4.6-8-4.6v-9.3l8-4.6z" />
    </svg>
    <span className="text-xs font-bold text-white uppercase tracking-wider mt-1">MERN Stack</span>
  </div>
);

const CppIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]" viewBox="0 0 128 128">
      <path fill="#00599C" d="M117.5 33.5l-53.5-31-53.5 31v61l53.5 31 53.5-31z"/>
      <path fill="#FFF" d="M57.6 83c-13.8 0-25-11.2-25-25s11.2-25 25-25c10.8 0 20 6.8 23.5 16.5h-10.4c-2.5-4.4-7.2-7.4-12.8-7.4-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5c5.6 0 10.3-3 12.8-7.4h10.4c-3.5 9.7-12.7 16.5-23.5 16.5zm19.3-17v-8h8v-6h-8v-8h-6v8h-8v6h8v8h6zm20 0v-8h8v-6h-8v-8h-6v8h-8v6h8v8h6z"/>
    </svg>
    <span className="text-xs font-bold text-white uppercase tracking-wider mt-1">C++</span>
  </div>
);

const SolidityIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]" viewBox="0 0 128 128">
      <path fill="#363636" d="M83.84 41.52L64 30.06l-19.84 11.46v22.92L64 75.9l19.84-11.46zm19.84 11.46L83.84 64.44v22.92L103.68 75.9zm-79.36 0v22.92L64 98.8v-22.92L44.32 64.44zM64 8.16L44.16 19.62v22.92L64 54l19.84-11.46V19.62z"/>
    </svg>
    <span className="text-xs font-bold text-white uppercase tracking-wider mt-1">Solidity</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Aditya Joshi — Web Developer & Blockchain Enthusiast" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <MernIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <CppIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <SolidityIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
