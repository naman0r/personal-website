import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const TopNav = ({ fadeIn }) => {
  return (
    <div
      id="nav-pannel"
      className={`fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-around z-20 transition-opacity ${
        fadeIn ? "opacity-0" : "opacity-1"
      }`}
    >
      {/*
      <button id="top-nav-button">About</button>
      <button id="top-nav-button">Skills</button>
      <button id="top-nav-button">Resume</button>
      <button id="top-nav-button">Play</button>*/}
      <Link to="/" className="topnav-buttons">
        Home
      </Link>
      <Link to="/projects" className="projects-button">
        Projects
      </Link>
      <Link to="/resume" className="topnav-buttons">
        Resume
      </Link>
      <Link to="/playpage" className="topnav-buttons">
        More
      </Link>
    </div>
  );
};

export default TopNav;
