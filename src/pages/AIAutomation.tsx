import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, Cpu, Network } from 'lucide-react';

export default function AIAutomation() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-flux mb-6">AI Automation Solutions</h1>
          <p className="text-xl text-gray-400">
            Revolutionize your business with our cutting-edge AI automation technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <Bot className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Intelligent Process Automation</h3>
            <p className="text-gray-400">
              Streamline your workflows with AI-powered automation that learns and adapts to your business needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
          >
            <Cpu className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Machine Learning Solutions</h3>
            <p className="text-gray-400">
              Harness the power of machine learning to make data-driven decisions and predict future trends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card"
          >
            <Network className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Neural Networks</h3>
            <p className="text-gray-400">
              Deploy sophisticated neural networks for complex pattern recognition and decision-making tasks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card"
          >
            <Brain className="w-12 h-12 text-blue-400 mb-4" />
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