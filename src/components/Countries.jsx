import './Countries.css';
import ireland from '../assets/flags/ireland.svg';
import spain from '../assets/flags/spain.svg';
import italy from '../assets/flags/italy.svg';
import germany from '../assets/flags/germany.svg';
import france from '../assets/flags/france.svg';
import netherlands from '../assets/flags/netherlands.svg';
import sweden from '../assets/flags/sweden.svg';
import austria from '../assets/flags/austria.svg';
import { Link } from 'react-router-dom';

function Countries() {
  const countries = [
    {
      name: 'Ireland',
      flag: ireland,
      description: 'Known for its high quality of life and strong tech-driven economy.',
      link: '/countries/ireland',
    },
    {
      name: 'Spain',
      flag: spain,
      description: 'A warm climate, vibrant culture, and a welcoming lifestyle for expats.',
      link: '/countries/spain',
    },
    {
      name: 'Germany',
      flag: germany,
      description: 'The economic powerhouse of Europe, with top-tier infrastructure and job opportunities.',
      link: '/countries/germany',
    },
    {
      name: 'France',
      flag: france,
      description: 'Renowned for its culture, healthcare system, and quality of life.',
      link: '/countries/france',
    },
    {
      name: 'Netherlands',
      flag: netherlands,
      description: 'Highly international, progressive, and great for entrepreneurs.',
      link: '/countries/netherlands',
    },
    {
      name: 'Sweden',
      flag: sweden,
      description: 'Famous for sustainability, social equality, and innovation.',
      link: '/countries/sweden',
    },
    {
      name: 'Austria',
      flag: austria,
      description: 'Combines natural beauty with high living standards and safety.',
      link: '/countries/austria',
    },
    {
      name: 'Italy',
      flag: italy,
      description: 'Rich in history, culture, and offers excellent residency options.',
      link: '/countries/italy',
    },
  ];

  return (
    <section className="countries-section">
      <h2 className="section-title">Explore EU Countries</h2>
      <div className="country-grid">
        {countries.map((country, index) => (
          <div className="country-card" key={index}>
            <img src={country.flag} alt={country.name} className="country-flag" />
            <h3 className="country-name">{country.name}</h3>
            <p className="country-desc">{country.description}</p>
            <a href={country.link} className="country-link">Learn more →</a>
          </div>
        ))}
      </div>

      <div className="explore-more-wrapper">
      <Link to="/countries" className="explore-more-btn">
        See All 27 Countries →
      </Link>
      </div>

    </section>
  );
}

export default Countries;
