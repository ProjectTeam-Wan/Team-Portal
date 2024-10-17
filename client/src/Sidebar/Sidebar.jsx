import React, { useState } from "react";
import { FaCat, FaTable, FaBars, FaHome, FaPencilAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "./sidebar.css";
import { Link } from "react-router-dom";

export const Sidebar = ({ onToggle, openStatus }) => {
  const toggleSidebar = () => {
    onToggle(!openStatus);
  };

  return (
    <div
      className={`sidebar ${openStatus ? "open" : "closed"}`}
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <div className="sidebar-header">
        <button className="close-btn" onClick={toggleSidebar}>
          <IoMdClose />
        </button>
      </div>
      <div className="sidebar-menu">
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          <div className="sidebar-item" onClick={toggleSidebar}>
            <FaHome className="icon" title="Home" />
            <span className="sidebar-item-text">Home</span>
          </div>
        </Link>
        <Link to="/catconf" style={{ textDecoration: "none", color: "#fff" }}>
          <div className="sidebar-item" onClick={toggleSidebar}>
            <FaCat className="icon" title="Cat Config" />
            <span className="sidebar-item-text">Cat Config</span>
          </div>
        </Link>
        <Link to="/catsTable" style={{ textDecoration: "none", color: "#fff" }}>
          <div className="sidebar-item" onClick={toggleSidebar}>
            <FaTable className="icon" title="Cat table" />
            <span className="sidebar-item-text">Cat Table</span>
          </div>
        </Link>
        <Link to="/orders" style={{ textDecoration: "none", color: "#fff" }}>
          <div className="sidebar-item" onClick={toggleSidebar}>
            <FaPencilAlt className="icon" title="Orders" />
            <span className="sidebar-item-text">Orders</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
