import React from "react";
import "./Sidebar.css";
import {
  FaUserCircle,
  FaUser,
  FaEnvelope,
  FaComments,
  FaCog,
  FaSearch,
} from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <FaUserCircle className="icon profile-icon" />
      </div>

      <div className="sidebar-middle">
        <FaComments className="icon" title="Chat" />
        <FaUser className="icon" title="user" />
        <FaEnvelope className="icon" title="Mail" />
        <FaSearch className="icon" title="Search" />
        <IoIosNotifications className="icon" title="Notifications" />
      </div>

      <div className="sidebar-bottom">
        <FaCog className="icon" title="Settings" />
      </div>
    </div>
  );
};

export default Sidebar;
