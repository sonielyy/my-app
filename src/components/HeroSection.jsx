import './HeroSection.css';
import heroImage from '../assets/hero.jpg';



function HeroSection() {
  return (
    <section className="hero-section">
      <img src={heroImage} alt="Background" className="hero-image" />
      <div className="hero-overlay">
        <h1 className="hero-title">Yeni bir hayata başlamanın ilk adımını atmaya hazır mısın?</h1>
        <p className="hero-subtext">Uzman kadromuzla hayallerinizi gerçekleştirmek için buradayız.</p>
        <div className="hero-buttons">
          <button className="hero-btn primary">Hizmetlerimiz</button>
          <button className="hero-btn secondary">İletişime Geç</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
