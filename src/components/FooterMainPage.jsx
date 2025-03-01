import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons
import "../styles/Footer.css";

const FooterMainPage = () => {
  return (
    <div className="footer">
      <a
        href="https://github.com/naman0r"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <FaGithub className="footer-icon" />
      </a>

      <a
        href="https://linkedin.com/in/namanrusia"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <FaLinkedin className="footer-icon" />
      </a>

      <a href="mailto:your.email@example.com" className="footer-link">
        <FaEnvelope className="footer-icon" />
      </a>
    </div>
  );
};

export default FooterMainPage;
