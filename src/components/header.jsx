import './Header.css';
import logo from '../assets/logo.jpeg'; // Logo görselini burada kullanabilirsin (örnek olarak)

function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="left-group"> {/* LOGO + MENÜ */}
          <div className="logo-section">
            <img src={logo} alt="Logo" className="logo-img" />
            <span className="logo-text">NovaCitizens</span>
          </div>

          <ul className="nav-links">
            <li><a href="#">Ana Sayfa</a></li>
            <li className="dropdown">
              <a href="#">Hizmetlerimiz <span className="arrow">▼</span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Girişimciler için Vatandaşlık</a></li>
                <li><a href="#">Eğitim Öğretim için Vatandaşlık</a></li>
                <li><a href="#">Mülkiyet Yoluyla Vatandaşlık</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Kurumsal <span className="arrow rotate">▲</span></a>
            </li>
            <li><a href="#">Referanslar</a></li>
          </ul>
        </div>

        <div>
          <button className="contact-button">İletişime Geç</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
