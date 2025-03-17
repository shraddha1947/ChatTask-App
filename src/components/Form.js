import React from "react";
import "./Form.css";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";

const Form = () => {
  return (
    <div className="form-container">
      <h2 className="form-heading">Send us a message</h2>

      <form className="form">
        <div className="form-group">
          <FaRegUser className="form-icon" />
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <MdOutlineMailOutline className="form-icon" />
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <FaRegUser className="form-icon" />
          <input type="text" placeholder="Business name" />
        </div>

        <div className="form-group">
          <IoIosPhonePortrait className="form-icon" />
          <input type="tel" placeholder="Phone number" />
        </div>
        <button type="submit" className="form-btn">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
