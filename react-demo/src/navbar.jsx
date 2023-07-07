import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-center">
        {/* <Link to="/" className="navbar-logo">
          My Website
        </Link> */}
        <div className="navbar-buttons">
          <Link to="login" className="navbar-button">
            Login
          </Link>
          <Link to="register" className="navbar-button">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
