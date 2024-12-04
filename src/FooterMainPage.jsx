import React from "react";
import "./App.css"; // Include CSS for styling

const FooterMainPage = () => {
  return (
    // todo include icons for linkedin and github and email.
    <div class="footer">
      <button id="shadow__btn">
        <a href="https://github.com/naman0r" target="_blank">
          <p>My Github</p>
        </a>
      </button>

      <button id="shadow__btn">
        <a
          href="https://github.com/naman0r/nr-personal-website-v1"
          target="_blank"
        >
          Source code for this website!
        </a>
      </button>

      <button id="shadow__btn">
        <a href="https://linkedin.com/in/namanrusia" target="_blank">
          My Linkedin!
        </a>
      </button>

      <button id="shadow__btn">
        <a href="#" target="_blank">
          rusia.n@northeastern.edu
        </a>
      </button>
    </div>
  );
};

export default FooterMainPage;
