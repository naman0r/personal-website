import React from "react";
import TopNav from "../components/TopNav";
import Footer from "../components/FooterMainPage";
import "../styles/Error404.css";

const Error404 = () => {
  return (
    <>
      <TopNav />
      <div className="error-container">Error - bad link requested. </div>
      <Footer className="footer" />
    </>
  );
};

export default Error404;
