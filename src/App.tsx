import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SobreNos from './pages/SobreNos/index'
import Home from './pages/Home'
import Doacao from './pages/Doações'
import Germinatech from './pages/Germinatech/index'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='sobrenos' element={<SobreNos />}/>
          <Route path='doacao' element={<Doacao />}/>
          <Route path='germinatech' element={<Germinatech />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
