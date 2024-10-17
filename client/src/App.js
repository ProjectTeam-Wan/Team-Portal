import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CatConf from "./pages/CatConf";
import "./app.css";
import CatsTable from "./pages/CatsTable";
import PageNotFound from "./pages/PageNotFound";
import Orders from "./pages/Orders";
import { Topbar } from "./TopBar/Topbar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleToggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Topbar SidebarToggel={handleToggleSidebar} />
        {/* <main> */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/catconf" element={<CatConf />} />
            <Route path="/catsTable" element={<CatsTable />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        {/* </main> */}
      </div>
    </BrowserRouter>

    // </div >
  );
}

export default App;
