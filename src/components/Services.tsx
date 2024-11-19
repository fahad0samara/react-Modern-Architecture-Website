import React from 'react';
import { Building2, TreePine, PenTool } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-12">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="group">
            <div className="mb-6">
              <Building2 size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Architecture</h3>
            <p className="text-zinc-400 group-hover:text-white transition-colors">
              Comprehensive architectural services from concept to completion.
            </p>
          </div>
          
          <div className="group">
            <div className="mb-6">
              <TreePine size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Landscape Architecture</h3>
            <p className="text-zinc-400 group-hover:text-white transition-colors">
              Creating harmonious outdoor spaces that complement your architecture.
            </p>
          </div>
          
          <div className="group">
            <div className="mb-6">
              <PenTool size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Interior Design</h3>
            <p className="text-zinc-400 group-hover:text-white transition-colors">
              Thoughtful interior solutions that enhance living spaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;