import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ flex: 1 }}> { }
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div> { }
      <Footer />
    </Router>
  )
}

export default App