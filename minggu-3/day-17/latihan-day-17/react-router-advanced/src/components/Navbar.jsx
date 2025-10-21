import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/products'>Products</Link>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/login'>Login</Link>
    </nav>
  )
}

export default Navbar
