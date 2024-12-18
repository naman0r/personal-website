import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { FaRocket, FaBrain, FaLightbulb, FaDove } from "react-icons/fa";
import TopNav from "../TopNav";
import { div } from "framer-motion/client";
import SkillsCard from "../SkillsCard";

const Resume = () => {
  const [gradient, setGradient] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    // Calculate percentages for gradient based on cursor position
    const xPercentage = (clientX / innerWidth) * 100;
    const yPercentage = (clientY / innerHeight) * 100;

    setGradient({ x: xPercentage, y: yPercentage });
  };

  const [skills, setSkills] = useState([
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "CSS", level: 80 },
    { name: "Python", level: 75 },
    { name: "Swift", level: 70 },
  ]);

  const [experience, setExperience] = useState([
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      date: "2020 - Present",
      description:
        "Led a team of developers in creating responsive and scalable web applications using React and modern JavaScript.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      date: "2018 - 2020",
      description:
        "Developed and maintained full-stack applications using MERN stack, improving overall performance by 40%.",
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      date: "2016 - 2018",
      description:
        "Assisted in the development of mobile applications using Swift and contributed to backend services using Python.",
    },
  ]);

  const [expandedExp, setExpandedExp] = useState(null);

  const handleDownload = () => {
    window.open("/public/resume_12:18:2024.pdf", "_blank");
  };

  return (
    <div>
      <div>
        <TopNav />
      </div>
      <div
        className="justify-center place-items-center flex"
        onMouseMove={handleMouseMove}
        style={{
          height: "100vh",
          background: `radial-gradient(circle 2000px at ${gradient.x}% ${gradient.y}%, rgb(255, 78, 81), rgb(93, 65, 216), rgb(154, 89, 220))`,
          transition: "background 0.1s linear",
        }}
      >
        <h1 className="text-9xl font-bold font-spaceGrotesk">
          Interactive Resume
        </h1>
      </div>
      <div> to-do: resume page</div>
      <div>
        <SkillsCard />
      </div>
      <div>
        {/* From Uiverse.io by Javierrocadev */}
        <button
          class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
          onClick={() => {
            window.open("/public/resume_12:18:2024.pdf", "_blank");
          }}
        >
          Get My Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
