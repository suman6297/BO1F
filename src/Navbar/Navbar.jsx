// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS for styling
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoReorderThreeOutline } from "react-icons/io5";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <>
   <div className="topheader bg-purple-900 w-full h-10 flex justify-end items-center pr-2 ">
        <ul className="flex space-x-4 ">
          <li className="text-white text-lg hover:text-gray-300 cursor-pointer">
            <FaLinkedinIn />
          </li>
          <li className="text-white text-lg hover:text-gray-300 cursor-pointer">
            <FaFacebook />
          </li>
          <li className="text-white text-lg hover:text-gray-300 cursor-pointer">
            <FaInstagram />
          </li>
          <li className="text-white text-lg hover:text-gray-300 cursor-pointer">
            <FaTwitter />
          </li>
          <li className="text-white text-lg hover:text-gray-300 cursor-pointer">
            <FaWhatsapp />
          </li>
          <li className="text-white text-lg hover:text-gray-300 cursor-pointer">
            <FaTelegram />
          </li>
        </ul>
      </div>

    <nav className=" navbar font-cormorant ">
       
        
      <div className="navbar-container mx-4" >
        <img src="/theASSignerlogo 2.jpg" alt="" className=' max-sm:w-32 '  />
       
        
        {/* Hamburger Icon */}
       

        {/* Navigation Links */}
        <ul className={`  nav-links  ${isOpen ? 'active' : " "} `}  >
          <li className='relative group'><Link to="/" >Home</Link><span className="absolute -bottom-7 rounded-md left-0 w-full h-1 bg-purpal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></span></li>
          <li className='relative group'><Link to="/about">About Us</Link> <span className="absolute -bottom-7 rounded-md left-0 w-full h-1 bg-purpal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></span></li>
          <li className='relative group'><Link to="/blog">Blog</Link> <span className="absolute -bottom-7 rounded-md left-0 w-full h-1 bg-purpal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></span></li>
          <li className='relative group'><Link to="/ourservice">Our Service</Link> <span className="absolute -bottom-7 rounded-md left-0 w-full h-1 bg-purpal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></span></li>
          <li className='relative group'><Link to="/itles &pts">Itles & Pts</Link><span className="absolute -bottom-7 rounded-md left-0 w-full h-1 bg-purpal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></span></li>
          <li className='relative group'><Link to="/contact">Contact us</Link>
          <span className="absolute -bottom-7 rounded-md left-0 w-full h-1 bg-purpal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></span></li>
        </ul>
        <button className=' bg-purple-600 px-8 py-2 rounded-lg text-2xl hover:bg-purpal  duration-700 hover:scale-[1.1] '> Login</button>

        <div className="menu-icon " onClick={toggleMenu}>
          {isOpen ? <RxCross1  className='text-white mt-2 relative md:text-5xl'/> : <IoReorderThreeOutline className='md:text-7xl' />
 } 
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
