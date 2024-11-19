import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { Project } from '../../types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import FilterDrawer from './FilterDrawer';
import { projects } from '../../data';

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    year: 'all',
    size: 'all',
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  const filteredAndSortedProjects = projects
    .filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = filters.category === 'all' || project.category.toLowerCase() === filters.category;
      const matchesYear = filters.year === 'all' || project.details.year.toString() === filters.year;
      const matchesSize = filters.size === 'all' || categorizeSize(project.details.size) === filters.size;
      return matchesSearch && matchesCategory && matchesYear && matchesSize;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.details.year - a.details.year;
        case 'oldest':
          return a.details.year - b.details.year;
        case 'nameAsc':
          return a.title.localeCompare(b.title);
        case 'nameDesc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

  const categorizeSize = (size: string): string => {
    const numericSize = parseInt(size.replace(/[^0-9]/g, ''));
    if (numericSize < 5000) return 'small';
    if (numericSize < 20000) return 'medium';
    return 'large';
  };

  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold">Our Projects</h2>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
          >
            <SlidersHorizontal size={24} />
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-12 pr-4 py-3 bg-zinc-800 rounded-lg focus:ring-2 focus:ring-white/20 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <select
            className="px-4 py-3 bg-zinc-800 rounded-lg focus:ring-2 focus:ring-white/20 outline-none"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="nameAsc">Name (A-Z)</option>
            <option value="nameDesc">Name (Z-A)</option>
          </select>
        </div>

        <AnimatePresence mode="wait">
          {filteredAndSortedProjects.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              {filteredAndSortedProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <p className="text-xl text-zinc-400">No projects found matching your criteria.</p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>

        <FilterDrawer
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
    </section>
  );
};

export default ProjectGallery;