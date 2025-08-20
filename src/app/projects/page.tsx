"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "Axiom AI",
      subtitle: "AI-powered Student Productivity Platform",
      description:
        "Creating a platform where students can log and track their projects, homeworks and assignments, with google calendar integration, AI-generated videos, mindmap creation, and note taking. Notion but better for student productivity.",
      tech: [
        "NextJs",
        "TypeScript",
        "RAG",
        "Vector Database",
        "Tailwind",
        "Supabase",
        "Flask/FastAPI",
        "Google Cloud",
      ],
      status: "Current",
      featured: true,
      github: "https://github.com/naman0r/axiomai",
      demo: "https://www.axiomai.space",
      date: "March 2025",
      image: "/edugenie.png", // placeholder - update with actual image
      slug: "axiom-ai",
      hasDetailPage: true,
    },
    {
      title: "MindfulMomentum",
      subtitle: "Smart Productivity & Habits App",
      description:
        "A Smart, Productivity, habits, and journalism app. Built with user security and scalability in mind. Works with a Chrome Extension with focus mode and task sync feature.",
      tech: [
        "Tailwind",
        "Supabase",
        "React.js",
        "Flask",
        "Firebase",
        "JSON Web Tokens",
      ],
      status: "Deployed",
      featured: true,
      github: "https://github.com/naman0r/mindfulmomentum",
      demo: "https://mindfulmomentum.vercel.app/",
      date: "March 2025",
      image: "/mindfulmomentum.png",
      slug: "mindfulmomentum",
      hasDetailPage: true,
    },
    {
      title: "AMA Automator",
      subtitle: "Internal Tooling for TAMID",
      description:
        "Developed a full stack web app for TAMID at Northeastern to help with automating the Ask-me-anything process held on slack. Implemented Auth and Slack Webhooks.",
      tech: [
        "Supabase",
        "React.js",
        "Flask",
        "Slack WebHooks",
        "Internal Tooling",
      ],
      status: "Current",
      featured: false,
      github: "https://github.com/naman0r/ama-consulting-project",
      demo: "",
      date: "March 2025",
      image: "/ama.png",
      slug: "ama-automator",
      hasDetailPage: false,
    },
    {
      title: "BackBuddy App",
      subtitle: "Arduino-Integrated Posture Tracker",
      description:
        "App-integrated Arduino Product that helps users improve and track their posture. Fits on any chair. Works with Pressure Values which inflate and deflate to correct posture.",
      tech: ["React Native", "Arduino", "Arduino IoT", "Firebase"],
      status: "Current",
      featured: true,
      github: "https://github.com/naman0r/backbuddy-app",
      demo: "",
      date: "Spring 2025",
      image: "/backbuddy-app.png",
      slug: "backbuddy",
      hasDetailPage: true,
    },
    {
      title: "Car2Drvr",
      subtitle: "AI Car Recommendation Platform",
      description:
        "A full stack App that allows users to find tailored recommendations for cars to buy based on their needs and provides a price range that informs the user and prevents overpaying.",
      tech: ["Full Stack", "React", "Firebase", "Flask"],
      status: "Deployed",
      featured: false,
      github: "https://github.com/somshrivastava/car2drvr",
      demo: "https://car2drvr-finhacks.firebaseapp.com/",
      date: "January 2025",
      image: "/car2drvr.png",
      slug: "car2drvr",
      hasDetailPage: false,
    },
    {
      title: "NUtrition",
      subtitle: "University Dining Nutrition Tracker",
      description:
        "Full Stack app that scrapes nutritional information from the University Dining Hall website, and users are allowed to keep detailed logs and track their meals and diet over time.",
      tech: ["Selenium.py", "React", "Firebase", "Flask", "Supabase"],
      status: "Current",
      featured: false,
      github: "https://github.com/Oasis-NEU/sp25-group-11",
      demo: "https://nutrition-oasis.vercel.app/",
      date: "Spring 2025",
      image: "/NUtrition.png",
      slug: "nutrition",
      hasDetailPage: false,
    },
    {
      title: "StudyBuddy",
      subtitle: "University Study Group Connector",
      description:
        "A full stack app that connects university students with each other to form study groups.",
      tech: ["Streamlit", "MySQL", "Docker", "Flask"],
      status: "Completed",
      featured: false,
      github: "https://github.com/Arshayp/studybuddy-2",
      demo: "",
      date: "Spring 2025",
      image: "/studybuddy.png",
      slug: "studybuddy",
      hasDetailPage: false,
    },
    {
      title: "TaNews",
      subtitle: "Full Stack News Platform",
      description:
        "Full Stack news app with posting, reading, liking, Admin and User separation, etc.",
      tech: ["Docker", "Flask", "React", "TypeScript", "MySQL"],
      status: "Current",
      featured: false,
      github: "https://github.com/IpDaniel/tanews/tree/naman",
      demo: "",
      date: "Spring 2025",
      image: "/tanews.png",
      slug: "tanews",
      hasDetailPage: false,
    },
    {
      title: "Personal Website",
      subtitle: "Interactive Portfolio",
      description:
        "Interactive, easy to use personal website to showcase my work. Built with React.js and modern animations.",
      tech: ["React", "Framer Motion", "GSAP", "PrimeReact", "JavaScript"],
      status: "Deployed",
      featured: false,
      github: "https://github.com/naman0r/personal-website",
      demo: "https://namanrusia.com",
      date: "December 2024",
      image: "/personal-website.png",
      slug: "personal-website",
      hasDetailPage: false,
    },
    {
      title: "DoNow!",
      subtitle: "Chrome Extension Todo App",
      description:
        "A Smart and Simple-to-use To-do list app, conveniently in the form of a Google Chrome Extension. Go give it a try!",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Published",
      featured: false,
      github: "https://github.com/naman0r/doNow_chrome_extension",
      demo: "https://chromewebstore.google.com/detail/donow-to-do-list/ledniccgbjopheokhlcpaajlblopaegf",
      date: "November 2024",
      image: "/donow-pic.png",
      slug: "donow",
      hasDetailPage: false,
    },
  ];

  // Get all unique technologies for filtering
  const allCategories = [
    "All",
    "Featured",
    ...new Set(projects.flatMap((project) => project.tech)),
  ];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : selectedCategory === "Featured"
      ? projects.filter((project) => project.featured)
      : projects.filter((project) => project.tech.includes(selectedCategory));

  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const handleCardClick = () => {
      if (project.hasDetailPage) {
        window.location.href = `/projects/${project.slug}`;
      }
    };

    const handleLinkClick = (e: React.MouseEvent, url: string) => {
      e.stopPropagation();
      window.open(url, "_blank");
    };

    return (
      <motion.div
        key={project.slug}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        onClick={handleCardClick}
        className={`relative overflow-hidden rounded-2xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 ${
          project.featured ? "md:col-span-2" : ""
        } ${project.hasDetailPage ? "cursor-pointer" : ""}`}
      >
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />

          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                project.status === "Current"
                  ? "bg-green-500 text-white border border-green-500/30"
                  : project.status === "Deployed"
                  ? "bg-blue-900 text-blue-400 border border-blue-500/30"
                  : "bg-gray-900 text-gray-400 border border-gray-500/30"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>
            {project.hasDetailPage && (
              <span className=" flex flex-row text-xs text-lime-500 px-2 py-1 bg-gray-800 rounded items-center animate-bounce">
                View Details
                <FaArrowRightFromBracket className="ml-2" />
              </span>
            )}
          </div>

          <p className="text-gray-400 text-sm mb-3">{project.subtitle}</p>

          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((tech: string) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-gray-800/80 text-gray-300 rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-xs px-2 py-1 bg-gray-800/80 text-gray-400 rounded-md">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-gray-500">{project.date}</span>
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <button
              onClick={(e) => handleLinkClick(e, project.github)}
              className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors"
            >
              GitHub
            </button>
            {project.demo && (
              <button
                onClick={(e) => handleLinkClick(e, project.demo)}
                className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors"
              >
                Live Demo
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen text-white py-12 px-6 relative overflow-hidden">
      {/* Dynamic Moving Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Primary gradient orb - Orange/Red */}
        <motion.div
          animate={{
            x: ["-20%", "120%"],
            y: ["10%", "80%", "20%"],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(255,69,0,0.6) 0%, rgba(255,140,0,0.4) 30%, rgba(255,165,0,0.2) 50%, transparent 70%)",
          }}
        />

        {/* Secondary gradient orb - Blue/Purple */}
        <motion.div
          animate={{
            x: ["120%", "-20%"],
            y: ["80%", "10%", "70%"],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute w-[800px] h-[800px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(0,100,255,0.6) 0%, rgba(100,50,255,0.4) 30%, rgba(150,100,255,0.2) 50%, transparent 70%)",
          }}
        />

        {/* Tertiary gradient orb - Purple/Pink */}
        <motion.div
          animate={{
            x: ["50%", "-10%", "110%"],
            y: ["-10%", "110%", "50%"],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgb(255, 0, 149) 0%, rgba(200,50,255,0.3) 30%, rgba(150,100,255,0.2) 50%, transparent 70%)",
          }}
        />

        {/* Flowing gradient background */}
        <motion.div
          animate={{
            backgroundPosition: [
              "0% 0%",
              "100% 100%",
              "0% 100%",
              "100% 0%",
              "0% 0%",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "linear-gradient(45deg, rgba(255,69,0,0.3) 0%, rgba(0,100,255,0.3) 25%, rgba(255,0,150,0.3) 50%, rgba(100,50,255,0.3) 75%, rgba(255,69,0,0.3) 100%)",
            backgroundSize: "400% 400%",
          }}
        />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Projects
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-3xl">
            A collection of projects I've built, ranging from AI-powered
            platforms to productivity tools. Click on featured projects to dive
            deeper into my thought process.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-white text-black font-medium"
                    : "bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`${project.slug}-${index}`}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* GitHub Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-16 border-t border-gray-900"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-gray-600 mb-8">
            Open Source
          </h2>
          <div className="mb-6">
            <img
              src="https://raw.githubusercontent.com/naman0r/naman0r/refs/heads/output/github-snake-dark.svg"
              alt="GitHub Snake Animation"
              className="w-full max-w-2xl"
            />
          </div>
          <a
            href="https://github.com/naman0r"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors underline"
          >
            View GitHub Profile →
          </a>
        </motion.div>
      </div>
    </div>
  );
}
