// src/data/servicesData.js

import investmentHero from '../assets/services/investment-hero.jpg';
import educationHero from '../assets/services/education-hero.jpg';
import entrepreneurshipHero from '../assets/services/entrepreneur-hero.jpg';

export const servicesData = {
  investment: {
    slug: 'investment',
    name: 'Citizenship by Investment',
    heroImage: investmentHero,
    intro: "Secure EU citizenship by making a qualifying investment in real estate, government bonds, or businesses.",
    faqs: [
      {
        question: 'What is citizenship by investment?',
        answer: 'It’s a legal process to obtain citizenship by investing in a country’s economy.',
      },
      {
        question: 'How much do I need to invest?',
        answer: 'Investment amounts typically start at €250,000 depending on the country.',
      },
      {
        question: 'Can my family members be included?',
        answer: 'Yes, most programs allow spouses and children to be included.',
      },
    ],
  },

  education: {
    slug: 'education',
    name: 'Citizenship through Education',
    heroImage: educationHero,
    intro: "Start your EU journey with world-class education and a path to permanent residency and citizenship.",
    faqs: [
      {
        question: 'Can studying in the EU lead to citizenship?',
        answer: 'Yes, many countries offer post-study work permits and residency options.',
      },
      {
        question: 'Do all degrees qualify?',
        answer: 'Bachelor’s, Master’s, and PhDs from accredited institutions generally qualify.',
      },
    ],
  },

  entrepreneurship: {
    slug: 'entrepreneurship',
    name: 'Citizenship through Entrepreneurship',
    heroImage: entrepreneurshipHero,
    intro: "Launch your business in the EU and unlock residency options that can lead to citizenship.",
    faqs: [
      {
        question: 'Do I need a business plan?',
        answer: 'Yes, a viable and innovative business plan is usually required.',
      },
      {
        question: 'Is there a capital requirement?',
        answer: 'Yes, this varies by country but a minimum capital is often necessary.',
      },
    ],
  },
};
