import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SolarPanels from './pages/SolarPanels';
import BatteryStorage from './pages/BatteryStorage';
import EVChargers from './pages/EVChargers';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/residential-construction" element={<SolarPanels />} />
          <Route path="/commercial-construction" element={<BatteryStorage />} />
          <Route path="/renovations" element={<EVChargers />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
