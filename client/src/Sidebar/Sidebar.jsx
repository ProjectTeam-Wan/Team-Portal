import React, { useState } from "react";
import { FaCat, FaTable, FaBars, FaHome, FaPencilAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "./sidebar.css";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className={"sidebar "}>
      {/* <div className="sidebar-header">
        <button className="close-btn" >
          <IoMdClose />
        </button>
      </div> */}
      <div className="sidebar-menu">
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          <div className="sidebar-item">
            <FaHome className="icon" title="Home" />
            <span className="sidebar-item-text">Home</span>
          </div>
        </Link>
        <Link to="/catconf" style={{ textDecoration: "none", color: "#fff" }}>
          <div className="sidebar-item">
            <FaCat className="icon" title="Cat Config" />
            <span className="sidebar-item-text">Cat Config</span>
          </div>
        </Link>
        <Link to="/catsTable" style={{ textDecoration: "none", color: "#fff" }}>
          <div className="sidebar-item">
            <FaTable className="icon" title="Cat table" />
            <span className="sidebar-item-text">Cat Table</span>
          </div>
        </Link>
        <Link to="/orders" style={{ textDecoration: "none", color: "#fff" }}>
          <div className="sidebar-item">
            <FaPencilAlt className="icon" title="Orders" />
            <span className="sidebar-item-text">Orders</span>
          </div>
        </Link>
        <Link to="/orders-new" style={{ textDecoration: "none", color: "#fff" }}>
          <div className="sidebar-item">
            <FaPencilAlt className="icon" title="Orders New" />
            <span className="sidebar-item-text">Orders New</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
