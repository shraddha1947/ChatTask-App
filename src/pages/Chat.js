import React from "react";
import "./Chat.css";
import Sidebar from "../components/Sidebar";
import { FaPlus, FaSearch } from "react-icons/fa";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";
import user6 from "../assets/user6.jpg";
import user7 from "../assets/user7.jpg";
import user8 from "../assets/user8.jpg";
import user9 from "../assets/user9.jpg";

const Chat = () => {
  const chats = [
    {
      id: 1,
      name: "Alice",
      message: "Hey, how are you?",
      time: "10:30 AM",
      image: user1,
    },
    {
      id: 2,
      name: "Ella",
      message: "Meeting today?",
      time: "10:15 PM",
      image: user2,
    },
    {
      id: 3,
      name: "Charlie",
      message: "Got it, thanks!",
      time: "9:50 AM",
      image: user3,
    },
    {
      id: 4,
      name: "Daisy",
      message: "Let’s connect later",
      time: "9:30 AM",
      image: user4,
    },
    {
      id: 5,
      name: "Bob",
      message: "Check your inbox",
      time: "9:10 PM",
      image: user5,
    },
    {
      id: 6,
      name: "Fenny",
      message: "Awesome!",
      time: "8:45 AM",
      image: user6,
    },
    {
      id: 7,
      name: "Grace",
      message: "Looking good",
      time: "8:30 AM",
      image: user7,
    },
    {
      id: 8,
      name: "Henry",
      message: "Thank you!",
      time: "8:00 AM",
      image: user8,
    },
    {
      id: 9,
      name: "Ivy",
      message: "See you soon",
      time: "7:45 PM",
      image: user9,
    },
  ];

  return (
    <div className="chat-page">
      <div className="chat-list-container">
        <div className="chat-list-header">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search chats..." />
          </div>
          <FaPlus className="plus-icon" />
        </div>

        <div className="chat-items">
          {chats.map((chat) => (
            <div className="chat-item" key={chat.id}>
              <img src={chat.image} alt={chat.name} className="chat-avatar" />
              <div className="chat-details">
                <div className="chat-name-time">
                  <span className="chat-name">{chat.name}</span>
                  <span className="chat-time">{chat.time}</span>
                </div>
                <div className="chat-message">{chat.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Chat;
