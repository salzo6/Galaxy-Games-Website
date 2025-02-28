import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code, Rocket, Database, Zap, Layers } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

export default function WebDevelopment() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const glowVariants = {
    initial: { boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)" },
    animate: { 
      boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)",
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20 relative overflow-hidden">
      {/* Custom particle background with different settings */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ParticleBackground />
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-40 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 right-10 w-40 h-40 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 1,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-flux mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
            Web Development Solutions
          </h1>
          <p className="text-xl text-gray-400">
            Build powerful web applications with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            className="bg-gradient-to-br from-blue-950/40 to-indigo-900/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-800/50 relative overflow-hidden"
          >
            <motion.div 
              className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"
              variants={floatVariants}
              initial="initial"
              animate="animate"
            />
            <Globe className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Full-Stack Development</h3>
            <p className="text-gray-400">
              End-to-end web development solutions using modern technologies and frameworks.
            </p>
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            />
          </motion.div>

          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            className="bg-gradient-to-br from-indigo-950/40 to-blue-900/30 backdrop-blur-lg rounded-2xl p-8 border border-indigo-800/50 relative overflow-hidden"
          >
            <motion.div 
              className="absolute -left-10 -top-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl"
              variants={floatVariants}
              initial="initial"
              animate="animate"
            />
            <Code className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
            <p className="text-gray-400">
              Tailored web applications that meet your specific business requirements.
            </p>
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-blue-400"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            />
          </motion.div>

          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            className="bg-gradient-to-br from-blue-950/40 to-cyan-900/30 backdrop-blur-lg rounded-2xl p-8 border border-cyan-800/50 relative overflow-hidden"
          >
            <motion.div 
              className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"
              variants={floatVariants}
              initial="initial"
              animate="animate"
            />
            <Rocket className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Performance Optimization</h3>
            <p className="text-gray-400">
              Fast, responsive websites optimized for the best user experience.
            </p>
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-blue-400"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            />
          </motion.div>

          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            className="bg-gradient-to-br from-cyan-950/40 to-blue-900/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-800/50 relative overflow-hidden"
          >
            <motion.div 
              className="absolute -left-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"
              variants={floatVariants}
              initial="initial"
              animate="animate"
            />
            <Database className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Scalable Architecture</h3>
            <p className="text-gray-400">
              Build robust, scalable applications that grow with your business.
            </p>
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            />
          </motion.div>

          <motion.div
            custom={4}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            className="bg-gradient-to-br from-indigo-950/40 to-purple-900/30 backdrop-blur-lg rounded-2xl p-8 border border-indigo-800/50 relative overflow-hidden"
          >
            <motion.div 
              className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl"
              variants={floatVariants}
              initial="initial"
              animate="animate"
            />
            <Zap className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Progressive Web Apps</h3>
            <p className="text-gray-400">
              Create app-like experiences that work offline and load instantly.
            </p>
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-400"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            />
          </motion.div>

          <motion.div
            custom={5}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            className="bg-gradient-to-br from-blue-950/40 to-indigo-900/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-800/50 relative overflow-hidden"
          >
            <motion.div 
              className="absolute -left-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"
              variants={floatVariants}
              initial="initial"
              animate="animate"
            />
            <Layers className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">UI/UX Excellence</h3>
            <p className="text-gray-400">
              Intuitive interfaces and seamless user experiences that delight customers.
            </p>
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-400"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-blue-950/30 via-indigo-950/20 to-cyan-950/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-900/50 space-y-6 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
            
            <motion.h2 
              className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              The Power of AI in Web Development
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Traditional web development is a time-intensive process, often requiring weeks or even months of work from a full development team. From planning and design to coding and testing, building a fully functional, high-quality website demands extensive resources and expertise. However, with the power of AI-driven automation, this process is being completely redefined.
            </motion.p>

            <motion.p 
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              AI can generate, optimize, and deploy websites in a fraction of the time, programming everything from the underlying structure to interactive elements with speed and precision. Instead of relying on manual coding for every component, intelligent automation streamlines development by understanding project requirements, adapting designs dynamically, and ensuring seamless functionality. What once took months can now be accomplished in just days—without compromising quality or customization.
            </motion.p>

            <motion.p 
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              At Galaxy Tech, we specialize in harnessing AI to revolutionize web development, delivering cutting-edge digital experiences faster than ever. By automating complex processes, we empower businesses to stay ahead in an increasingly competitive digital landscape.
            </motion.p>
            
            <motion.div 
              className="w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-full mt-6"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}