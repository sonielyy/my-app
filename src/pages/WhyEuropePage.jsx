import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import WhyEuropeHero from '../components/WhyEurope-Hero';
import WhyEuropeSections from '../components/WhyEurope-Sections';

function WhyEuropePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // render sonrası kaydırma için kısa gecikme
      }
    }
  }, [location]);

  return (
    <div>
      <WhyEuropeHero />
      <WhyEuropeSections />
    </div>
  );
}

export default WhyEuropePage;
