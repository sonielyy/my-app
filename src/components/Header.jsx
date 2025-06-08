import './Header.css';
import logo from '../assets/logo2.png'; // Logo görselini burada kullanabilirsin (örnek olarak)
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
      <div className="nav-left"> {/* Logo */}
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="logo-text">My European Passport</span>
        </div>
      </div>

      <div className="nav-center"> {/* NAV LINKS */}
      <ul className="nav-links">
      <li><Link to="/">Home</Link></li>

      <li className="dropdown">
        <a href="#">Services <span className="arrow">▼</span></a>
        <ul className="dropdown-menu">
          <li><a href="#">Citizenship with University Degree</a></li>
          <li><a href="#">Citizenship with Investment</a></li>
          <li><a href="#">Citizenship with Entrepreneurship</a></li>
        </ul>
      </li>


        <li className="dropdown">
          <a href="#">Company <span className="arrow">▼</span></a>
          <ul className="dropdown-menu">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </li>
      <li><a href="#">References</a></li>
      </ul>

      </div>

      <div className="nav-right"> {/* Buton */}
        <button className="contact-button">Contact Us</button>
      </div>
    </nav>
    </header>
  );
}

export default Header;
