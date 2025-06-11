import './WhyEurope-Sections.css';
import citizenImg from '../assets/citizenship.jpg';
import educationImg from '../assets/education2.jpeg';
import healthcareImg from '../assets/health.jpg';
import businessImg from '../assets/business.jpeg';
import elderImg from '../assets/retirement.jpeg';
import lgbtqImg from '../assets/lgbt.jpg';
import familyImg from '../assets/family.jpg';
import qualityImg from '../assets/quality.jpg';

const sections = [
  {
    title: 'Become a European Citizen',
    bullets: [
      'No matter which EU country grants you citizenship, you automatically become a citizen of the European Union as well.',
      'This gives you the right to live, work, study, and do business in any of the 27 EU member states.',
      'You can live in France, work in Sweden, retire in Portugal, and enjoy full access to the Union.',
    ],
    image: citizenImg,
    reverse: false,
  },
  {
    title: 'Free or Affordable Education',
    bullets: [
      'Education in the EU is largely free or low-cost—not only in your country of citizenship but across the Union.',
      'You can access universities in other member states often without paying tuition.',
      'Start your future without student debt and access high-quality education at little to no cost.',
    ],
    image: educationImg,
    reverse: true,
  },
  {
    title: 'Free or Affordable Healthcare',
    bullets: [
      'As an EU citizen, you gain access to some of the world’s best public healthcare systems.',
      'Healthcare is often free or very low-cost, from routine doctor visits to hospital stays.',
      'EU citizenship protects you from unexpected astronomical medical bills.',
    ],
    image: healthcareImg,
    reverse: false,
  },
  {
    title: 'Founding or Relocating a Business in Europe',
    bullets: [
      'You can start or relocate your business anywhere within the European Union.',
      'Operate across all 27 member states thanks to the EU’s single market.',
      'Access a workforce of 450+ million people, funding, and a stable regulatory environment.',
    ],
    image: businessImg,
    reverse: true,
  },
  {
    title: 'Elder-Friendly Environment',
    bullets: [
      'EU countries offer strong social support, accessible public spaces, and excellent healthcare.',
      'Pension systems and community programs prioritize the well-being of older adults.',
      'Enjoy dignified and comfortable retirement in age-friendly cities and towns.',
    ],
    image: elderImg,
    reverse: false,
  },
  {
    title: 'LGBTQ+ Friendly Societies',
    bullets: [
      'Many EU countries have strong legal protections and broad social acceptance.',
      'Same-sex marriage or partnerships are widely recognized across the EU.',
      'Live authentically and safely in inclusive societies that protect your rights.',
    ],
    image: lgbtqImg,
    reverse: true,
  },
  {
    title: 'Child & Family-Friendly Environment',
    bullets: [
      'Europe supports families with generous parental leave and subsidized childcare.',
      'Free or low-cost education and healthcare are available for children.',
      'Public parks, safe neighborhoods, and family-focused services are common.',
    ],
    image: familyImg,
    reverse: false,
  },
  {
    title: 'High Quality of Life',
    bullets: [
      'EU countries consistently rank among the highest in the world for quality of life.',
      'Clean air, great food, public transportation, and cultural richness abound.',
      'Cities are safe, walkable, and offer a balanced, fulfilling lifestyle.',
    ],
    image: qualityImg,
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
            id={anchorId}
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
