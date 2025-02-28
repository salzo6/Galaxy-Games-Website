import React from 'react';
import { motion } from 'framer-motion';

export default function SpaceBlastPrivacy() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-flux mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-400">
            SpaceBlast Privacy Policy
          </p>
        </motion.div>

        <div className="space-y-8 mb-16">
          <div className="bg-blue-950/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-900/50">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-400">
              Thank you for playing SpaceBlast! Your privacy is important to us, and we are committed to protecting your personal data. This privacy policy explains how SpaceBlast uses and protects any information that you may provide while playing the game.
            </p>
          </div>

          <div className="bg-blue-950/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-900/50">
            <h2 className="text-2xl font-bold mb-4">Data Collection</h2>
            <p className="text-gray-400">
              SpaceBlast itself does not collect any personal data. As a simple shooter game, it is designed to offer an engaging gameplay experience without the need to access or store your personal information.
            </p>
          </div>

          <div className="bg-blue-950/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-900/50">
            <h2 className="text-2xl font-bold mb-4">Third-Party Data Collection</h2>
            <p className="text-gray-400">
              Although SpaceBlast does not collect your data directly, it is important to note that SpaceBlast is developed using the Unity platform and utilizes Unity's advertisement features. Consequently, some of your data may be collected by Unity and its advertisement partners.
            </p>
          </div>

          <div className="bg-blue-950/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-900/50">
            <h2 className="text-2xl font-bold mb-4">Unity Ads</h2>
            <p className="text-gray-400">
              Unity Technologies, the provider of the game development platform we use, may collect certain information for the purpose of serving advertisements within SpaceBlast. The data collected by Unity Ads may include, but is not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-2 ml-4">
              <li>Device information (such as device model, operating system, and unique device identifiers)</li>
              <li>IP address</li>
              <li>Geolocation data</li>
              <li>Advertising identifiers</li>
              <li>App usage data (such as session information, in-game interactions, and ad views/clicks)</li>
            </ul>
            <p className="text-gray-400 mt-2">
              For more detailed information on Unity's data practices, please review Unity's privacy policy: <a href="https://unity.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-400">Unity Privacy Policy</a>.
            </p>
          </div>

          <div className="bg-blue-950/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-900/50">
            <h2 className="text-2xl font-bold mb-4">How Collected Data is Used</h2>
            <p className="text-gray-400">
              The data collected by Unity Ads is primarily used for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-2 ml-4">
              <li>Serving personalized advertisements based on your preferences and behavior</li>
              <li>Improving ad targeting and effectiveness</li>
              <li>Conducting analytics and reporting on ad performance</li>
              <li>Ensuring compliance with legal obligations and protecting against fraudulent activity</li>
            </ul>
          </div>

          <div className="bg-blue-950/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-900/50">
            <h2 className="text-2xl font-bold mb-4">Data Sharing and Security</h2>
            <p className="text-gray-400">
              Unity may share the collected data with third-party service providers and partners who assist in delivering and optimizing advertisements. Unity employs industry-standard security measures to protect your data from unauthorized access, disclosure, or misuse.
            </p>
          </div>

          <div className="bg-blue-950/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-900/50">
            <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
            <p className="text-gray-400">
              As a player, you have the following rights and choices regarding your data:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-2 ml-4">
              <li>Opt-out of Personalized Ads: You can opt-out of receiving personalized ads by adjusting your device settings or by following the instructions provided in Unity's privacy policy.</li>
              <li>Access and Correction: You have the right to request access to the personal data Unity holds about you and to request corrections if any data is inaccurate or incomplete.</li>
              <li>Deletion: You may request the deletion of your personal data collected by Unity, subject to certain legal and contractual limitations.</li>
            </ul>
            <p className="text-gray-400 mt-2">
              For more information on how to exercise your rights, please refer to Unity's privacy policy.
            </p>
          </div>

          <div className="bg-blue-950/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-900/50">
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-400">
              We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically to stay informed about how we are protecting your data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}