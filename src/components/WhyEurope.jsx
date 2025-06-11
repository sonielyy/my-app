import './WhyEurope.css';
import citizen from '../assets/citizen.svg';
import education from '../assets/education.svg';
import healthcare from '../assets/health.svg';
import business from '../assets/business.svg';
import retirement from '../assets/retirement.svg';
import lgbtq from '../assets/lgbtq.svg';
import family from '../assets/family.svg';
import quality from '../assets/quality.svg';

function WhyEurope() {
  const reasons = [
    {
      icon: citizen,
      title: 'Become a European Citizen',
      description:
        'Gain full rights to live, work, study, and retire across 27 EU countries.',
      link: '/benefits#become-a-european-citizen',
    },
    {
      icon: education,
      title: 'Free or Affordable Education',
      description:
        'Access world-class education in Europe with little or no tuition fees.',
      link: '/benefits#free-or-affordable-education',
    },
    {
      icon: healthcare,
      title: 'Universal Healthcare Access',
      description:
        'Benefit from top-tier healthcare systems across the EU with minimal costs.',
      link: '/benefits#free-or-affordable-healthcare',
    },
    {
      icon: business,
      title: 'Business & Entrepreneurship',
      description:
        'Launch or move your business across the EU’s seamless single market.',
      link: '/benefits#founding-or-relocating-a-business-in-europe',
    },
    {
      icon: retirement,
      title: 'Elder-Friendly Living',
      description:
        'Enjoy retirement with strong social services and age-friendly communities.',
      link: '/benefits#elder-friendly-environment',
    },
    {
      icon: lgbtq,
      title: 'LGBTQ+ Friendly Societies',
      description:
        'Live safely and openly in progressive, inclusive European cultures.',
      link: '/benefits#lgbtq+-friendly-societies',
    },
    {
      icon: family,
      title: 'Family-Oriented Environment',
      description:
        'Raise your children in safe, supportive, and child-friendly societies.',
      link: '/benefits#child-&-family-friendly-environment',
    },
    {
      icon: quality,
      title: 'High Quality of Life',
      description:
        'Experience clean cities, great food, safety, and balanced living.',
      link: '/benefits#high-quality-of-life',
    },
  ];

  return (
    <section className="why-europe-section">
      <h2 className="section-title">Benefits of Citizenship by Descent</h2>
      <div className="cards-container">
        {reasons.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.icon} alt={item.title} className="card-icon" />
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
            <a href={item.link} className="card-link">Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyEurope;
