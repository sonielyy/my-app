import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import WhyEurope from './components/WhyEurope';
import Countries from './components/Countries';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhyEurope />
        <Countries />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}


export default App;
