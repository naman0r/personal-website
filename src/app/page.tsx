"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Dynamic Ambient Background */}
      <div className="fixed inset-0 -z-10">
        {/* Large animated gradient orbs */}

        {/* Subtle mesh pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
               linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
               linear-gradient(90deg, rgb(236, 19, 19) 10px, transparent 1px)
             `,
            backgroundSize: "100px 1000px",
          }}
        />

        {/* Enhanced noise texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Hero Section */}
      <motion.section
        style={{ opacity, y }}
        className="relative min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
              <span className="text-gray-500">Hey, I'm</span> Naman
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
              A Computer Science and Business student interested in the
              intersection of Finance, Software, Design and building{" "}
              <span className="text-gray-200">impactful </span>
              software.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border border-gray-700 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-0.5 h-2 bg-gray-600 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Philosophy Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-gray-600 mb-12">
              Philosophy
            </h2>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <p className="text-2xl md:text-3xl font-light text-white">
                Code is a medium for thought.
              </p>

              <p className="text-lg md:text-xl">
                I believe software development is fundamentally about
                problem-solving and human connection. The best code isn't just
                efficient—it's understandable, maintainable, and serves real
                human needs.
              </p>

              <p className="text-lg md:text-xl">
                My approach combines technical rigor with design sensibility.
                I'm drawn to projects that challenge conventional thinking and
                push the boundaries of what's possible on the web.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Background Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-gray-600 mb-12">
              Background
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-light text-white mb-4">Journey</h3>
                <p className="text-gray-400 leading-relaxed">
                  {/* Started with curiosity about how things work on the internet.
                  That curiosity evolved into a passion for building digital
                  experiences that matter. From tinkering with HTML in high
                  school to architecting full-scale applications today. */}
                  I haven't been coding since I was six. I picked up a few CS
                  classes in high school, but my 'eureka' moment came during my
                  first semester of college, where I had a project idea that I
                  got obsessed with. Ever since, coding is my creative outlet. I
                  love building cool and impactful software. Take a look at my{" "}
                  <Link href="/projects" className="underline">
                    projects
                  </Link>{" "}
                  to learn more about the problems I've endevoured to solve.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-light text-white mb-4">Focus</h3>
                <p className="text-gray-400 leading-relaxed">
                  I love learning. Outside of my internships, I love taking on
                  side projects and learning something new every couple of days.
                  Recently I've been learning about Neural Networks and their
                  implementation with the help of{" "}
                  <Link
                    href="https://youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ&si=HDnjdU1r9EJlTFqt"
                    target="_blank"
                    className="underline"
                  >
                    Andrej Karpathy's playlist.
                  </Link>{" "}
                  I'm also building a side project called{" "}
                  <Link href="/projects/tandemcode">TandemCode</Link> to explore
                  how I can build a social platform which further incentivizes
                  with peer-aided tech interview prep.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 pt-20">
              <div>
                <h3 className="text-xl font-light text-white mb-4">College</h3>
                <p className="text-gray-400 leading-relaxed">
                  I love exploring outside of classrooms. Over the course of my
                  time at Northeastern University, I have been involved with{" "}
                  <Link
                    href="https://www.forgenu.com/home"
                    className="underline"
                  >
                    Forge
                  </Link>
                  , a product development studio, where I worked on 2 projects
                  over the course of 2 semesters that involved mobile app
                  development using React Native.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-light text-white mb-4">Focus</h3>
                <p className="text-gray-400 leading-relaxed"></p>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-gray-900">
              <p className="text-gray-500 text-sm">
                Available for select projects and collaborations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-gray-900">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <p className="text-gray-600 text-sm">© 2024</p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-400 transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-400 transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-400 transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
