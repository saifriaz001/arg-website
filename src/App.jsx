import { useState } from 'react'
import LandingPage from './Pages/LandingPage'
import Services from './Pages/Services'
import Projects from './Pages/Projects'
import { Router , Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Pages/Footer'
import Navbar from './Pages/Nabvar'

function App() {


  return (
    <div className=' bg-cream'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>}  />
      <Route path='/services' element={<Services/>}/>
      <Route path='/projects' element={<Projects/>} />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
