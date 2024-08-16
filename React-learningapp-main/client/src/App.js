import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { Sidebarpro } from "./Sidebar/storybook/Sidebarpro";
import CatConf from "./pages/CatConf";
import { Sidebar } from "./Sidebar2/Sidebar";
import "./app.css";
import CatsTable from "./pages/CatsTable";
import PageNotFound from "./pages/PageNotFound";
import Orders from "./pages/Orders";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleToggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar onToggle={handleToggleSidebar} />
        {/* <main> */}
        <div className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
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
