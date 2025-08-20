"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AxiomAIProject() {
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
              Axiom AI
            </h1>
            <span className="px-3 py-1 text-sm bg-green-500/20 text-green-400 border border-green-500/30 rounded-full">
              Current
            </span>
          </div>
          <p className="text-xl text-gray-400 font-light">
            AI-powered Student Productivity Platform
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
            src="/edugenie.png"
            alt="Axiom AI Platform"
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
                Vision
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Axiom AI is my vision for the future of student productivity. I
                wanted to create something that goes beyond traditional
                note-taking apps like Notion or Obsidian - a platform that truly
                understands how students learn and work.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The core idea is "Notion but better for student productivity" -
                combining the organizational power of existing tools with
                AI-driven insights, automated content generation, and seamless
                integration with academic workflows.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-sm uppercase tracking-[0.2em] text-gray-600 mb-6">
                Key Features
              </h2>
              <div className="space-y-4">
                <div className="border-l-2 border-gray-700 pl-4">
                  <h3 className="text-white font-medium mb-2">
                    AI-Generated Study Videos
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Transform your notes into engaging video content
                    automatically. The AI analyzes your study material and
                    creates visual explanations, making complex topics easier to
                    understand.
                  </p>
                </div>
                <div className="border-l-2 border-gray-700 pl-4">
                  <h3 className="text-white font-medium mb-2">
                    Google Calendar Integration
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Seamlessly sync assignments, deadlines, and study sessions
                    with your calendar. Never miss a deadline again with
                    intelligent reminders and time blocking.
                  </p>
                </div>
                <div className="border-l-2 border-gray-700 pl-4">
                  <h3 className="text-white font-medium mb-2">
                    Dynamic Mind Maps
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Automatically generate interconnected mind maps from your
                    notes, helping you visualize relationships between concepts
                    and improve retention.
                  </p>
                </div>
                <div className="border-l-2 border-gray-700 pl-4">
                  <h3 className="text-white font-medium mb-2">
                    RAG-Powered Search
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Ask questions about your study material in natural language.
                    The system uses retrieval-augmented generation to provide
                    contextual answers from your own notes.
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
                Technical Implementation
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Built with Next.js and TypeScript for a robust, type-safe
                frontend experience. The AI components leverage a RAG
                (Retrieval-Augmented Generation) architecture with vector
                databases for semantic search and content generation.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The backend runs on Flask/FastAPI for high-performance API
                endpoints, with Supabase handling real-time data synchronization
                and user authentication. Google Cloud services power the AI
                video generation and provide scalable infrastructure.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This is my latest and most ambitious project - I'm constantly
                iterating on the user experience and adding new AI-powered
                features based on feedback from fellow students.
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
                    "NextJs",
                    "TypeScript",
                    "RAG",
                    "Vector Database",
                    "Tailwind",
                    "Supabase",
                    "Flask/FastAPI",
                    "Google Cloud",
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
                      Full Stack AI Platform
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Team Size:</span>
                    <span className="text-gray-300 ml-2">Solo project</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Status:</span>
                    <span className="text-gray-300 ml-2">
                      My Latest Project!
                    </span>
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
                    href="https://github.com/naman0r/axiomai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors underline"
                  >
                    GitHub Repository →
                  </a>
                  <a
                    href="https://www.axiomai.space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors underline"
                  >
                    Live Demo →
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
            Want to learn more about my approach to AI-powered education?
          </p>
          <Link
            href="/contact"
            className="text-white hover:text-gray-300 transition-colors underline"
          >
            Let's discuss →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

