import React from "react";
import { useNavigate } from "react-router-dom";
import "./CenterContent.css";

const CentereContent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chat");
  };

  return (
    <div className="center-container">
      <p className="center-paragraph">
        Ready to grow your business? Start with Talk Stream, become faster every
        second
      </p>
      <button className="center-button" onClick={handleClick}>
        Start Chatting Now
      </button>
    </div>
  );
};

export default CentereContent;
