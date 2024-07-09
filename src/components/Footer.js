import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="logo-section">
          <h2 className="logo">NovaSport</h2>
        </div>
        <div className="contact-section">
          <a href="#" className="footer-link">About Us</a>
          <a href="#" className="footer-link">Contact Us</a>
          <a href="#" className="footer-link">Help</a>
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Disclaimer</a>
        </div>
        <div className="social-media">
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaLinkedinIn /></a>
          <a href="#" className="social-icon"><FaYoutube /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 NovaSport. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
