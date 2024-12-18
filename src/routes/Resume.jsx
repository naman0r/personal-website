import React, { useState, useEffect } from "react";
import TopNav from "../TopNav";
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
      title: "",
      company: "",
      date: "",
      description: "",
    },
    {
      title: "",
      company: "",
      date: "",
      description: "",
    },
    {
      title: "",
      company: "",
      date: "2016 - 2018",
      description: "",
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
          className=""
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
