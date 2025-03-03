import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Brain, Smartphone, Globe, ChevronDown } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-flux mb-6">
            <Typewriter
              options={{
                strings: ['Powering the Future with AI Automation'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
                pauseFor: 2500,
              }}
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Transforming businesses through cutting-edge AI, mobile apps, and web solutions
          </p>
          <button className="btn-primary">
            Let's Build Together
          </button>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10"
        >
          <ChevronDown size={32} className="text-blue-400" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Link to="/ai-automation">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="card bg-gradient-to-br from-blue-950/30 via-indigo-950/20 to-cyan-950/30"
              >
                <Brain className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">AI Automation</h3>
                <p className="text-gray-400">
                  Leverage the power of artificial intelligence to automate and optimize your business processes.
                </p>
              </motion.div>
            </Link>

            <Link to="/mobile-apps">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="card bg-gradient-to-br from-blue-950/30 via-indigo-950/20 to-cyan-950/30"
              >
                <Smartphone className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Mobile Apps</h3>
                <p className="text-gray-400">
                  Create stunning, user-friendly mobile applications that engage and delight your customers.
                </p>
              </motion.div>
            </Link>

            <Link to="/web-development">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="card bg-gradient-to-br from-blue-950/30 via-indigo-950/20 to-cyan-950/30"
              >
                <Globe className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                <p className="text-gray-400">
                  Efficiently build modern, responsive websites that showcase your brand and drive results.
                </p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how we can help you achieve your goals with our cutting-edge solutions.
          </p>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-950/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-900/50"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-black/50 rounded-lg border border-blue-900 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-black/50 rounded-lg border border-blue-900 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 bg-black/50 rounded-lg border border-blue-900 focus:border-blue-500 focus:outline-none"
              ></textarea>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}