// src/data/countryData.js
import spainImg from '../assets/countries/spain-hero.jpg';
import portugalImg from '../assets/countries/portugal-hero.jpg';
import irelandImg from '../assets/countries/ireland-hero.jpg';
import greeceImg from '../assets/countries/greece-hero.jpg';

export const countryData = {
  spain: {
    name: 'Spain',
    image: spainImg,
    reasons: [
      'Sunny Mediterranean climate all year round',
      'Affordable cost of living and healthcare',
      'Access to EU residency via Golden Visa',
      'Laid-back lifestyle with rich cultural heritage',
    ],
  },
  portugal: {
    name: 'Portugal',
    image: portugalImg,
    reasons: [
      'NHR tax program offers great benefits for expats',
      'Safe, peaceful environment with high English proficiency',
      'Mild climate and stunning Atlantic coastline',
      'Easy path to citizenship via residency',
    ],
  },
  ireland: {
    name: 'Ireland',
    image: irelandImg,
    reasons: [
      'English-speaking country in the EU',
      'Strong economy with tech and pharma opportunities',
      'Easy access to both EU and UK markets',
      'Welcoming, family-friendly culture',
    ],
  },
  greece: {
    name: 'Greece',
    image: greeceImg,
    reasons: [
      'Low-cost Golden Visa with flexible requirements',
      'Mediterranean lifestyle and incredible cuisine',
      'Rich ancient history and natural beauty',
      'Residency with access to Schengen zone',
    ],
  },
};
