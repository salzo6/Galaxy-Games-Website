import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

export default function MobileApps() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="absolute inset-0 z-0 opacity-40">
        <ParticleBackground />
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-flux mb-6">Our Mobile Games</h1>
          <p className="text-xl text-gray-400">
            Experience the thrill of space adventures
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="/src/Images/SpaceBlast-app-icon.png"
                alt="SpaceBlast"
                className="w-32 h-32 rounded-3xl shadow-lg"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">SpaceBlast</h3>
                <p className="text-gray-400 mb-4">
                  Take control of a powerful spaceship and navigate through treacherous space, destroying asteroids while avoiding collisions. Test your reflexes and precision in this intense space shooter!
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://apps.apple.com/no/app/spaceblast/id6479930631"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Download on App Store
                  </a>
                  <Link
                    to="/spaceblast/support"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Support
                  </Link>
                  <Link
                    to="/spaceblast/privacy"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="/src/Images/nebula-dash-app-icon.png"
                alt="Nebula Dash"
                className="w-32 h-32 rounded-3xl shadow-lg"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Nebula Dash</h3>
                <p className="text-gray-400 mb-4">
                  A demonstration of AI-powered game development, Nebula Dash features an astronaut running through a spaceship while dodging obstacles. This project showcases how modern AI tools can streamline game creation, making development faster and more accessible than ever before. The entire creation process of this is on our TikTok and Instagram pages. 
                </p>
                <div className="text-blue-400">
                  Coming Soon
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}