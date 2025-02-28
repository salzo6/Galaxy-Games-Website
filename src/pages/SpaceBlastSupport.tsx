import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function SpaceBlastSupport() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-flux mb-6">SpaceBlast Support</h1>
          <p className="text-xl text-gray-400">
            Get help with SpaceBlast
          </p>
        </motion.div>

        <div className="space-y-8">
          <div className="space-y-8 mb-16">
            <div className="bg-blue-950/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-900/50"> 
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-400">
                Welcome to SpaceBlast, an exciting and fast-paced spaceship shooter game that challenges your reflexes and precision. As you navigate through space, your mission is to avoid getting hit by asteroids and magma balls while shooting down all the asteroids to stay in the game.
              </p>
            </div>
  
            <div className="bg-blue-950/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-900/50">
              <h2 className="text-2xl font-bold mb-4">Gameplay Instructions</h2>
              <p className="text-gray-400 mb-4">
                In SpaceBlast, you control a spaceship with the goal of surviving as long as possible. Here's how to play:
              </p>
              <ul className="list-disc list-inside text-gray-400 ml-4 space-y-2">
                <li>Move Your Spaceship: Use one touch controls to maneuver your spaceship. The objective is to shoot down all the asteroids and dodge the incoming magma balls that threaten to end your mission.</li>
                <li>Shoot the Asteroids: Hold your finger on the screen to fire your spaceship's weapons. Your goal is to shoot down every asteroid in your path. If you miss an asteroid, the game will be over.</li>
                <li>Avoid Obstacles: Keep an eye on the magma balls! Successfully avoiding them will allow you to continue your journey through space.</li>
                <li>High Score: Aim for the highest score by surviving as long as you can and shooting down as many asteroids as possible. Challenge your friends to beat your score!</li>
              </ul>
            </div>
  
            <div className="bg-blue-950/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-900/50">
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="list-disc list-inside text-gray-400 ml-4">
                <li>Intuitive Controls: Simple and responsive touch controls make it easy to navigate your spaceship and fire at asteroids.</li>
                <li>Challenging Gameplay: Fast-paced action with increasing difficulty keeps you on your toes.</li>
                <li>Score Tracking: Track your high scores and strive to improve with each play.</li>
              </ul>
            </div>
  
            <div className="bg-blue-950/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-900/50">
              <h2 className="text-2xl font-bold mb-4">Tips and Tricks</h2>
              <ul className="list-disc list-inside text-gray-400 ml-4">
                <li>Stay Alert: Always be aware of the incoming asteroids and magma balls. Quick reflexes are key to survival.</li>
                <li>Aim Accurately: Take your time to aim accurately when shooting at asteroids. Missing an asteroid ends the game.</li>
                <li>Practice Makes Perfect: The more you play, the better you'll become at navigating and shooting. Keep practicing to achieve higher scores.</li>
              </ul>
            </div>
  
            <div className="bg-blue-950/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-900/50">
              <h2 className="text-2xl font-bold mb-4">Technical Support</h2>
              <p className="text-gray-400 mb-4">
                If you encounter any issues while playing SpaceBlast, our support team is here to help. Common issues might include:
              </p>
              <ul className="list-disc list-inside text-gray-400 ml-4">
                <li>Game Crashes: Ensure your device has sufficient memory and storage. Restarting your device can also help resolve temporary issues.</li>
                <li>Control Issues: Make sure your screen is clean and free from obstructions. If controls are unresponsive, try recalibrating your device.</li>
                <li>Performance Problems: Close any background apps to improve game performance. Ensure your device's software is up-to-date.</li>
              </ul>
            </div>
  
            <div className="bg-blue-950/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-900/50">
              <h2 className="text-2xl font-bold mb-4">Feedback</h2>
              <p className="text-gray-400 mb-4">
                We value your feedback! If you have suggestions or ideas to improve SpaceBlast, please let us know. Your input helps us make the game even better.
              </p>
              <p className="text-gray-400">
                Thank you for playing SpaceBlast! We hope you enjoy the game and have a blast shooting down asteroids and dodging obstacles in space. Happy gaming!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}