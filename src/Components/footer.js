import React from 'react';
import './Styles/footer.css';

const Footer = () => (
  <div className="footer-wrap">
    <div className="footer-wrapper">
      <div className="column-one">
        <img id="footer" src="https://d35fo82fjcw0y8.cloudfront.net/2018/06/01005211/Bookmyshow-logo.png" alt="Headout" />
        <p>Book My Tickets is building the future of how we experience our cities.</p>
      </div>
      <div className="column-two">
        <h3>Cities</h3>
        <ul>
          <li>New York</li>
          <li>Las Vegas</li>
          <li>Rome</li>
          <li>Paris</li>
          <li>London</li>
          <li>Dubai</li>
        </ul>
      </div>
      <div className="column-three">
        <h3>About us</h3>
        <ul>
          <li>About Headout</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Privacy Policy</li>
          <li>Terms of Usage</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
