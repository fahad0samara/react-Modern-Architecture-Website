import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold">MANSION</a>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-zinc-300">About Us</a>
            <a href="#" className="hover:text-zinc-300">Services</a>
            <a href="#" className="hover:text-zinc-300">Projects</a>
            <a href="#" className="hover:text-zinc-300">Contact</a>
            <a href="#" className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors">
              Get Started
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-4 space-y-4">
            <a href="#" className="block hover:text-zinc-300">About Us</a>
            <a href="#" className="block hover:text-zinc-300">Services</a>
            <a href="#" className="block hover:text-zinc-300">Projects</a>
            <a href="#" className="block hover:text-zinc-300">Contact</a>
            <a href="#" className="block px-4 py-2 border border-white text-center hover:bg-white hover:text-black transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;