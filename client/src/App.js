import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CatConf from "./pages/CatConf";
import "./app.css";
import CatsTable from "./pages/CatsTable";
import PageNotFound from "./pages/PageNotFound";
import Orders from "./pages/Orders";
import { Topbar } from "./TopBar/Topbar";
import { Sidebar } from "./Sidebar/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleToggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <div className="app-container">
      <BrowserRouter>
        <div className="top-section">
          <Topbar SidebarToggel={handleToggleSidebar} />
        </div>
        <div className="content-section">
          <div className="sidebar-div">
            <Sidebar />
          </div>
          <div className="routes-div">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/catconf" element={<CatConf />} />
              <Route path="/catsTable" element={<CatsTable />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
        <footer className="bottom-section">
          <div className="footer-content">
            <div className="footer-left">
              <p>&copy; {new Date().getFullYear()} Project Team. All rights reserved.</p>
            </div>
            <div className="footer-center">
              <p>Made with ❤️ by the Project Team</p>
            </div>
          </div>
        </footer>
      </BrowserRouter>
    </div>

    // </div >
  );
}

export default App;
