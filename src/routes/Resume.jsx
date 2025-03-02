import React, { useState } from "react";
import TopNav from "../components/TopNav.jsx";
import Footer from "../components/FooterMainPage.jsx";
import "../styles/Resume.css";
import { div } from "framer-motion/client";
import { motion } from "framer-motion";

const Resume = () => {
  const [gradient, setGradient] = useState({
    x: 50,
    y: 50,
  });

  const experiences = [
    {
      title: "Northeastern University",
      description: "looking for co-ops for Spring 2026",
      img: "../../neu.png",
      time: "Feb 2025 - Current",
      role: "Pursuing BS in Computer Science and Finance, Minor in Mathematics",
    },
    {
      title: "TAMID at Northeastern",
      description:
        "TAMID is a global organization that does non-profit work for Israili Startups. I am doing the TCF program and plan to Join the Tech Consulting Track, where I will aid in software development for foreign startups ",
      img: "../../tamid.png",
      time: "Feb 2025 - Current",
      role: "TCF and Education Member",
    },
    {
      title: "Forge: Product development studio",
      description:
        "Building an app using React Native Expo and Arduino Cloud IoT",
      img: "../../backbuddy-app.png",
      time: "Sep 2024 - Current",
      role: "Software Engineer at a hardware team",
    },
    // {
    //   title: "",
    //   description: "",
    //   img: "../../.........",
    //   time: "",
    //   role: "",
    // },
  ];

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
      <div className="resume-container">
        <a href="../../resume_website.pdf" target="_blank">
          Click to view my resume!
        </a>

        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h1>{experience.title}</h1>
            <h3>{experience.role}</h3>
            <img src={experience.img} alt="" />
            <h4>{experience.description}</h4>
            <p>{experience.time}</p>
          </motion.div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Resume;
