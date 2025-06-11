// src/data/countryData.js

import spainImg from '../assets/countries/spain-hero.jpg';
import spainImg_1 from '../assets/countries/spain-1.jpg';
import spainImg_2 from '../assets/countries/spain-2.jpg';
import spainImg_3 from '../assets/countries/spain-3.jpg';

export const countryData = {
  spain: {
    name: 'Spain',
    image: spainImg,
    reasons: [
      {
        title: 'Why should I choose Spain?',
        image: spainImg_1,
        text: [
          'Spain offers a sunny Mediterranean climate and relaxed lifestyle.',
          'It has a high quality of life with rich culture, cuisine, and arts.',
          'Access to world-class healthcare and education within the EU.',
        ],
      },
      {
        title: 'What are the advantages of Spain EU citizenship?',
        image: spainImg_2,
        text: [
          'Visa-free travel to over 180 countries.',
          'Full rights to work, live, and study across the EU.',
          'Access to social benefits and healthcare.',
        ],
      },
      {
        title: 'Ready to apply?',
        image: spainImg_3,
        text: [
          'Start your application today with our expert guidance.',
          'We provide step-by-step support for the whole process.',
          'Click below to begin your EU journey.',
        ],
      },
    ],
  },
};
