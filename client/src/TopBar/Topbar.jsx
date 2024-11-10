import React, { useState } from "react";
import { FaCat, FaTable, FaBars, FaHome, FaPencilAlt } from "react-icons/fa";
import "./topbar.css";
import { Sidebar } from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import logo from "./logo.png";

export const Topbar = ({ SidebarToggel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    SidebarToggel(!isOpen);
  };
  return (
    <div className="topbar">
      {/* <div className="topbar-left">
        <div className="sidebar-header">
          <button className="hamburger" onClick={toggleSidebar}>
            <FaBars className="hamburger-icon" />
          </button>
        </div>
        <Sidebar onToggle={toggleSidebar} openStatus={isOpen} />
      </div> */}

      <div className="topbar-center">
        <h1>Project Team</h1>
      </div>

      <div className="topbar-right">
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          <img src={logo} alt="WAN Team Logo" className="logo" />
        </Link>
      </div>
    </div>
  );
};
