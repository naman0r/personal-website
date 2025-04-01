import React, { useState } from "react";
import TopNav from "../components/TopNav";
import Footer from "../components/FooterMainPage";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Resume.css";

const Resume = () => {
  const [gradient, setGradient] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const xPercentage = (clientX / innerWidth) * 100;
    const yPercentage = (clientY / innerHeight) * 100;
    setGradient({ x: xPercentage, y: yPercentage });
  };

  const education = [
    {
      school: "Northeastern University",
      degree: "B.S. in Computer Science and Business Administration (Finance)",
      location: "Boston, MA",
      date: "2024 - Present",
      details: [
        "- Minor in Mathematics",
        "- Relevant Coursework: Financial Management, Database Design, Intermediate Programming in Python, Object Oriented Design, Software Engineering",
        "- GPA: 3.926/4.0",
      ],
    },
    {
      school: "Singapore American School",
      degree: "High School Diploma",
      location: "Singapore",
      date: "2020 - 2024",
      details: ["Graduated with Honors"],
    },
  ];

  const experience = [
    {
      company: "HackVerseAI",
      position: "Founder & Lead Developer",
      location: "Remote",
      date: "March 2025 - Present",
      details: [
        "Developing an AI-powered project creation platform for students",
        "Implementing RAG and Vector Database technologies",
        "Building with Next.js, TypeScript, and Supabase",
      ],
    },
    {
      company: "MindfulMomentum",
      position: "Full Stack Developer",
      location: "Remote",
      date: "March 2025 - Present",
      details: [
        "Built a productivity and habits tracking application",
        "Developed Chrome extension with focus mode and task sync",
        "Implemented user authentication and data security",
      ],
    },
  ];

  const skills = {
    "Programming Languages": ["JavaScript", "Python", "Java", "TypeScript"],
    Frontend: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
    Backend: ["Node.js", "Flask", "FastAPI", "MongoDB", "Supabase"],
    "Tools & Technologies": [
      "Git",
      "Docker",
      "Firebase",
      "Arduino",
      "REST APIs",
    ],
    Other: ["UI/UX Design", "Agile Development", "Problem Solving"],
  };

  return (
    <div className="resume-page">
      <TopNav />

      <div
        className="resume-header-section"
        onMouseMove={handleMouseMove}
        style={{
          background: `radial-gradient(circle 2000px at ${gradient.x}% ${gradient.y}%, rgb(171, 194, 53), rgb(117, 156, 255), rgb(96, 89, 157))`,
          transition: "background 0.1s linear",
        }}
      >
        <div className="title">
          <h1>Resume</h1>
          <p>Learn more about me and download my resume!</p>
        </div>
      </div>
      <div className="items-center font-mono mx-72">
        <a href="/resume.pdf">View my actual resume</a>
      </div>
      <div className="resume-container">
        <header className="resume-header">
          <h1>Naman Rusia</h1>
          <div className="contact-info">
            <a href="mailto:your.email@example.com" className="contact-link">
              <FaEnvelope /> rusia.n@northeastern.edu
            </a>
            <a
              href="https://github.com/naman0r"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaGithub /> github.com/naman0r
            </a>
            <a
              href="https://linkedin.com/in/namanrusia"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaLinkedin /> linkedin.com/in/namanrusia
            </a>
          </div>
        </header>

        <section className="resume-section">
          <h2>Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="section-item">
              <div className="section-header">
                <h3>{exp.company}</h3>
                <span className="date">{exp.date}</span>
              </div>
              <p className="position">{exp.position}</p>
              <p className="location">{exp.location}</p>
              <ul>
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="section-item">
              <div className="section-header">
                <h3>{edu.school}</h3>
                <span className="date">{edu.date}</span>
              </div>
              <p className="degree">{edu.degree}</p>
              <p className="location">{edu.location}</p>
              <ul>
                {edu.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3>{category}</h3>
                <div className="skill-items">
                  {items.map((skill, index) => (
                    <span key={index} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="resume-actions">
          <a href="/resume.pdf" download className="download-button">
            Download Full Resume
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Resume;
