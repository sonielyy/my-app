// src/pages/CountryPage.jsx

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { countryData } from '../data/countryData';
import './CountryPage.css';

function CountryPage() {
  const { countrySlug } = useParams();
  const data = countryData[countrySlug];

  useEffect(() => {
    const handleScroll = () => {
      data.reasons.forEach((_, index) => {
        const section = document.getElementById(`section-${index}`);
        const dot = document.getElementById(`dot-${index}`);
        if (!section || !dot) return;
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          dot.parentElement.classList.add('active');
        } else {
          dot.parentElement.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data]);

  if (!data) return <h1>Country not found</h1>;

  return (
    <div className="country-page">
      {/* HERO */}
      <section className="country-hero">
        <img src={data.image} alt={data.name} className="country-hero-image" />
        <div className="country-hero-overlay">
          <h1 className="country-hero-title">
            Why You Would Like to Live in {data.name}?
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="country-reasons">
        <div className="country-progress-bar">
          {data.reasons.map((item, index) => (
            <a href={`#section-${index}`} key={index} className="progress-link">
              <span className="progress-dot" id={`dot-${index}`}></span>
              {item.title}
            </a>
          ))}
        </div>

        <div className="country-sections">
          {data.reasons.map((item, index) => (
            <div className="country-section" id={`section-${index}`} key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="country-section-image"
              />
              <div className="country-section-text">
                <h2>{item.title}</h2>
                <ul>
                  {item.text.map((point, idx) => <li key={idx}>{point}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CountryPage;
