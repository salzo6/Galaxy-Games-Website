import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, Code } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

export default function About() {
  return (
    <div className="min-h-screen bg-black pt-20 relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ParticleBackground />
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-40 right-10 w-64 h-64 bg-gradient-to-br from-purple-600/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-to-tr from-teal-500/10 to-emerald-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          delay: 2,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-flux mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-500">
            About Galaxy Tech
          </h1>
          <p className="text-xl text-gray-400">
            Pioneering the future of technology with innovation and expertise
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-teal-950/20 via-emerald-950/10 to-blue-950/20 backdrop-blur-lg rounded-2xl p-8 border border-teal-900/30 max-w-4xl mx-auto mb-16 relative overflow-hidden"
        >
          {/* Inner decorative elements */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" />
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
          
          <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full blur-md opacity-30 animate-pulse" />
              <img 
                src="src/Images/gradphoto.png" 
                alt="Salvatore Papia" 
                className="w-64 h-64 object-cover rounded-full border-4 border-teal-500/50 relative z-10"
              />
              
              <motion.div
                className="absolute -z-10 inset-0 rounded-full"
                animate={{ 
                  boxShadow: ["0 0 15px rgba(20, 184, 166, 0.3)", "0 0 30px rgba(20, 184, 166, 0.5)", "0 0 15px rgba(20, 184, 166, 0.3)"]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <div>
              <motion.h2 
                className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-emerald-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Salvatore Papia – Founder & CEO of Galaxy Tech
              </motion.h2>
              
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <Cpu className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    I'm Salvatore Papia, a computer engineer with a passion for AI and technology. I graduated from Queen's University with a degree in Computer Engineering and have an extensive background in programming and artificial intelligence.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <Sparkles className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    My journey into AI started when I set out to create a mobile game called SpaceBlast. Throughout the development process, I used various AI tools to streamline my workflow, and I was amazed at how much more efficiently everything could be done with the help of AI. That realization sparked a deeper curiosity—if AI could make game development easier, what other areas of life could it revolutionize?
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-start gap-3"
                >
                  <Code className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    That question led me to found Galaxy Tech, where I explore the vast potential of AI to create smarter, more efficient solutions. From AI automation to mobile apps and websites, my goal is to build technology that empowers businesses and individuals. I believe we've only scratched the surface of what AI can do, and I'm dedicated to unlocking its full potential to improve the way we work and live.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="w-full h-1 bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-600 rounded-full mt-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600/30 to-emerald-600/30 rounded-full border border-teal-500/30 text-teal-300">
            <Sparkles className="w-5 h-5" />
            <span>Transforming the future with AI-powered innovation</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}