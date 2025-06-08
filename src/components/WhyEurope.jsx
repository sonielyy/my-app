import './WhyEurope.css';
import economy from '../assets/economy.svg';
import life from '../assets/life.svg';
import education from '../assets/education.svg';
import culture from '../assets/culture.svg';

function WhyEurope() {
  
  const reasons = [
    {
      icon: economy,
      title: 'Economic Security',
      description:
        'EU countries offer strong social systems, high employment potential, and stable economies.',
      link: '/why-europe#economic-security',
    },
    {
      icon: life,
      title: 'Quality of Life',
      description:
        'From clean environments to world-class healthcare and safe cities — Europe offers peace of mind.',
      link: '/why-europe#quality-of-life',
    },
    {
      icon: education,
      title: 'World-Class Education',
      description:
        'European universities offer high-quality, globally recognized programs for international students.',
      link: '/why-europe#world-class-education',
    },
    {
      icon: culture,
      title: 'Cultural Diversity',
      description:
        'Europe’s rich mix of cultures fuels personal growth and a globally connected lifestyle.',
      link: '/why-europe#cultural-diversity',
    },
  ];
  

  return (
    <section className="why-europe-section">
      <h2 className="section-title">Why Europe?</h2>
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
