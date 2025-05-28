import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <main className='w-[100vw] h-[100vh] px-10'>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Hero />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />

        </Routes>
      </Router>
    </main>
  )
}

export default App
