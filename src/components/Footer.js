import React from "react";
import "./Footer.css";
import logoone from "../assets/logo one.png";
import logotwo from "../assets/logo two.png";
import logothree from "../assets/logo three.png";
import logofour from "../assets/logo four.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">Talk Stream</div>
        <div className="footer-links">
          <span>About</span>
          <span>Features</span>
          <span>Works</span>
          <span>Support</span>
        </div>
        <div className="footer-socials">
          <img src={logoone} alt="logo one" />
          <img src={logotwo} alt="logo two" />
          <img src={logothree} alt="logo three" />
          <img src={logofour} alt="logo four" />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">© Copyright 2024, All Rights Reserved</div>
        <div className="footer-policy">
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
