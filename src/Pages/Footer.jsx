import React from 'react';
import { FaLinkedinIn, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa";

const Footer = () => (
  <footer  className="  font-cormorant  bg-my-image bg-cover py-10 text-center italic  bg-left-top md:mx-5  flex flex-col lg:flex-row justify-around">
  
   
    <div className="grid grid-cols-2 flex-col max-md:space-y-10 md:justify-between  lg:space-x-24 md:grid-cols-3 max-md:mx-7">
      <div>
        <h3 className="font-bold text-3xl mb-2 text-black text-left ">Quick Links</h3>
        <ul className="space-y-3 text-xl  text-left ">
          <li>Home</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>FAQ</li>
          <li>Contact Us</li>
          <li>How We Help?</li>
          <li>Community</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-3xl mb-2 text-black text-left">Features</h3>
        <ul className="space-y-3 text-xl text-left">
          <li>Plagiarism Checker</li>
          <li>Free Publications</li>
          <li>Provides Books</li>
          <li>Provides PDF</li>
          <li>Paraphraser</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-3xl mb-2 text-black text-left">Our Offering</h3>
        <ul className="space-y-3 text-xl text-left">
          <li>Free IELTS Masterclass</li>
          <li>Talk to Counsellor</li>
          <li>IELTS Exam Overview</li>
          <li>Important IELTS Articles</li>
        </ul>
      </div>
    </div>


    <div className="mt-6">
      <p className="font-bold mb-2 text-black lg:text-left text-3xl">Newsletter</p>
      <p className="text-black font-bold mb-2">You can trust us. We only send promo offers.</p>
      <div className="flex space-x-6 justify-center items-center mt-4">
       
       <button className='text-white rounded-lg bg-footmail px-8 py-3 italic hover:bg-purpal '> Your email here</button>
        <button className="p-2 bg-suscribe hover:bg-deeppurpal text-white rounded-md italic">Subscribe</button>
      </div>


      <div className="topheader bg-black    h-10 flex rounded-md  justify-center items-center max-md:mx-20 max-lg:mx-56 mt-8 italic   ">
        <ul className="flex space-x-4  ">
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
    </div>
  
  </footer>
);

export default Footer;
