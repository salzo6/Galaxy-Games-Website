import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import { WavyBackground } from '../components/ui/wavy-background';
import { ChevronDown } from 'lucide-react';

export default function MobileApps() {
  return (
    <div className="min-h-screen bg-black pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <ParticleBackground />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-flux mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Our Mobile Games</h1>
          <p className="text-xl text-gray-400">
            Experience the thrill of space adventures
          </p>
        </motion.div>
        

        {/* Introductory Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto my-8 px-4" // Applied width and centering
        >
          <div
            className="bg-blue-950/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-900/50" // Applied card styling
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="/images/galaxy-games-logo.png"
                alt="Galaxy Games"
                className="w-32 h-32 rounded-3xl shadow-lg"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">
                  Galaxy Games
                </h3>
                <p className="text-gray-400 mb-4">
                  Creativity has always been at the core of our work, driving passion for game development. We thrive on designing unique experiences, blending technology, storytelling, and innovation to create immersive and engaging worlds. From mechanics to aesthetics, every detail is an opportunity to push boundaries and craft something truly memorable. For us, game development is more than just coding—it's about bringing ideas to life in a way that captivates and inspires.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="text-center mt-8">
          <ChevronDown size={32} className="text-blue-400 mx-auto" />
        </div>

        <ContainerScroll>
          <div className="flex flex-col gap-12 p-6 h-full">
            {/* SpaceBlast */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img
                  src="/images/SpaceBlast-app-icon.png"
                  alt="SpaceBlast"
                  className="w-48 h-48 rounded-3xl shadow-lg mx-auto"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-3xl font-flux bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                  SpaceBlast
                </h3>
                <p className="text-gray-400 dark:text-gray-200 text-lg">
                  Take control of a powerful spaceship and navigate through
                  treacherous space, destroying asteroids while avoiding
                  collisions. Test your reflexes and precision in this intense
                  space shooter!
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://apps.apple.com/no/app/spaceblast/id6479930631"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Download on App Store
                  </a>
                  <Link
                    to="/spaceblast/support"
                    className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
                  >
                    Support
                  </Link>
                  <Link
                    to="/spaceblast/privacy"
                    className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30" />

            {/* Nebula Dash */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img
                  src="/images/nebula-dash-app-icon.png"
                  alt="Nebula Dash"
                  className="w-48 h-48 rounded-3xl shadow-lg mx-auto"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-3xl font-flux bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Nebula Dash
                </h3>
                <p className="text-gray-400 dark:text-gray-200 text-lg">
                  A demonstration of AI-powered game development, Nebula Dash
                  features an astronaut running through a spaceship while dodging
                  obstacles. This project showcases how modern AI tools can
                  streamline game creation, making development faster and more
                  accessible than ever before. The entire creation process of this
                  is on our TikTok and Instagram pages.
                </p>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </div>
  );
}