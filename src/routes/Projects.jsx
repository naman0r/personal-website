import React, { useState } from "react";
import TopNav from "../components/TopNav";
import Footer from "../components/FooterMainPage";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Projects.css";

import {
  DiReact,
  DiPython,
  DiJavascript,
  DiGit,
  DiGithubBadge,
} from "react-icons/di";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [gradient, setGradient] = useState({ x: 50, y: 50 });

  const techIcons = {
    React: <DiReact size={24} color="#61DBFB" />,
    Python: <DiPython size={24} color="#3776AB" />,
    JavaScript: <DiJavascript size={24} color="#F7DF1E" />,
    Git: <DiGit size={24} color="#F05032" />,
    GitHub: <DiGithubBadge size={24} color="black" />,
    Flask: <DiPython size={24} color="green" />, // Flask icon is not in react-icons, so using Python
    NodeJs: <DiJavascript size={24} color="green" />,
    Firebase: <DiReact size={24} color="orange" />,
  };

  const projects = [
    {
      title: "MindfulMomentum",
      description:
        "A Smart, Productivity, habits, and journalism app. Built with user security and scalability in mind. Works with a Chrome Extension , which has a focus mode and task sync feature. Deployed with Vercel (frontend) and Railway (backend).",
      image: "../../mindfulmomentum.png",
      categories: [
        "Tailwind",
        "Supabase",
        "React.js",
        "Flask",
        "Firebase",
        "JSON Web Tokens",
      ],
      github: "https://github.com/naman0r/mindfulmomentum",
      demo: "https://mindfulmomentum-frontend.vercel.app/",
      date: "March 2025, Current, Deployed (Beta)",
      color: "#4caf50",
    },
    {
      title: "MindMapr: AI powered Study Tool",
      description:
        "A Full Stack AI powered study tool that generates easy to understand visualizations from student's study notes. Authentication implemented, MongoDB database.",
      image: "../../mmr.png",
      categories: [
        "Full Stack",
        "React",
        "Node.js",
        "REST Api",
        "MongoDB",
        "Firebase",
      ],
      github: "https://github.com/naman0r/MindMapr",
      demo: "https://www.youtube.com/watch?v=SWPsYICRIOQ",
      date: "Jan-March 2025, Completed",
      color: "#ff9800",
    },
    {
      title: "BackBuddy App",
      description:
        "App-integrated Arduino Product that helps users improve and track their posture. Fits on any chair. Works with Pressure Values which inflate and deflate to correct posture. App connects with hardware with an HC-5 BLE Module. ",
      image: "../../backbuddy-app.png",
      categories: ["React Native", "Arduino", "Arduino IoT", "Firebase"],
      github: "https://github.com/naman0r/backbuddy-app",
      demo: "",
      date: "Spring 2025, Current",
      color: "#4caf50",
    },
    {
      title: "Car2Drvr",
      description:
        "A full stack App that allows users to find tailored reccomendations for cars to buy based on their needs and provides a price range that informs the user and prevents overpaying",
      image: "../../car2drvr.png",
      categories: ["Full Stack", "React", "Firebase", "Flask"],
      github: "https://github.com/somshrivastava/car2drvr",
      demo: "https://car2drvr-finhacks.firebaseapp.com/",
      date: "January 2025, FinHacks Hackathon, Deployed",
      color: "#ff9800",
    },
    {
      title: "NUtrition",
      description:
        "Full Stack app that scrapes nutritional information from the University Dining Hall wesbite, and users are allowed to keep detailed logs and track their meals and diet over time, and realize trends",
      image: "../../NUtrition.png",
      categories: ["Selenium.py", "React", "Firebase", "Flask", "Supabase"],
      github: "https://github.com/Oasis-NEU/sp25-group-11",
      demo: "",
      date: "Spring 2025, Current",
      color: "#4caf50",
    },
    {
      title: "TaNews",
      description:
        "Full Stack news app with posting, reading, liking, Admin and User separation, etc.",
      image: "../../tanews.png",
      categories: ["Docker", "Flask", "React", "TypeScript", "MySQL"],
      github: "https://github.com/IpDaniel/tanews/tree/naman",
      demo: "",
      date: "Spring 2025, Current",
      color: "#ff9800",
    },
    {
      title: "Personal Website",
      description:
        "Interractive, easy to use personal website to showcase my work. Built with React.js",
      image: "../../personal-website.png",
      categories: [
        "React",
        "Framer Motion",
        "GSAP",
        "PrimeReact",
        "JavaScript",
      ],
      github: "https://github.com/naman0r/personal-website",
      demo: "https://namanrusia.com",
      date: "December 2024 - Current, deployed",
      color: "#4caf50",
    },
    {
      title: "DoNow!: Chrome Extension",
      description:
        "A Smart and Simple-to-use To-do list app, conveniently in the form of a Google Chrome Extension. Go give it a try!",
      image: "../../donow-pic.png",
      categories: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/naman0r/doNow_chrome_extension",
      demo: "https://chromewebstore.google.com/detail/donow-to-do-list/ledniccgbjopheokhlcpaajlblopaegf",
      date: "November 2024, completed and on Chrome Web Store",
      color: "#ff9800",
    },
  ];

  const allCategories = [
    "All",
    ...new Set(projects.flatMap((project) => project.categories)), // dynamically gets the categories whern i change something in const projects.
  ];

  const filteredProjects = // shows only what the user selects.
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory)
        );

  const handleMouseMove = (event) => {
    // for the cool top cursor-following feature.
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const xPercentage = (clientX / innerWidth) * 100;
    const yPercentage = (clientY / innerHeight) * 100;
    setGradient({ x: xPercentage, y: yPercentage });
  };

  return (
    <div className="projects-page">
      <TopNav />

      <div
        className="projects-header"
        onMouseMove={handleMouseMove}
        style={{
          background: `radial-gradient(circle 2000px at ${gradient.x}% ${gradient.y}%, rgb(255, 197, 126), rgb(117, 255, 152), rgb(96, 89, 157))`,
          transition: "background 0.1s linear",
        }}
      >
        <div className="projects-title">
          <h1>Projects</h1>
          <p>Learn about some of the projects I worked on!</p>
        </div>
      </div>

      <div className="projects-content">
        <div className="category-filter">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-button ${
                selectedCategory === category ? "active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <VerticalTimeline>
          {filteredProjects.map((project) => (
            <VerticalTimelineElement
              key={project.title}
              date={project.date}
              iconStyle={{ background: project.color, color: "#fff" }}
              icon={<div className="timeline-icon">⭕️</div>}
            >
              <div className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-categories">
                  {project.categories.map((category) => (
                    <span key={category} className="category-tag">
                      {category}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
