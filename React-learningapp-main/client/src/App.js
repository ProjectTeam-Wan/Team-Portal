import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import { Sidebarpro } from './Sidebar/storybook/Sidebarpro'
import CatConf from './pages/CatConf'
import './app.css'
import CatsTable from './pages/CatsTable'



function App() {
  return (

      <BrowserRouter>
        <Sidebarpro />
          <div className="appMainPage">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path='/catconf' element={<CatConf />} />
              <Route path='/catsTable' element={<CatsTable />} />
            </Routes>
          </div>
      </BrowserRouter>


  )
}

export default App