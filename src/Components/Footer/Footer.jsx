import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import image1 from '../../assets/footer1.jpg';
import image2 from '../../assets/footer2.jpg';
import image3 from '../../assets/footer3.jpg';
import image4 from '../../assets/footer4.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <hr className="divider" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>📞 + (94) 71 883 2011</p>
          <p>📍 Kurunegala, Sri</p>
        </div>
        <div className="footer-section">
          <h3>Latest News</h3>
          <hr className="divider" />
          <p>⏰ Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
          <p>5 Minutes Ago</p>
          <p>⏰ Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
          <p>5 Minutes Ago</p>
        </div>
        <div className="footer-section">
          <h3>Customer Service</h3>
          <hr className="divider" />
          <p><a href="#" target="_blank" rel="">⦿ Support Forums</a></p>
          <p><a href="#" target="_blank" rel="">⦿ Communication</a></p>
          <p><a href="#" target="_blank" rel="">⦿ FAQs</a></p>
          <p><a href="#" target="_blank" rel="">⦿ Privacy Policy</a></p>
          <p><a href="#" target="_blank" rel="">⦿ Rules & Condition</a></p>
          <p><a href="#" target="_blank" rel="">⦿ Rules & Condition</a></p>
          <p><a href="#" target="_blank" rel="">⦿ Contact Us</a></p>
        </div>
        <div className="footer-section">
          <h3>Customer Service</h3>
          <hr className="divider" />
          <div className="image-gallery">
            <img src={image1} alt="Service 1" />
            <img src={image2} alt="Service 2" />
            <img src={image3} alt="Service 3" />
            <img src={image4} alt="Service 4" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 All Rights Reserved, Site By TKAProducts©</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;