import React from "react";
import "./App.css";

const TopNav = () => {
  return (
    <div
      id="nav-pannel"
      className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 opacity-0 flex justify-around z-20 transition-opacity"
    >
      {/*<a href="#">About</a>
      <a href="#">Projects</a>
      <a href="#">Skills</a>
      <a href="#">Resume</a>

      <button class="button type1">
        <span class="btn-txt">About</span>
      </button>

      <button class="button type1">
        <span class="btn-txt">Projects</span>
      </button>

      <button class="button type1">
        <span class="btn-txt">Skills</span>
      </button>

      <button class="button type1">
        <span class="btn-txt">Skills</span>
      </button> 

      <button id="top-nav-button">About</button>
      <button id="top-nav-button">About</button>
      <button id="top-nav-button">About</button>
      <button id="top-nav-button">About</button> */}

      <button id="top-nav-button">About</button>
      <button id="top-nav-button">Skills</button>
      <button id="top-nav-button">Resume</button>
      <button id="top-nav-button">etcetra</button>
    </div>
  );
};

export default TopNav;
