import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import { Sidebarpro } from './Sidebar/storybook/Sidebarpro'
import CatConf from './pages/CatConf'
import './app.css'



function App() {
  return (

    // <div
    //   style={{
    //     display: "flex",
    //     height: "100%",
    //     width: "100%"

    //   }}
    // >

      <BrowserRouter>
        <Sidebarpro />
        {/* <main> */}
          <div className="appMainPage">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path='/catconf' element={<CatConf />} />
            </Routes>
          </div>
        {/* </main> */}
      </BrowserRouter>

    // </div >

  )
}

export default App