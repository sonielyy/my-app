// src/pages/ServicesPage.jsx

import { useParams } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './ServicesPage.css';

function ServicesPage() {
  const { serviceSlug } = useParams();
  const service = servicesData[serviceSlug];

  if (!service) {
    return <h2>Service Not Found</h2>;
  }

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero">
        <img src={service.heroImage} alt={service.name} className="services-hero-image" />
        <div className="services-hero-overlay">
          <h1>{service.name}</h1>
          <p>{service.intro}</p>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="timeline-container">
          {service.faqs.map((item, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
