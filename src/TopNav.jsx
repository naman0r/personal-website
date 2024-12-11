import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const TopNav = () => {
  return (
    <div
      id="nav-pannel"
      className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 opacity-0 flex justify-around z-20 transition-opacity"
    >
      {/*
      <button id="top-nav-button">About</button>
      <button id="top-nav-button">Skills</button>
      <button id="top-nav-button">Resume</button>
      <button id="top-nav-button">Play</button>*/}
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/playpage">Play</Link>
    </div>
  );
};

export default TopNav;
