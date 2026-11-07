import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Brand Logo */}
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          Tech <span>4</span> Youth
        </Link>

        {/* Desktop Links */}
        <div className="nav-links-desktop">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

        {/* Mobile Toggle Icon */}
        <button className="mobile-menu-icon" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="nav-links-mobile">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/courses" onClick={toggleMenu}>Courses</Link>
          <Link to="/login" onClick={toggleMenu}>Login</Link>
          <Link to="/register" onClick={toggleMenu}>Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;