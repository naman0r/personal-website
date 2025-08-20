"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function BackBuddyProject() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight">
              BackBuddy App
            </h1>
            <span className="px-3 py-1 text-sm bg-green-500/20 text-green-400 border border-green-500/30 rounded-full">
              Current
            </span>
          </div>
          <p className="text-xl text-gray-400 font-light">
            Arduino-Integrated Posture Tracker
          </p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-12 rounded-2xl overflow-hidden"
        >
          <Image
            src="/backbuddy-app.png"
            alt="BackBuddy App"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-2">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-sm uppercase tracking-[0.2em] text-gray-600 mb-6">
                The Problem
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Poor posture is a massive problem for students and office
                workers who spend long hours at desks. Traditional solutions
                like reminder apps are passive and don't provide real-time
                feedback or physical correction.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We wanted to create a solution that not only detects poor
                posture but actively helps correct it through physical feedback
                and mobile app integration.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-sm uppercase tracking-[0.2em] text-gray-600 mb-6">
                The Solution
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                BackBuddy is an innovative hardware-software solution that
                consists of:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Arduino-based chair attachment</strong> that fits on
                    any chair and uses pressure sensors to detect posture
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Inflatable pressure bladders</strong> that provide
                    gentle physical correction when poor posture is detected
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>React Native mobile app</strong> that connects via
                    Bluetooth to track progress and provide analytics
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Real-time feedback system</strong> that learns your
                    sitting patterns and adapts accordingly
                  </span>
                </li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-sm uppercase tracking-[0.2em] text-gray-600 mb-6">
                Technical Approach
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The hardware uses Arduino IoT with multiple pressure sensors
                positioned strategically on the chair. When the sensors detect
                uneven pressure distribution (indicating slouching or poor
                posture), the system activates targeted pressure bladders to
                gently guide the user back to proper alignment.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The mobile app connects via HC-5 Bluetooth module and provides a
                dashboard for tracking posture trends, setting personal goals,
                and customizing sensitivity settings. All data is stored in
                Firebase for cross-device synchronization and long-term
                analytics.
              </p>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Tech Stack */}
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-gray-600 mb-4">
                  Tech Stack
                </h3>
                <div className="space-y-2">
                  {[
                    "React Native",
                    "Arduino",
                    "Arduino IoT",
                    "Firebase",
                    "Bluetooth HC-5",
                    "Expo",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-3 py-1 text-sm bg-gray-900 text-gray-300 rounded-md mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-gray-600 mb-4">
                  Project Info
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500">Timeline:</span>
                    <span className="text-gray-300 ml-2">
                      Spring 2025 - Current
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Type:</span>
                    <span className="text-gray-300 ml-2">
                      Hardware + Software
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Team Size:</span>
                    <span className="text-gray-300 ml-2">2 developers</span>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-gray-600 mb-4">
                  Links
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/naman0r/backbuddy-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors underline"
                  >
                    GitHub Repository →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-12 border-t border-gray-900"
        >
          <p className="text-gray-500 text-sm mb-4">
            Interested in learning more about this project?
          </p>
          <Link
            href="/contact"
            className="text-white hover:text-gray-300 transition-colors underline"
          >
            Get in touch →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

