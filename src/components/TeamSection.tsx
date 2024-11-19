import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';
import { team } from '../data';

const TeamSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member) => (
            <div key={member.id} className="group">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-zinc-400 mb-2">{member.role}</p>
              <p className="text-sm text-zinc-500 mb-4">{member.experience}+ Years Experience</p>
              <p className="text-zinc-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;