import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo-link" onClick={closeMenu}>
        <div className="navbar-logo">seizeonstar.catalog</div>
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </div>
      <ul className={isMenuOpen ? "navbar-links active" : "navbar-links"}>
        <li>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" onClick={closeMenu}>Dashboard</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
