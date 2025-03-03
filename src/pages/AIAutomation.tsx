import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, Cpu, Network, MessageSquare, Globe, Rocket } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

export default function AIAutomation() {
  return (
    <div className="min-h-screen bg-black pt-20 relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ParticleBackground />
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-40 left-10 w-64 h-64 bg-gradient-to-br from-purple-600/10 to-fuchsia-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 right-10 w-80 h-80 bg-gradient-to-tr from-violet-500/10 to-fuchsia-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 12,
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
          <h1 className="text-5xl font-flux mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-300 to-violet-500">
            AI Automation Solutions
          </h1>
          <p className="text-xl text-gray-400">
            Revolutionize your business with our cutting-edge AI automation technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-950/30 via-fuchsia-950/20 to-violet-950/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-900/30 relative overflow-hidden"
          >
            {/* Inner decorative elements */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-3xl" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full blur-md opacity-30 animate-pulse" />
                  <MessageSquare className="w-16 h-16 text-fuchsia-400 relative z-10" />
                </div>
              </div>
              
              <motion.h2 
                className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-fuchsia-400"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                AI Chatbots
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-300"
              >
                Our flagship product, AI-powered chatbots, revolutionize customer support by replacing traditional human-operated support centers. These intelligent, text-based assistants provide instant, accurate, and scalable responses—enhancing efficiency while reducing costs. The very chatbot on this website is a testament to our cutting-edge technology.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="w-full h-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-violet-600 rounded-full mt-8"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-violet-950/30 via-purple-950/20 to-fuchsia-950/30 backdrop-blur-lg rounded-2xl p-8 border border-violet-900/30 relative overflow-hidden"
          >
            {/* Inner decorative elements */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl" />
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative z-10"
            >
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full blur-md opacity-30 animate-pulse" />
                  <Globe className="w-16 h-16 text-violet-400 relative z-10" />
                </div>
              </div>
              
              <motion.h2 
                className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-purple-400"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                AI-Powered Web Development
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-300"
              >
                AI is transforming the web development process, drastically reducing the time and resources needed to build high-quality websites. Our AI-driven solutions streamline everything from design to deployment, delivering fully functional, customized websites in just days. Visit our web development section to learn more.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="w-full h-1 bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-600 rounded-full mt-8"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-fuchsia-950/30 via-violet-950/20 to-purple-950/30 backdrop-blur-lg rounded-2xl p-8 border border-fuchsia-900/30 relative overflow-hidden"
          >
            {/* Inner decorative elements */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-3xl" />
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative z-10"
            >
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 to-violet-500 rounded-full blur-md opacity-30 animate-pulse" />
                  <Rocket className="w-16 h-16 text-fuchsia-400 relative z-10" />
                </div>
              </div>
              
              <motion.h2 
                className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 to-violet-400"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Innovations in Development
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-gray-300"
              >
                We are continuously expanding our AI solutions to push the boundaries of automation. Our upcoming products include:
              </motion.p>
              
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="list-disc list-inside text-gray-300 mt-2 space-y-2"
              >
                <li>AI Phone Call Bots – Automating customer service, appointment scheduling, and sales calls with natural, human-like AI conversations.</li>
                <li>AI Mobile App Development – Accelerating app creation with AI-driven automation, reducing development time while ensuring high performance.</li>
                <li>AI Lead Generation & Client Outreach – Intelligent automation for identifying leads, personalizing outreach, and increasing conversion rates.</li>
              </motion.ul>
            </motion.div>
            
            <motion.div 
              className="w-full h-1 bg-gradient-to-r from-fuchsia-600 via-violet-500 to-purple-600 rounded-full mt-8"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/30 to-fuchsia-600/30 rounded-full border border-purple-500/30 text-purple-300">
            <Brain className="w-5 h-5" />
            <span>Stay ahead of the curve with Galaxy Tech’s cutting-edge AI solutions</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-950/20 to-fuchsia-950/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-900/30"
          >
            <Bot className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Intelligent Process Automation</h3>
            <p className="text-gray-400">
              Streamline your workflows with AI-powered automation that learns and adapts to your business needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-fuchsia-950/20 to-violet-950/20 backdrop-blur-lg rounded-2xl p-6 border border-fuchsia-900/30"
          >
            <Cpu className="w-12 h-12 text-fuchsia-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Machine Learning Solutions</h3>
            <p className="text-gray-400">
              Harness the power of machine learning to make data-driven decisions and predict future trends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-violet-950/20 to-purple-950/20 backdrop-blur-lg rounded-2xl p-6 border border-violet-900/30"
          >
            <Network className="w-12 h-12 text-violet-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Neural Networks</h3>
            <p className="text-gray-400">
              Deploy sophisticated neural networks for complex pattern recognition and decision-making tasks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-950/20 to-fuchsia-950/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-900/30"
          >
            <Brain className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Cognitive Computing</h3>
            <p className="text-gray-400">
              Implement cognitive computing solutions that understand, learn, and interact naturally with humans.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}