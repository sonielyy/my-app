import './Footer.css';
import logo from '../assets/logo.svg'; // SVG logonu buraya koy
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="NovaCitizens" />
            <span>NovaCitizens</span>
          </div>
          <p>Yeni gelişmelerimizden haberdar olmak için abonelik oluşturun</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <small>
            We care about your data in our <a href="#">privacy policy</a>.
          </small>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Kurumsal</h4>
            <a href="#">Hakkımızda</a>
            <a href="#">Hizmetlerimiz</a>
            <a href="#">Ekibimiz</a>
            <a href="#">Sertifikalar</a>
            <a href="#">Kariyer</a>
          </div>

          <div className="link-group">
            <h4>Kaynaklar</h4>
            <a href="#">Blog</a>
            <a href="#">İş Ortaklarımız</a>
            <a href="#">Basında Biz</a>
            <a href="#">Yardım & Destek</a>
          </div>

          <div className="link-group">
            <h4>Sosyal Medya</h4>
            <a href="#"><FaFacebookF /> Facebook</a>
            <a href="#"><FaInstagram /> Instagram</a>
            <a href="#"><FaTwitter /> Twitter</a>
            <a href="#"><FaLinkedinIn /> LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 NovaCitizens. All rights reserved.</p>
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
