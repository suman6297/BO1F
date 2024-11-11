// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS for styling
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // To handle the mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  return (
    <>
    <div className='navbarmain'>
    <img src="/Container.png" alt="" />
</div>
    <nav className=" navbar ">
       
        
      <div className="navbar-container">
        <img src="/theASSignerlogo 2.jpg" alt=""  />
       
        
        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon (three horizontal bars) */}
        </div>

        {/* Navigation Links */}
        <ul className={` flex nav-links ${isOpen ? 'active' : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/ourservice">Our Service</Link></li>
          <li><Link to="/itles &pts">Itles & Pts</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
        </ul>
        <button className='button'> Login</button>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
