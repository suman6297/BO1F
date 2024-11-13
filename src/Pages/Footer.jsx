import React from 'react';

const Footer = () => (
  <footer  className="  font-cormorant  bg-my-image bg-cover py-10 text-center text-gray-700 bg-left-top flex justify-center">
  
   
    <div className="flex justify-between space-x-10">
      <div>
        <h3 className="font-bold text-3xl mb-2 text-purple-900 ">Quick Links</h3>
        <ul className="space-y-3 text-xl text-left ">
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
        <h3 className="font-bold text-3xl mb-2 text-purple-900">Features</h3>
        <ul className="space-y-3 text-xl text-left">
          <li>Plagiarism Checker</li>
          <li>Free Publications</li>
          <li>Provides Books</li>
          <li>Provides PDF</li>
          <li>Paraphraser</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-3xl mb-2 text-purple-900">Our Offering</h3>
        <ul className="space-y-3 text-xl text-left1">
          <li>Free IELTS Masterclass</li>
          <li>Talk to Counsellor</li>
          <li>IELTS Exam Overview</li>
          <li>Important IELTS Articles</li>
        </ul>
      </div>
    </div>
    <div className="mt-6">
      <p className="font-bold mb-2 text-purple-900">Newsletter</p>
      <p className="text-gray-600 mb-2">You can trust us. We only send promo offers.</p>
      <div className="flex justify-center items-center">
        <input
          type="email"
          placeholder="Your email here"
          className="p-2 rounded-l border border-gray-300 outline-none"
        />
        <button className="p-2 bg-purple-600 text-white rounded-r">Subscribe</button>
      </div>
      <div className="flex justify-center mt-4 space-x-4 text-gray-500">
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-whatsapp"></i>
      </div>
    </div>
  
  </footer>
);

export default Footer;
