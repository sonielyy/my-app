import './Footer.css';
import logo from '../assets/logo2.png'; // Place your SVG logo here
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="MyEuropeanPassport" />
            <span>My European Passport</span>
          </div>
          <p>Subscribe to stay updated with our latest news and services.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <small>
            We care about your data. Read our <a href="#">privacy policy</a>.
          </small>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/services/education">Our Services</Link>
            <Link to="/team">Our Team</Link>
            <a href="#">Certifications</a>
            <a href="#">Careers</a>
          </div>

          <div className="link-group">
            <h4>Resources</h4>
            <Link to="/blog">Blog</Link>
            <a href="#">Partners</a>
            <a href="#">Press</a>
            <a href="#">Help & Support</a>
          </div>

          <div className="link-group">
            <h4>Social Media</h4>
            <a href="#"><FaFacebookF /> Facebook</a>
            <a href="#"><FaInstagram /> Instagram</a>
            <a href="#"><FaTwitter /> Twitter</a>
            <a href="#"><FaLinkedinIn /> LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 MyEuropeanPassport. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
