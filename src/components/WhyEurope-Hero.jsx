import './WhyEurope-Hero.css';
import heroImage from '../assets/eu-passport.jpeg'; // Adjust the path to your image

function WhyEuropeHero() {
  return (
    <section className="hero-section">
      <img src={heroImage} alt="EU Passport Background" className="hero-image" />
      <div className="hero-overlay">
        <h1 className="hero-title">Why an EU Passport?</h1>
        <p className="hero-subtext">
          European Union citizenship offers freedom of travel, a high quality of life, and robust social rights. Secure your future with the benefits of EU membership.
        </p>
      </div>
    </section>
  );
}

export default WhyEuropeHero;
