import HeroSection from '../components/HeroSection';
import WhyEurope from '../components/WhyEurope';
import Countries from '../components/Countries';
import CitizenshipByDescent from '../components/CitizenshipByDescent'; // Yol dosya yapına göre ayarlanmalı

function Home() {
  return (
    <>
      <HeroSection />
      <CitizenshipByDescent />
      <WhyEurope />
      <Countries />
    </>
  );
}

export default Home;