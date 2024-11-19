import React from 'react';
import { Sparkles, Clock, ThumbsUp } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">WHY CHOOSE US</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="group">
            <div className="mb-6">
              <Sparkles size={32} className="text-zinc-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-4">WE CREATE SOLUTIONS</h3>
            <p className="text-zinc-400 group-hover:text-white transition-colors">
              Innovative architectural solutions tailored to your specific needs and vision.
            </p>
          </div>
          
          <div className="group">
            <div className="mb-6">
              <Clock size={32} className="text-zinc-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-4">CAREFULLY PLANNED</h3>
            <p className="text-zinc-400 group-hover:text-white transition-colors">
              Meticulous attention to detail in every phase of your project.
            </p>
          </div>
          
          <div className="group">
            <div className="mb-6">
              <ThumbsUp size={32} className="text-zinc-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-4">GOOD EXPERIENCE</h3>
            <p className="text-zinc-400 group-hover:text-white transition-colors">
              25+ years of excellence in architectural design and client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;