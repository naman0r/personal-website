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
        <p>
          The terminal works, but the top navigation pannel does not navigate to
          different pages yet.
        </p>
        <p>
          Please feel free to play around with the terminal, it is pretty cool!
        </p>
      </div>
    </div>
  );
};

export default MyPicture;
