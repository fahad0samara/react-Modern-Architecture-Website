import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data';

const Testimonials = () => {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Client Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-black p-8 rounded-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-current text-yellow-500" />
                ))}
              </div>
              
              <p className="text-zinc-300 mb-6">{testimonial.content}</p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-zinc-400">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;