

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import GaleriaPage from './pages/GaleriaPage'
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer';

import './styles.css';
import './styles/StylesMovile.css';


function App() {
  return (
    <Router>

      <Header />
      <Nav />

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/nosotros" exact element={<NosotrosPage />} />
        <Route path="/galeria" exact element={<GaleriaPage />} />
        <Route path="/novedades" exact element={<NovedadesPage />} />
        <Route path="/contacto" exact element={<ContactoPage />} />
      </Routes>

      <Footer />

    </Router>

  );

}

export default App;
