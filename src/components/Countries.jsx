import './Countries.css';
import ireland from '../assets/flags/ireland.png';
import spain from '../assets/flags/spain.png';
import italy from '../assets/flags/italy.png';
import germany from '../assets/flags/germany.png';

function Countries() {
  const countries = [
    {
      name: 'İrlanda',
      flag: ireland,
      description: 'Yüksek yaşam kalitesi ve teknoloji yatırımlarıyla öne çıkıyor.',
      link: '/ulkeler/irlanda',
    },
    {
      name: 'İspanya',
      flag: spain,
      description: 'Sıcak iklimi ve sosyal yaşamıyla göçmenler için cazip bir ülke.',
      link: '/ulkeler/ispanya',
    },
    {
      name: 'İtalya',
      flag: italy,
      description: 'Kültürel mirası ve estetik şehirleriyle hayat dolu bir Avrupa ülkesi.',
      link: '/ulkeler/italya',
    },
    {
      name: 'Almanya',
      flag: germany,
      description: 'Güçlü ekonomisi ve istihdam olanaklarıyla Avrupa’nın kalbi.',
      link: '/ulkeler/almanya',
    },
  ];

  return (
    <section className="countries-section">
      <h2 className="section-title">Ülkeler</h2>
      <div className="country-grid">
        {countries.map((country, index) => (
          <div className="country-card" key={index}>
            <img src={country.flag} alt={country.name} className="country-flag" />
            <h3 className="country-name">{country.name}</h3>
            <p className="country-desc">{country.description}</p>
            <a href={country.link} className="country-link">Detaylar →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Countries;
