import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Home.css";
import pic from "../assets/pic.png";
import pic1 from "../assets/pic1.png";
import { FaStar, FaRegStar } from "react-icons/fa";
import Layout from "../components/Layout";
import CentereContent from "../components/CenterContent";

const Home = () => {
  const navigate = useNavigate();
  const [darkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <div className="container">
        <div className="text">
          <div className="text-content">
            <h1>
              Start chatting with
              <br />
              customers,anytime,
              <br />
              anywhere with Talk stream
            </h1>
            <p>
              Great software that allows you to chat from any
              <br />
              place at any time without any interruption.
            </p>
            <button
              className={darkMode ? "dark-button" : "light-button"}
              onClick={() => navigate("/chat")}
            >
              Start Chatting Now!
            </button>
          </div>
        </div>
        <div className="image-content">
          <img src={pic} alt="pic" />
        </div>

        <div className="extra-content">
          <div className="left-image">
            <img src={pic1} alt="pic1" />
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
                <FaRegStar /> <p>Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Layout />
      <CentereContent />
    </>
  );
};

export default Home;
