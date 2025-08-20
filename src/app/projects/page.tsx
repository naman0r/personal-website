"use client";

import React, { useState } from "react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "Axiom AI - AI-powered Student Productivity Platform",
      description:
        "Creating a platform where students can log and track their projects, homeworks and assignments, with google calendar integration, AI-generated videos, mindmap creation, and note taking. Notion but better for student productivity. AI-generated videos implemented, google calendar integration implemented.",
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
      github: "https://github.com/naman0r/axiomai",
      demo: "https://www.axiomai.space",
      date: "March 2025, Current, My Latest Project!",
      color: "#ff9800",
    },
    {
      title: "MindfulMomentum",
      description:
        "A Smart, Productivity, habits, and journalism app. Built with user security and scalability in mind. Works with a Chrome Extension , which has a focus mode and task sync feature. Deployed with Vercel (frontend) and Railway (backend).",
      tech: [
        "Tailwind",
        "Supabase",
        "React.js",
        "Flask",
        "Firebase",
        "JSON Web Tokens",
      ],
      status: "Deployed",
      github: "https://github.com/naman0r/mindfulmomentum",
      demo: "https://mindfulmomentum.vercel.app/",
      date: "March 2025, Current, Deployed (Beta)",
      color: "#4caf50",
    },
    {
      title: "AMA Automator - Internal Tooling",
      description:
        "Developed a full stack web app for TAMID at Northeastern to help with automating the Ask-me-anything process- which is held on slack. Impelemented Auth, used Slack Webhooks to create a slack agent.",
      tech: [
        "Supabase",
        "React.js",
        "Flask",
        "Slack WebHooks",
        "Internal Tooling",
      ],
      status: "Current",
      github: "https://github.com/naman0r/ama-consulting-project",
      demo: "",
      date: "March 2025 - Current",
      color: "#4caf50",
    },
    {
      title: "MindMapr: AI powered Study Tool",
      description:
        "A Full Stack AI powered study tool that generates easy to understand visualizations from student's study notes. Authentication implemented, MongoDB database.",
      tech: [
        "Full Stack",
        "React",
        "Node.js",
        "REST Api",
        "MongoDB",
        "Firebase",
      ],
      status: "Completed",
      github: "https://github.com/naman0r/MindMapr",
      demo: "https://www.youtube.com/watch?v=SWPsYICRIOQ",
      date: "Jan-March 2025, Completed",
      color: "#ff9800",
    },
    {
      title: "StudyBuddy",
      description:
        "A full stack app that connects university students with each other to form study groups.",
      tech: ["Streamlit", "MySQL", "Docker", "Flask"],
      status: "Completed",
      github: "https://github.com/Arshayp/studybuddy-2",
      demo: "",
      date: "Spring 2025",
      color: "#4caf50",
    },
    {
      title: "BackBuddy App",
      description:
        "App-integrated Arduino Product that helps users improve and track their posture. Fits on any chair. Works with Pressure Values which inflate and deflate to correct posture. App connects with hardware with an HC-5 BLE Module.",
      tech: ["React Native", "Arduino", "Arduino IoT", "Firebase"],
      status: "Current",
      github: "https://github.com/naman0r/backbuddy-app",
      demo: "",
      date: "Spring 2025, Current",
      color: "#4caf50",
    },
    {
      title: "Car2Drvr",
      description:
        "A full stack App that allows users to find tailored reccomendations for cars to buy based on their needs and provides a price range that informs the user and prevents overpaying",
      tech: ["Full Stack", "React", "Firebase", "Flask"],
      status: "Deployed",
      github: "https://github.com/somshrivastava/car2drvr",
      demo: "https://car2drvr-finhacks.firebaseapp.com/",
      date: "January 2025, FinHacks Hackathon, Deployed",
      color: "#ff9800",
    },
    {
      title: "NUtrition",
      description:
        "Full Stack app that scrapes nutritional information from the University Dining Hall wesbite, and users are allowed to keep detailed logs and track their meals and diet over time, and realize trends",
      tech: ["Selenium.py", "React", "Firebase", "Flask", "Supabase"],
      status: "Current",
      github: "https://github.com/Oasis-NEU/sp25-group-11",
      demo: "https://nutrition-oasis.vercel.app/",
      date: "Spring 2025, Current",
      color: "#4caf50",
    },
    {
      title: "TaNews",
      description:
        "Full Stack news app with posting, reading, liking, Admin and User separation, etc.",
      tech: ["Docker", "Flask", "React", "TypeScript", "MySQL"],
      status: "Current",
      github: "https://github.com/IpDaniel/tanews/tree/naman",
      demo: "",
      date: "Spring 2025, Current",
      color: "#ff9800",
    },
    {
      title: "Personal Website",
      description:
        "Interractive, easy to use personal website to showcase my work. Built with React.js",
      tech: ["React", "Framer Motion", "GSAP", "PrimeReact", "JavaScript"],
      status: "Deployed",
      github: "https://github.com/naman0r/personal-website",
      demo: "https://namanrusia.com",
      date: "December 2024 - Current, deployed",
      color: "#4caf50",
    },
    {
      title: "DoNow!: Chrome Extension",
      description:
        "A Smart and Simple-to-use To-do list app, conveniently in the form of a Google Chrome Extension. Go give it a try!",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Published",
      github: "https://github.com/naman0r/doNow_chrome_extension",
      demo: "https://chromewebstore.google.com/detail/donow-to-do-list/ledniccgbjopheokhlcpaajlblopaegf",
      date: "November 2024, completed and on Chrome Web Store",
      color: "#ff9800",
    },
  ];

  // Get all unique technologies for filtering
  const allCategories = [
    "All",
    ...new Set(projects.flatMap((project) => project.tech)),
  ];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.tech.includes(selectedCategory));

  return (
    <>
      {/* Clean Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
        <p className="text-gray-400 text-lg max-w-3xl">
          A collection of projects I've built, ranging from AI-powered platforms
          to productivity tools.
        </p>
      </div>

      {/* Simple Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-2">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-2 text-sm transition-colors ${
                selectedCategory === category
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="w-full h-px bg-gray-800 mt-4"></div>
      </div>

      {/* Clean Projects List */}
      <div className="space-y-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="border-l-2 border-gray-800 pl-6 hover:border-gray-600 transition-colors"
          >
            <div className="mb-2">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <span className="text-xs text-gray-500 px-2 py-1 bg-gray-800 rounded">
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-3">{project.date}</p>
            </div>

            <p className="text-gray-300 mb-4 leading-relaxed max-w-4xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-gray-900 text-gray-300 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors underline"
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Open Source Section */}
      <div className="mt-16 pt-8 border-t border-gray-800">
        <h2 className="text-2xl font-bold text-white mb-4">Open Source</h2>
        <p className="text-gray-400 mb-6 max-w-2xl">
          I contribute to open source projects and believe in giving back to the
          developer community.
        </p>
        <a
          href="https://github.com/naman0r"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors underline"
        >
          View GitHub Profile
        </a>
      </div>
    </>
  );
}
