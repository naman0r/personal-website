import React, { useState } from "react";
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

  const handleDownload = () => {
    window.open("/public/resume_12:18:2024.pdf", "_blank");
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        minHeight: "150vh",
        background: `radial-gradient(circle 2000px at ${gradient.x}% ${gradient.y}%, rgb(255, 78, 81), rgb(93, 65, 216), rgb(154, 89, 220))`,
        transition: "background 0.1s linear",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <TopNav />
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Interactive Resume
        </h1>
        <p>Explore my skills and download my resume below.</p>
      </div>

      {/* Skills Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <SkillsCard />
      </div>

      {/* Download Button */}
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button
          style={{
            padding: "1rem 2rem",
            fontSize: "1.2rem",
            color: "#fff",
            backgroundColor: "#333",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#555")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#333")}
          onClick={handleDownload}
        >
          Get My Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
