import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <h1>ContrataJob</h1>
      </div>
      <ul className="menu">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/services">Serviços</Link></li>
        <li><Link to="/freelancers">Freelancers</Link></li>
        <li><a href="#">Login</a></li>
      </ul>
    </header>
  )
}

export default Navbar