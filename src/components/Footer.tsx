import React from 'react';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-blue-900/30 py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center items-center space-x-6">
          <a
            href="https://www.instagram.com/galaxy_games_ig?igsh=cjJjdGVtNGdlbGVv&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.tiktok.com/@galaxy_games_tt?_t=ZM-8uDI05j42H1&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-6 h-6"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>
        <p className="text-gray-300">
          Copyright © 2025 Galaxy Tech - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}