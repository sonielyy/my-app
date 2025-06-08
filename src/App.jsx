// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // ✅ ScrollToTop import
import Header from './components/Header';
import Footer from './components/Footer';

// These pages will be routed
import Home from './pages/Home';
import WhyEuropePage from './pages/WhyEuropePage';
import CountryPage from './pages/CountryPage';
import ServicesPage from './pages/ServicesPage';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import Blog from './pages/Blog';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Buraya ekliyoruz: Router içinde, Routes'tan önce */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-europe" element={<WhyEuropePage />} />
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
