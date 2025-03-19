import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg border-b border-blue-900/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/images/galaxytech-logo.png" 
              alt="Galaxy Tech Logo" 
              className="w-8 h-8"
            />
            <span className="font-flux text-2xl text-white">GALAXY TECH</span>
          </Link>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex space-x-8">
            <Link to="/ai-automation" className="nav-link">AI Automation</Link>
            <Link to="/mobile-apps" className="nav-link">Mobile Apps</Link>
            <Link to="/web-development" className="nav-link">Web Development</Link>
            <Link to="/about" className="nav-link">About</Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/ai-automation" className="nav-link block px-3 py-2">AI Automation</Link>
              <Link to="/mobile-apps" className="nav-link block px-3 py-2">Mobile Apps</Link>
              <Link to="/web-development" className="nav-link block px-3 py-2">Web Development</Link>
              <Link to="/about" className="nav-link block px-3 py-2">About</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}