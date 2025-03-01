import React from "react";
import "../App.css";
import MyImage from "../assets/linkedinHeadshot.jpeg"; // linkedin headshot
import HoverImage from "../assets/myPicture2.jpeg"; // picture with layla

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
        <p>📍 Boston, MA</p>
        <p>
          Available for Internships this summer (Summer 2025), and for Co-op
          Spring 2026 (January - August 2026)
        </p>
      </div>
    </div>
  );
};

export default MyPicture;
