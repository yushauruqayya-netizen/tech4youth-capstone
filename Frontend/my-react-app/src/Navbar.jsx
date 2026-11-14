import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setUser(null);
        return;
      }

      try {
        const res = await fetch('http://localhost:5000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setUser(null);
        }
      } catch (err) {
        console.error('Error fetching user profile:', err);
      }
    };

    fetchProfile();
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setIsOpen(false);
    navigate('/login');
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
          {user ? (
            <>
              <span className="nav-user-badge">Hi, {user.name}</span>
              <button onClick={handleLogout} className="nav-logout-btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
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
          {user ? (
            <>
              <span className="nav-user-badge">Hi, {user.name}</span>
              <button onClick={handleLogout} className="nav-logout-btn mobile-logout">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={toggleMenu}>Login</Link>
              <Link to="/register" onClick={toggleMenu}>Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;