import React from "react";
import "./App.css";
import MyImage from "./assets/linkedinHeadshot.jpeg"; // linkedin headshot
import HoverImage from "./assets/myPicture2.jpeg"; // picture with layla

const MyPicture = () => {
  return (
    <div id="main-page-info-pannel">
      <div>
        <div id="my-picture" className="image-container m-2">
          <img src={MyImage} alt="A picture of me" className="default-image" />
          <img
            src={HoverImage}
            alt="Hover picture of me"
            className="hover-image"
          />
        </div>
      </div>

      <div class="font-spaceGrotesk ml-10 mr-0">
        <p>
          First Year student at Northeastern University Studying Computer
          Science and Business Administration, with a minor in Mathematics.
        </p>
        <p></p>
        <p>
          the terminal works, but the top navigation pannel does not navigate to
          different pages yet.
        </p>
      </div>
    </div>
  );
};

export default MyPicture;
