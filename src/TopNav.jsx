import React from "react";
import './App.css';

const TopNav = () => {
  return (
    <div
        id="nav-pannel"
        className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 opacity-0 flex justify-around z-20 transition-opacity" 
      >
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Skills</a>
        <a href="#">Resume</a>
      </div>
  );
};

export default TopNav;
