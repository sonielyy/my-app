import './HeroSection.css';
import heroImage from '../assets/hero1.jpg';



function HeroSection() {
  return (
    <section className="hero-section">
      <img src={heroImage} alt="Background" className="hero-image" />
      <div className="hero-overlay">
        <h1 className="hero-title">Your European Passport Starts Here</h1>
        <p className="hero-subtext">We help you navigate EU citizenship, from the safest countries in Europe to living in Ireland, Portugal, Spain and beyond.</p>
        <div className="hero-buttons">
          <button className="hero-btn primary">What We Offer</button>
          <button className="hero-btn secondary">Contact Us</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
