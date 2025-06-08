// src/pages/CountryPage.jsx
import { useParams } from 'react-router-dom';
import { countryData } from '../data/countryData';
import './CountryPage.css';

function CountryPage() {
  const { countrySlug } = useParams();
  const data = countryData[countrySlug];

  if (!data) return <h1>Country not found</h1>;

  return (
    <div className="country-page">
      <section className="country-hero">
        <img src={data.image} alt={data.name} className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">Why You Would Like to Live in {data.name}?</h1>
        </div>
      </section>

      <section className="country-reasons">
        <div className="reasons-wrapper">
          {data.reasons.map((reason, index) => (
            <div className="reason-card" key={index}>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CountryPage;
