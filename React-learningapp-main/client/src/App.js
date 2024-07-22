import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import { Sidebarpro } from './Sidebar/storybook/Sidebarpro'
import CatConf from './pages/CatConf'
import './app.css'



function App() {
  return (

      <BrowserRouter>
        <Sidebarpro />
          <div className="appMainPage">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path='/catconf' element={<CatConf />} />
            </Routes>
          </div>
      </BrowserRouter>


  )
}

export default App