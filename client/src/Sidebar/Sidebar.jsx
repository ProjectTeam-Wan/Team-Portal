import React, { useState } from "react";
import { FaCat, FaTable, FaBars, FaHome, FaPencilAlt } from "react-icons/fa";
import "./sidebar.css";
import { Link } from "react-router-dom";

export const Sidebar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen);
  };

  return (
    <div
      className={`sidebar ${isOpen ? "open" : "closed"}`}
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <div className="sidebar-header">
        <button className="hamburger" onClick={toggleSidebar}>
          <FaBars className="hamburger-icon" />
        </button>
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          <span>ProjectTeam</span>
        </Link>
      </div>
      <div className="sidebar-menu">
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          <div className="sidebar-item">
            <FaHome className="icon" title="Home"/>
            <span className={`sidebar-item-text ${isOpen ? "fade-in" : ""}`} >
              Home
            </span>
          </div>
        </Link>
        <Link to="/catconf" style={{ textDecoration: "none", color: "#fff" }}>
          <div className="sidebar-item">
            <FaCat className="icon" title="Cat Config"/>
            <span className={`sidebar-item-text ${isOpen ? "fade-in" : ""}`}>
              Cat Config
            </span>
          </div>
        </Link>
        <Link to="/catsTable" style={{ textDecoration: "none", color: "#fff" }}>
          <div className="sidebar-item">
            <FaTable className="icon" title="Cat table"/>
            <span className={`sidebar-item-text ${isOpen ? "fade-in" : ""}`}>
              Cat Table
            </span>
          </div>
        </Link>
        <Link to="/orders" style={{ textDecoration: "none", color: "#fff" }}>
          <div className="sidebar-item">
            <FaPencilAlt className="icon" title="Orders"/>
            <span className={`sidebar-item-text ${isOpen ? "fade-in" : ""}`}>
              Orders
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
