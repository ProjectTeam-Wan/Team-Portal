import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import { Sidebarpro } from './Sidebar/storybook/Sidebarpro'
import CatConf from './pages/CatConf'



function App() {
  return (

    <div
      style={{
        display: "flex",
        height: "100%",

      }}
    >

      <BrowserRouter>
        <Sidebarpro />
        <main>
          <div style={{ padding: "16px 24px", color: "#44596e" }}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path='/catconf' element={<CatConf />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>

    </div >

  )
}

export default App