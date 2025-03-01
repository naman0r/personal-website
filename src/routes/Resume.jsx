import React, { useState } from "react";
import TopNav from "../components/TopNav.jsx";
import Footer from "../components/FooterMainPage.jsx";
import "../styles/Resume.css";

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
  return (
    <>
      <TopNav />
      <div
        className="justify-center place-items-center flex"
        onMouseMove={handleMouseMove}
        style={{
          height: "100vh",
          background: `radial-gradient(circle 2000px at ${gradient.x}% ${gradient.y}%, rgb(171, 194, 53), rgb(117, 156, 255), rgb(96, 89, 157))`,
          transition: "background 0.1s linear",
        }}
      >
        <div className="title">
          <h1>Resume</h1>
          <p>Learn more about me and download my resume!</p>
        </div>
      </div>
      <div className="resume-container">TO-DO implementation</div>
      <Footer />
    </>
  );
};

export default Resume;
