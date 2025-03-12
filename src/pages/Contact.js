import React from "react";
import "./Contact.css";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contact our friendly team</h2>
        <p>Let us know how we can help</p>
      </div>

      <div className="contact-boxes">
        <div className="contact-box">
          <IoChatbubbleEllipsesOutline className="contact-icon" />
          <h3>Chat to sales</h3>
          <p>Speak to our friendly team.</p>
          <h3>sales@untitledui.com</h3>
        </div>
        <div className="contact-box">
          <IoChatbubblesOutline className="contact-icon" />
          <h3>Chat to support</h3>
          <p>We're here to help.</p>
          <h3>support@untitledui.com</h3>
        </div>
        <div className="contact-box">
          <IoLocationOutline className="contact-icon" />
          <h3>Visit us</h3>
          <p>Visit our office HQ.</p>
          <h3>View on goggle maps</h3>
        </div>
        <div className="contact-box">
          <IoCallOutline className="contact-icon" />
          <h3>Call us</h3>
          <p>Mon-Fri from 8am to 5pm</p>
          <h3>+1(555)000-0000</h3>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
