import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Brain, Smartphone, Globe, ChevronDown } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import { Link } from 'react-router-dom';
import { WavyBackground } from '../components/ui/wavy-background';

export default function Home() {
  // State for form submission status
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus({ submitting: true, submitted: false, error: null });
    
    try {
      const form = e.target;
      const formData = new FormData(form);
      
      // For Netlify's AJAX submission
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      })
      .then(() => {
        setFormStatus({ submitting: false, submitted: true, error: null });
        form.reset();
      })
      .catch(error => {
        setFormStatus({ 
          submitting: false, 
          submitted: false, 
          error: "Form submission failed. Please try again."
        });
      });
    } catch (error) {
      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: "Something went wrong. Please try again later."
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
        {/* Wave Background */}
        <div className="absolute inset-0 z-0">
          <WavyBackground
            colors={['#1E1E3F', '#2E3192', '#1E40AF', '#1E3A8A']}
            waveWidth={50}
            backgroundFill="transparent"
            blur={5}
            speed="slow"
            waveOpacity={0.3}
            className="h-full"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto relative z-10"
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
          <button 
            className="btn-primary"
            onClick={scrollToContact}
          >
            Let's Build Together
          </button>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 z-10"
          onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
          style={{ cursor: 'pointer' }}
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
            {formStatus.submitted ? (
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. We'll get back to you soon.</p>
                </motion.div>
              </div>
            ) : (
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Required hidden input for Netlify forms */}
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-black/50 rounded-lg border border-blue-900 focus:border-blue-500 focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-black/50 rounded-lg border border-blue-900 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 rounded-lg border border-blue-900 focus:border-blue-500 focus:outline-none"
                  required
                ></textarea>
                {formStatus.error && (
                  <div className="text-red-500 text-sm text-left">
                    Error: {formStatus.error}
                  </div>
                )}
                <button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}