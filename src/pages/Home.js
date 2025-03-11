import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import pic from "../assets/pic.png";
import pic1 from "../assets/pic1.png";
import { FaStar, FaRegStar } from "react-icons/fa";
import Layout from "../components/Layout";
import CenterContent from "../components/CenterContent";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const [darkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <div className="home-container">
        <div className="header-section">
          <div className="text-content">
            <h1>
              Start chatting with
              <br />
              customers, anytime,
              <br />
              anywhere with Talk Stream
            </h1>
            <p>
              Great software that allows you to chat from any
              <br />
              place at any time without any interruption.
            </p>
            <button className="chat-button" onClick={() => navigate("/chat")}>
              Start Chatting Now!
            </button>
          </div>
          <div className="image-content">
            <img src={pic} alt="Chat Illustration" />
          </div>
        </div>

        <div className="extra-content">
          <div className="left-image">
            <img src={pic1} alt="Statistics " />
          </div>
          <div className="stats-container">
            <div className="stat">
              <h2>2,291</h2>
              <p>Happy Customers</p>
            </div>
            <div className="stat rating">
              <h2>4.8/5</h2>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <p>Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Layout />
      <CenterContent />
      <Footer />
    </>
  );
};

export default Home;
