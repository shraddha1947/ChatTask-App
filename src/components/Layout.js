import React from "react";
import "./Layout.css";
import ico1 from "../assets/ico1.png";
import ico2 from "../assets/ico2.png";
import ico3 from "../assets/ico3.png";

const Layout = () => {
  return (
    <div className="layout-container">
      <h1 className="main-heading">Features for a better experience</h1>
      <div className="features-grid">
        <div className="feature-item">
          <img src={ico1} alt="Video messaging" className="feature-icon" />
          <div className="feature-content">
            <h2>Video messaging</h2>
            <p>
              This software is very easy for you to manage. You can use it as
              you wish.
            </p>
          </div>
        </div>

        <div className="feature-item">
          <img src={ico2} alt="Save your time" className="feature-icon" />
          <div className="feature-content">
            <h2>Save your time</h2>
            <p>
              This software is very easy for you to manage. You can use it as
              you wish.
            </p>
          </div>
        </div>

        <div className="feature-item">
          <img src={ico3} alt="Keep safe & Private" className="feature-icon" />
          <div className="feature-content">
            <h2>Keep safe & Private</h2>
            <p>
              This software is very easy for you to manage. You can use it as
              you wish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
