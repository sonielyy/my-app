import './WhyEurope-Sections.css';
import economyImg from '../assets/economy.jpg';
import lifeImg from '../assets/life.jpg';
import educationImg from '../assets/education.jpeg';
import cultureImg from '../assets/culture.jpg';

const sections = [
    {
      title: 'Economic Security',
      bullets: [
        'EU countries maintain strong, resilient economies backed by the euro and unified trade policies, providing a stable financial environment.',
        'Citizens gain the legal right to live and work in any of the 27 EU member states, dramatically expanding career opportunities.',
        'Comprehensive welfare systems offer unemployment benefits, pensions, and healthcare support for long-term economic protection.',
      ],
      image: economyImg,
      reverse: false,
    },
    {
      title: 'Quality of Life',
      bullets: [
        'Universal healthcare, eco-conscious urban planning, and abundant green spaces create a clean, healthy living environment.',
        'EU nations consistently rank among the safest in the world, with low crime rates and strong civil protections.',
        'Work-life balance is a cultural norm, supported by generous vacation policies, parental leave, and fair labor regulations.',
      ],
      image: lifeImg,
      reverse: true,
    },
    {
      title: 'World-Class Education',
      bullets: [
        'Home to globally renowned institutions like Oxford, Sorbonne, and TU Munich, the EU offers world-leading education across disciplines.',
        'Many countries offer free or low-cost tuition, making higher education accessible regardless of income.',
        'Degrees from EU universities are internationally respected, increasing your global mobility and career options.',
      ],
      image: educationImg,
      reverse: false,
    },
    {
      title: 'Cultural Diversity',
      bullets: [
        'With 24 official languages and hundreds of regional dialects, the EU is a living classroom of cultural exchange.',
        'From flamenco in Spain to opera in Italy, cultural life is vibrant and deeply embedded in everyday experience.',
        'Living in the EU exposes you to a mosaic of traditions, perspectives, and communities, fostering both personal growth and global understanding.',
      ],
      image: cultureImg,
      reverse: true,
    },
  ];
  

  function WhyEuropeSections() {
    return (
      <div className="sections-wrapper">
        {sections.map((section, index) => {
          const anchorId = section.title.toLowerCase().replace(/\s+/g, '-');
  
          return (
            <div
              key={index}
              id={anchorId} // ✅ her section’a id eklendi
              className={`section-block ${section.reverse ? 'reverse' : ''}`}
            >
              <div className="text-content">
                <h2>{section.title}</h2>
                <ul>
                  {section.bullets.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="image-content">
                <img src={section.image} alt={section.title} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  

export default WhyEuropeSections;
