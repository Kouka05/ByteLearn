import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../Assets/icon.svg"; 
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu when clicking a link
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Clickable Logo - Redirects to Home */}
      <Link to="/" className="logo" onClick={closeMenu}>
        <img src={logo} alt="Website Logo" />
      </Link>

      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
        </li>
        <li>
          <Link to="/courses" onClick={closeMenu}>Courses</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
