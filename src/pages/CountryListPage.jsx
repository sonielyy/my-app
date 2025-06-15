// src/pages/CountryListPage.jsx
import './CountryListPage.css';
import { Link } from 'react-router-dom';

import austria from '../assets/flags/austria.svg';
import belgium from '../assets/flags/belgium.svg';
import bulgaria from '../assets/flags/bulgaria.svg';
import croatia from '../assets/flags/croatia.svg';
import cyprus from '../assets/flags/cyprus.svg';
import czechia from '../assets/flags/czechia.svg';
import denmark from '../assets/flags/denmark.svg';
import estonia from '../assets/flags/estonia.svg';
import finland from '../assets/flags/finland.svg';
import france from '../assets/flags/france.svg';
import germany from '../assets/flags/germany.svg';
import greece from '../assets/flags/greece.svg';
import hungary from '../assets/flags/hungary.svg';
import ireland from '../assets/flags/ireland.svg';
import italy from '../assets/flags/italy.svg';
import latvia from '../assets/flags/latvia.svg';
import lithuania from '../assets/flags/lithuania.svg';
import luxembourg from '../assets/flags/luxembourg.svg';
import malta from '../assets/flags/malta.svg';
import netherlands from '../assets/flags/netherlands.svg';
import poland from '../assets/flags/poland.svg';
import portugal from '../assets/flags/portugal.svg';
import romania from '../assets/flags/romania.svg';
import slovakia from '../assets/flags/slovakia.svg';
import slovenia from '../assets/flags/slovenia.svg';
import spain from '../assets/flags/spain.svg';
import sweden from '../assets/flags/sweden.svg';

const countries = [
  { name: 'Austria', flag: austria, desc: 'A peaceful Alpine country with high living standards.', link: '/countries/austria' },
  { name: 'Belgium', flag: belgium, desc: 'Heart of the EU with strong international presence.', link: '/countries/belgium' },
  { name: 'Bulgaria', flag: bulgaria, desc: 'Low cost of living and beautiful Black Sea coast.', link: '/countries/bulgaria' },
  { name: 'Croatia', flag: croatia, desc: 'Stunning Adriatic coastline and laid-back lifestyle.', link: '/countries/croatia' },
  { name: 'Cyprus', flag: cyprus, desc: 'Sun-soaked island with strategic EU access.', link: '/countries/cyprus' },
  { name: 'Czechia', flag: czechia, desc: 'A modern, affordable hub in Central Europe.', link: '/countries/czechia' },
  { name: 'Denmark', flag: denmark, desc: 'Scandinavian innovation and social equality.', link: '/countries/denmark' },
  { name: 'Estonia', flag: estonia, desc: 'Digital-first society with e-residency programs.', link: '/countries/estonia' },
  { name: 'Finland', flag: finland, desc: 'Top global rankings for education and quality of life.', link: '/countries/finland' },
  { name: 'France', flag: france, desc: 'World-famous for culture, cuisine, and lifestyle.', link: '/countries/france' },
  { name: 'Germany', flag: germany, desc: 'Europe’s economic engine with global opportunities.', link: '/countries/germany' },
  { name: 'Greece', flag: greece, desc: 'Mediterranean beauty and Golden Visa pathway.', link: '/countries/greece' },
  { name: 'Hungary', flag: hungary, desc: 'Rich history and a growing tech startup scene.', link: '/countries/hungary' },
  { name: 'Ireland', flag: ireland, desc: 'English-speaking, innovative, and business-friendly.', link: '/countries/ireland' },
  { name: 'Italy', flag: italy, desc: 'History, art, food — Italy offers it all.', link: '/countries/italy' },
  { name: 'Latvia', flag: latvia, desc: 'Baltic charm with modern infrastructure.', link: '/countries/latvia' },
  { name: 'Lithuania', flag: lithuania, desc: 'Fast-growing economy with welcoming policies.', link: '/countries/lithuania' },
  { name: 'Luxembourg', flag: luxembourg, desc: 'Tiny but wealthy EU hub with multilingual society.', link: '/countries/luxembourg' },
  { name: 'Malta', flag: malta, desc: 'Island life with English language advantage.', link: '/countries/malta' },
  { name: 'Netherlands', flag: netherlands, desc: 'Progressive, entrepreneurial, and highly connected.', link: '/countries/netherlands' },
  { name: 'Poland', flag: poland, desc: 'Affordable and rapidly developing EU member.', link: '/countries/poland' },
  { name: 'Portugal', flag: portugal, desc: 'Top Golden Visa destination with sunny climate.', link: '/countries/portugal' },
  { name: 'Romania', flag: romania, desc: 'Natural landscapes and growing digital sector.', link: '/countries/romania' },
  { name: 'Slovakia', flag: slovakia, desc: 'Heart of Europe with balanced living.', link: '/countries/slovakia' },
  { name: 'Slovenia', flag: slovenia, desc: 'Small, green country with great quality of life.', link: '/countries/slovenia' },
  { name: 'Spain', flag: spain, desc: 'Sunshine, healthcare, and family-friendly policies.', link: '/countries/spain' },
  { name: 'Sweden', flag: sweden, desc: 'Socially progressive and environmentally advanced.', link: '/countries/sweden' },
];

function CountryListPage() {
  return (
    <section className="countries-section">
      <h2 className="section-title">Explore 27 EU Countries</h2>
      <div className="country-grid">
        {countries.map((country, index) => (
          <div className="country-card" key={index}>
            <img src={country.flag} alt={country.name} className="country-flag" />
            <h3 className="country-name">{country.name}</h3>
            <p className="country-desc">{country.desc}</p>
            <Link to={country.link} className="country-link">Learn more →</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CountryListPage;
