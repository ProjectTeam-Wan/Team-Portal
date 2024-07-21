import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import { Sidebarpro } from './Sidebar/storybook/Sidebarpro'
import CatConf from './pages/CatConf'
import './app.css'
import { Sidebar } from './Sidebar2/Sidebar'



function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleToggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (

    <BrowserRouter >
      <div className="app-container">
        {/* <Sidebarpro /> */}
        <Sidebar onToggle={handleToggleSidebar}/>
        {/* <main> */}
        <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/catconf' element={<CatConf />} />
          </Routes>
        </div>
        {/* </main> */}
      </div>
    </BrowserRouter>

    // </div >

  )


  // return (
  //   <Router>
  //     <div className="app-container">
  //       <Sidebar onToggle={handleToggleSidebar} />
  //       <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
  //         <Switch>
  //           <Route path="/cat-config" component={CatConfig} />
  //           <Route path="/cat-view" component={CatView} />
  //         </Switch>
  //       </div>
  //     </div>
  //   </Router>
  // );
}

export default App