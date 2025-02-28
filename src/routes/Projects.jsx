import React, { useState } from "react";
import TopNav from "../components/TopNav";
import { useLayoutEffect, useRef } from "react";
import Footer from "../components/FooterMainPage";
import { div } from "framer-motion/client";
import "../styles/Projects.css";

const Projects = () => {
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
          background: `radial-gradient(circle 2000px at ${gradient.x}% ${gradient.y}%, rgb(255, 197, 126), rgb(117, 255, 152), rgb(96, 89, 157))`,
          transition: "background 0.1s linear",
        }}
      >
        <h1 className="text-9xl font-bold font-spaceGrotesk">Projects</h1>
      </div>
      <div className="projects-container"> to-do</div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
