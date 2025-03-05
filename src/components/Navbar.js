import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.add("dark-mode"); // Apply dark mode on first load
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="nav-left">
        <h2 className="app-name">Talk Stream</h2>
      </div>
      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="nav-right">
        <button className="dark-mode-btn" onClick={toggleDarkMode}>
          {darkMode ? "🌙" : "☀️"}
        </button>
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
