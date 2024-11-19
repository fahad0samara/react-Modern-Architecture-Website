import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    category: string;
    year: string;
    size: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    category: string;
    year: string;
    size: string;
  }>>;
}

const FilterDrawer = ({ isOpen, onClose, filters, setFilters }: FilterDrawerProps) => {
  const drawerVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={drawerVariants}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-zinc-900 z-50 p-6"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">Filters</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-zinc-800"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800 rounded-lg focus:ring-2 focus:ring-white/20 outline-none"
                >
                  <option value="all">All Categories</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="institutional">Institutional</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Year</label>
                <select
                  value={filters.year}
                  onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800 rounded-lg focus:ring-2 focus:ring-white/20 outline-none"
                >
                  <option value="all">All Years</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Size</label>
                <select
                  value={filters.size}
                  onChange={(e) => setFilters({ ...filters, size: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800 rounded-lg focus:ring-2 focus:ring-white/20 outline-none"
                >
                  <option value="all">All Sizes</option>
                  <option value="small">Small (&lt; 5,000 sq ft)</option>
                  <option value="medium">Medium (5,000 - 20,000 sq ft)</option>
                  <option value="large">Large (&gt; 20,000 sq ft)</option>
                </select>
              </div>

              <button
                onClick={() => setFilters({ category: 'all', year: 'all', size: 'all' })}
                className="w-full px-4 py-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FilterDrawer;