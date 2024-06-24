import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
       
        <li className="nav-item">
          <Link to="/event" className="nav-link">Event</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </li>
        
        <li className="nav-item">
          <Link to="/calendar" className="nav-link">Calendar</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">Register</Link>
        </li>
        <li className="nav-item">
          <Link to="/eventform" className="nav-link">Event</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
