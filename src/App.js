

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';

import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer';

import './styles.css';

function App() {
  return (
    <Router>

      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/novedades" element={<NovedadesPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
