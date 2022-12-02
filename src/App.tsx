import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SobreNos from './components/SobreNos/index'
import Header from './components/Header'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='sobrenos' element={<SobreNos />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
