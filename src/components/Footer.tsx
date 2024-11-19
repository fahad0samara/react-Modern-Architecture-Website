import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">MANSION</h3>
            <p className="text-zinc-400 mb-6">
              Creating exceptional architectural experiences since 1995. We transform spaces into lasting impressions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white">Projects</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-400 hover:text-white">Architecture</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white">Interior Design</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white">Landscape Design</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white">Urban Planning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-zinc-400">
                <MapPin size={20} />
                123 Architecture St, NY 10001
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <Phone size={20} />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <Mail size={20} />
                contact@mansion.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8">
          <p className="text-center text-zinc-400">
            © {new Date().getFullYear()} Mansion Architecture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;