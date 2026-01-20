import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LogoIcon from './LogoIcon';
import './Navbar.css';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Logo and Brand Name */}
        <div className="navbar-brand">
          <Link to="/" className="navbar-brand-link" onClick={closeMenu}>
            <LogoIcon />
            <span className="brand-name">GetMeds +2mg INC</span>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="navbar-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/dashboard" 
            className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Dashboard
          </Link>
          <Link 
            to="/schedule" 
            className={`nav-link ${location.pathname === '/schedule' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            My Schedule
          </Link>
          <Link 
            to="/support" 
            className={`nav-link ${location.pathname === '/support' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Support
          </Link>
        </div>

        {/* Right: Action Area */}
        <div className="navbar-actions">
          {isLoggedIn ? (
            <button className="logout-button" onClick={() => {
              logout();
              closeMenu();
              navigate('/');
            }}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="login-link" onClick={closeMenu}>
                Login
              </Link>
              <Link to="/register" className="register-button" onClick={closeMenu}>
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Menu */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link 
          to="/" 
          className={`mobile-link ${location.pathname === '/' ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link 
          to="/dashboard" 
          className={`mobile-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Dashboard
        </Link>
        <Link 
          to="/schedule" 
          className={`mobile-link ${location.pathname === '/schedule' ? 'active' : ''}`}
          onClick={closeMenu}
        >
          My Schedule
        </Link>
        <Link 
          to="/support" 
          className={`mobile-link ${location.pathname === '/support' ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Support
        </Link>
        <div className="mobile-actions">
          {isLoggedIn ? (
            <button className="mobile-logout" onClick={() => {
              logout();
              closeMenu();
              navigate('/');
            }}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="mobile-login" onClick={closeMenu}>
                Login
              </Link>
              <Link to="/register" className="mobile-register" onClick={closeMenu}>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
