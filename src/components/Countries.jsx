import './Countries.css';
import ireland from '../assets/flags/ireland.png';
import spain from '../assets/flags/spain.png';
import italy from '../assets/flags/italy.png';
import germany from '../assets/flags/germany.png';
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
    </section>
  );
}

export default Countries;
