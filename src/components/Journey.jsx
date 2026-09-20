import React, { useState } from 'react';
import img1 from '../assets/images/gallery-1.png';
import img2 from '../assets/images/gallery-2.jpg';
import img3 from '../assets/images/gallery-4.png';
import img4 from '../assets/images/my1sthack.jpg';

const journeyItems = [
  { id: 1, img: img1, title: 'Technical Summit', event: 'Campus Activities', year: '2024', badge: null },
  { id: 2, img: img2, title: 'Team Collaborations', event: 'Workshop', year: '2024', badge: null },
  { id: 3, img: img3, title: 'Winning Moments', event: 'Tech Events', year: '2025', badge: null },
  { id: 4, img: img4, title: 'My First Hackathon', event: 'Hackathon', year: '2024', badge: 'Participant' },
];

const Journey = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="journey" className="bg-[#111] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Gallery
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            The Journey
          </h2>
          <p className="text-white/50 text-base md:text-lg font-semibold max-w-lg mx-auto">
            Hackathons, workshops, technical events, and team collaborations.
          </p>
        </div>

        {/* Masonry / Grid Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {journeyItems.map((item, index) => (
            <div 
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl bg-white/5 border border-white/10"
              onClick={() => setSelectedImage(item.img)}
            >
              <img 
                src={item.img} 
                alt={item.title} 
                loading="lazy"
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              

            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex justify-center items-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#ff2a2a] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={selectedImage} 
            alt="Lightbox" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.1)]"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking on image
          />
        </div>
      )}
    </section>
  );
};

export default Journey;
