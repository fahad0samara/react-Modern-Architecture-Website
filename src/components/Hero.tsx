import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Modern<br />Architecture
          </h1>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl">
            Since 1995, we've been crafting exceptional spaces that inspire, innovate, and endure. Experience architecture that transforms vision into reality.
          </p>
          <button className="px-8 py-4 bg-white text-black rounded-lg font-medium flex items-center gap-2 hover:bg-zinc-200 transition-colors group">
            View Our Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;