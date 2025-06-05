import './Testimonials.css';
import user1 from '../assets/users/user1.jpg';
import user2 from '../assets/users/user2.jpg';
import user3 from '../assets/users/user3.jpg';
import user4 from '../assets/users/user4.jpg';
import user5 from '../assets/users/user5.jpg';
import user6 from '../assets/users/user6.jpg';
import user7 from '../assets/users/user7.jpg';
import user8 from '../assets/users/user8.jpg';

const users = [
  {
    name: 'Elif Yıldız',
    company: 'TechNova',
    position: 'Yazılım Mühendisi',
    photo: user1,
    comment: 'İtalya vatandaşlık sürecim çok profesyonelce yönetildi, ekibe minnettarım!',
    rating: 5,
  },
  {
    name: 'Mert Kaya',
    company: 'FinVera',
    position: 'Finans Uzmanı',
    photo: user2,
    comment: 'Tüm süreci bana özel planladılar, İspanya için mükemmel bir danışmanlık aldım.',
    rating: 4,
  },
  {
    name: 'Ayşe Demir',
    company: 'DesignLoom',
    position: 'Grafik Tasarımcı',
    photo: user3,
    comment: 'İrlanda başvurum sorunsuz ilerledi. Güler yüzlü ve bilgili bir ekip.',
    rating: 5,
  },
  {
    name: 'Ahmet Koç',
    company: 'HealthCareX',
    position: 'Doktor',
    photo: user4,
    comment: 'Tıbbi geçmişim göz önünde bulundurularak uygun ülke önerildi. Tavsiye ederim.',
    rating: 4,
  },
  {
    name: 'Derya Şahin',
    company: 'TravelNet',
    position: 'Tur Operatörü',
    photo: user5,
    comment: 'Vize aşamasında bile yanımdaydılar, süreç boyunca iletişim mükemmeldi.',
    rating: 5,
  },
  {
    name: 'Emre Altun',
    company: 'LogiX',
    position: 'Lojistik Yöneticisi',
    photo: user6,
    comment: 'Almanya vatandaşlık planım için detaylı rehberlik aldım, çok memnun kaldım.',
    rating: 5,
  },
  {
    name: 'Zeynep Karaca',
    company: 'EduBridge',
    position: 'Eğitim Danışmanı',
    photo: user7,
    comment: 'Avrupa’da eğitim + vatandaşlık sürecini birlikte yürüttük. Harika deneyim.',
    rating: 5,
  },
  {
    name: 'Berk Yılmaz',
    company: 'BuildTech',
    position: 'İnşaat Mühendisi',
    photo: user8,
    comment: 'İspanya’da çalışmak isteyenler için birebir çözüm sundular.',
    rating: 4,
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">Kullanıcı Yorumları</h2>
      <div className="testimonial-grid">
        {users.map((user, index) => (
          <div className="testimonial-card" key={index}>
            <img src={user.photo} alt={user.name} className="testimonial-photo" />
            <h3 className="testimonial-name">{user.name}</h3>
            <p className="testimonial-role">{user.position} - {user.company}</p>
            <p className="testimonial-comment">"{user.comment}"</p>
            <div className="testimonial-rating">
              {'★'.repeat(user.rating)}{'☆'.repeat(5 - user.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
