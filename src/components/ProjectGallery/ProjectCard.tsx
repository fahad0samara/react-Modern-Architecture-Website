import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, MapPin, Calendar } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer bg-zinc-800 rounded-lg overflow-hidden"
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <button className="px-6 py-3 bg-white text-black rounded-full flex items-center gap-2">
            View Project <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-zinc-300 transition-colors">
          {project.title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <Building2 size={16} />
            <span>{project.category}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <MapPin size={16} />
            <span>{project.details.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <Calendar size={16} />
            <span>{project.details.year}</span>
          </div>
        </div>

        <p className="text-sm text-zinc-400 line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;