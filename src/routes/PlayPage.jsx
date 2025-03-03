import React, { useState } from "react";
import "../styles/PlayPage.css";
import TopNav from "../components/TopNav";
import Footer from "../components/FooterMainPage";
import { div } from "framer-motion/client";

const PlayPage = () => {
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
          background: `radial-gradient(circle 2000px at ${gradient.x}% ${gradient.y}%, rgb(126, 214, 255), rgb(117, 156, 255), rgb(96, 89, 157))`,
          transition: "background 0.1s linear",
        }}
      >
        <h1 className="text-9xl font-bold font-spaceGrotesk">
          More Cool Stuff
        </h1>
      </div>
      <div className="play-page-content">
        {" "}
        to-do
        <img src="../../meme-image.png" alt="" />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PlayPage;
