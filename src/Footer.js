import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <select className="country-select">
          <option value="india">India</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          {/* Add more countries as needed */}
        </select>
        <p>© 2024 ICrave</p>
        <button type='button'>Download Our App</button>
      </div>

      <div className="footer-section">
        <h3>COMPANY</h3>
        <ul>
          <li><a href="#">In the News</a></li>
          <li><a href="#">Press Info</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Terms & Privacy</a></li>
          <li><a href="#">Copyright & Trademark</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>EXPLORE HOUZZ</h3>
        <ul>
          <li><a href="#">Buttons & Badges</a></li>
          <li><a href="#">Mobile Apps</a></li>
          <li><a href="#">For Brands</a></li>
          <li><a href="#">For Professionals</a></li>
          <li><a href="#">Review Professionals</a></li>
          <li><a href="#">Suggested Professionals</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>CONNECT WITH US</h3>
        <ul className="social-media">
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://youtube.com">Youtube</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
