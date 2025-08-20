"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function MindfulMomentumProject() {
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
              MindfulMomentum
            </h1>
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full">
              Deployed
            </span>
          </div>
          <p className="text-xl text-gray-400 font-light">
            Smart Productivity & Habits App with Chrome Extension
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
            src="/mindfulmomentum.png"
            alt="MindfulMomentum App"
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
                The Challenge
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In today's digital world, students and professionals struggle
                with maintaining productive habits while managing endless
                distractions. Traditional productivity apps often lack the
                security, cross-platform integration, and intelligent features
                needed for sustained habit formation.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I wanted to create a solution that not only tracks habits and
                tasks but actively helps users maintain focus and build lasting
                productive routines through smart technology integration.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-sm uppercase tracking-[0.2em] text-gray-600 mb-6">
                Core Features
              </h2>
              <div className="space-y-4">
                <div className="border-l-2 border-gray-700 pl-4">
                  <h3 className="text-white font-medium mb-2">
                    Smart Habit Tracking
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Intelligent habit formation system that adapts to your
                    schedule and provides personalized insights to help you
                    build consistent routines.
                  </p>
                </div>
                <div className="border-l-2 border-gray-700 pl-4">
                  <h3 className="text-white font-medium mb-2">
                    Digital Journaling
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Secure, encrypted journaling with prompts and mood tracking
                    to support mental wellness and self-reflection practices.
                  </p>
                </div>
                <div className="border-l-2 border-gray-700 pl-4">
                  <h3 className="text-white font-medium mb-2">
                    Chrome Extension Integration
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Companion Chrome extension with focus mode blocking
                    distracting websites and seamless task synchronization
                    across devices.
                  </p>
                </div>
                <div className="border-l-2 border-gray-700 pl-4">
                  <h3 className="text-white font-medium mb-2">
                    Secure Architecture
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Built with user privacy in mind using JWT authentication,
                    encrypted data storage, and secure API endpoints.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-sm uppercase tracking-[0.2em] text-gray-600 mb-6">
                Technical Architecture
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The frontend is built with React.js and Tailwind CSS for a
                responsive, modern interface. The backend uses Flask for API
                development with JWT-based authentication for security.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Data is managed through Supabase for real-time synchronization
                and Firebase for additional cloud services. The Chrome extension
                communicates with the main app through secure API calls,
                enabling seamless cross-platform functionality.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The application is deployed with Vercel for the frontend and
                Railway for the backend, ensuring reliable uptime and
                scalability. Currently in beta with active users providing
                feedback for continuous improvement.
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
                    "React.js",
                    "Tailwind CSS",
                    "Flask",
                    "Supabase",
                    "Firebase",
                    "JWT",
                    "Chrome Extension API",
                    "Vercel",
                    "Railway",
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
                      March 2025 - Current
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Type:</span>
                    <span className="text-gray-300 ml-2">
                      Full Stack Web + Extension
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Team Size:</span>
                    <span className="text-gray-300 ml-2">Solo project</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Status:</span>
                    <span className="text-gray-300 ml-2">Deployed (Beta)</span>
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
                    href="https://github.com/naman0r/mindfulmomentum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors underline"
                  >
                    GitHub Repository →
                  </a>
                  <a
                    href="https://mindfulmomentum.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors underline"
                  >
                    Live Application →
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
            Curious about the productivity techniques I've built into this app?
          </p>
          <Link
            href="/contact"
            className="text-white hover:text-gray-300 transition-colors underline"
          >
            Start a conversation →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

