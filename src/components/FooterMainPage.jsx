import React from "react";
import "../styles/Footer.css";
const FooterMainPage = () => {
  return (
    // todo include icons for linkedin and github and email.
    <div class="footer">
      <button id="footer_button">
        <a href="https://github.com/naman0r" target="_blank">
          <span>My GitHub</span>
        </a>
      </button>

      <button id="footer_button">
        <a
          href="https://github.com/naman0r/nr-personal-website-v1"
          target="_blank"
        >
          <span> Source code</span>
        </a>
      </button>

      <button id="footer_button">
        <a href="https://linkedin.com/in/namanrusia" target="_blank">
          <span>My Linkedin!</span>
        </a>
      </button>

      <button id="footer_button">
        <a href="#" target="_blank">
          <span>Email me</span>
        </a>
      </button>
    </div>
  );
};

export default FooterMainPage;
