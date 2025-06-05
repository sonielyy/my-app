import './WhyEurope.css';
import economy from '../assets/economy.svg';
import life from '../assets/life.svg';
import education from '../assets/education.svg';
import culture from '../assets/culture.svg';

function WhyEurope() {
  const reasons = [
    {
      icon: economy,
      title: 'Ekonomik Güvence',
      description: 'Avrupa ülkeleri güçlü sosyal devlet yapısı ve istihdam olanakları ile ekonomik istikrar sağlar.',
      link: '/ekonomi',
    },
    {
      icon: life,
      title: 'Yaşam Kalitesi',
      description: 'Temiz çevre, kaliteli sağlık hizmetleri ve güvenli şehirlerle huzurlu bir yaşam sunar.',
      link: '/yasam-kalitesi',
    },
    {
      icon: education,
      title: 'Eğitim İmkanları',
      description: 'Avrupa’da birçok üniversite uluslararası öğrencilere kaliteli eğitim sunar.',
      link: '/egitim',
    },
    {
      icon: culture,
      title: 'Kültürel Zenginlik',
      description: 'Farklı kültürlerin buluştuğu Avrupa, sosyal ve kişisel gelişime katkı sağlar.',
      link: '/kultur',
    },
  ];

  return (
    <section className="why-europe-section">
      <h2 className="section-title">Neden Avrupa?</h2>
      <div className="cards-container">
        {reasons.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.icon} alt={item.title} className="card-icon" />
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
            <a href={item.link} className="card-link">Daha fazla bilgi →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyEurope;
