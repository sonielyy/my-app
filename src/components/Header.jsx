import './Header.css';
import logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';
import { countryData } from '../data/countryData'; // ✅ Dinamik ülke listesi

function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-left">
          <div className="logo-section">
            <img src={logo} alt="Logo" className="logo-img" />
            <span className="logo-text">My European Passport</span>
          </div>
        </div>

        <div className="nav-center">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>

            <li className="dropdown">
              <Link to="/countries">Countries <span className="arrow">▼</span></Link>
              <ul className="dropdown-menu">
                {Object.entries(countryData).map(([slug, country]) => (
                  <li key={slug}>
                    <Link to={`/countries/${slug}`}>{country.name}</Link>
                  </li>
                ))}
              </ul>
            </li>


            <li>
              <Link to="/benefits">Benefits of EU</Link>
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <Link to="/contact" className="contact-button">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
