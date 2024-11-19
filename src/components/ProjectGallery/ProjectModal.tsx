import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Building2, MapPin, Calendar, Ruler, DollarSign } from 'lucide-react';
import { Project } from '../../types';
import ModelViewer from '../ModelViewer';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = project.images[currentImageIndex];
    img.onload = () => setIsLoading(false);
    return () => {
      img.onload = null;
    };
  }, [currentImageIndex, project.images]);

  const nextImage = () => {
    setIsLoading(true);
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setIsLoading(true);
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 overflow-y-auto"
    >
      <button
        onClick={onClose}
        className="fixed top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 z-50"
      >
        <X size={24} />
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="w-full max-w-6xl bg-zinc-900 rounded-lg overflow-hidden my-8"
      >
        <div className="relative aspect-video">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onLoad={() => setIsLoading(false)}
            />
          </AnimatePresence>

          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
              <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          )}

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsLoading(true);
                  setCurrentImageIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <p className="text-zinc-400 mb-8">{project.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Building2 size={20} className="text-zinc-400" />
              <div>
                <p className="text-sm text-zinc-400">Category</p>
                <p>{project.details.client}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-zinc-400" />
              <div>
                <p className="text-sm text-zinc-400">Location</p>
                <p>{project.details.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-zinc-400" />
              <div>
                <p className="text-sm text-zinc-400">Year</p>
                <p>{project.details.year}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Ruler size={20} className="text-zinc-400" />
              <div>
                <p className="text-sm text-zinc-400">Size</p>
                <p>{project.details.size}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign size={20} className="text-zinc-400" />
              <div>
                <p className="text-sm text-zinc-400">Value</p>
                <p>{project.details.value}</p>
              </div>
            </div>
          </div>

          {project.modelUrl && (
            <div className="h-[400px] mb-8 bg-zinc-800 rounded-lg overflow-hidden">
              <ModelViewer modelUrl={project.modelUrl} />
            </div>
          )}

          {project.caseStudy && (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Challenge</h3>
                <p className="text-zinc-400">{project.caseStudy.challenge}</p>
              </div>
              <div className="bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Solution</h3>
                <p className="text-zinc-400">{project.caseStudy.solution}</p>
              </div>
              <div className="bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Outcome</h3>
                <p className="text-zinc-400">{project.caseStudy.outcome}</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;