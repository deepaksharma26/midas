import React from 'react';
import { NavLink } from 'react-router-dom'; 
import logo from '../assets/img/logo.png';
import { Email, LocationPin, Pin, Facebook, Instagram, Twitter, Google, Phone } from '@mui/icons-material';
const Header = () => {
  return (
    <header id="header" className="header sticky-top">
      <div className="topbar d-flex align-items-center dark-background">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope"></i>
            <Email style={{ marginRight: '8px', color: '#f5f6f7' }} />
            <a href="mailto:exports@anronmetalisers.com">exports@anronmetalisers.com</a>
            <i className="bi bi-geo-alt d-flex align-items-center ms-4">
              <LocationPin style={{ marginRight: '8px', color: '#f5f6f7' }} />
              <a href="#location">Gujarat, India</a>
            </i>
              <i className="bi bi-geo-alt d-flex align-items-center ms-4">
              <Phone style={{ marginRight: '8px', color: '#f5f6f7' }} />
              <a href="tel:+15558921567">+1 (555) 892-1567</a>
            </i> 
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="https://www.facebook.com" className="facebook" target="_blank" rel="noopener noreferrer">
              <Facebook style={{ color: '#4267B2', marginRight: '8px' }} />
            </a>
            <a href="https://www.instagram.com" className="instagram" target="_blank" rel="noopener noreferrer">
              <Instagram style={{ color: '#E1306C', marginRight: '8px' }} />
            </a>
            <a href="https://www.google.com" className="google" target="_blank" rel="noopener noreferrer">
              <Google style={{ color: '#DB4437', marginRight: '8px' }} />
            </a>
            <a href="https://www.twitter.com" className="twitter" target="_blank" rel="noopener noreferrer">
              <Twitter style={{ color: '#1DA1F2', marginRight: '8px' }} />
            </a>
          </div>
        </div>
      </div>

      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <img src={logo} alt="Midas Glitter" />
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
              <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
              <li><NavLink to="/gallery" activeClassName="active">Gallery</NavLink></li>
              <li><NavLink to="/Products" activeClassName="active">Products</NavLink></li>
              {/* <li><NavLink to="/who-we-are" activeClassName="active">Who We Are</NavLink></li> */}
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
