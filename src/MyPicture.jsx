import React from "react";
import "./App.css";
import MyImage from "./assets/linkedinHeadshot.jpeg"; // Default image
import HoverImage from "./assets/myPicture2.jpeg"; // Hover image

const MyPicture = () => {
  return (
    <div>
      <div id="my-picture" className="image-container">
        <img src={MyImage} alt="A picture of me" className="default-image" />
        <img
          src={HoverImage}
          alt="Hover picture of me"
          className="hover-image"
        />
      </div>
      <div>
        <p>WORK IN PROGRESS</p>
      </div>
    </div>
  );
};

export default MyPicture;
