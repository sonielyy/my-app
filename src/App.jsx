import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import WhyEuropePage from './pages/WhyEuropePage';
import CountryListPage from './pages/CountryListPage';
import CountryPage from './pages/CountryPage'; // Bu da gerekli
import ServicesPage from './pages/ServicesPage';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import Blog from './pages/Blog';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/benefits" element={<WhyEuropePage />} />
          <Route path="/countries" element={<CountryListPage />} />
          <Route path="/countries/:countrySlug" element={<CountryPage />} />
          <Route path="/services/:serviceSlug" element={<ServicesPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
