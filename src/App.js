import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import Nike from './components/Nike';
import Adidas from './components/Adidas';
import Puma from './components/Puma';
import Abibos from './components/Abibos';
import Montre from './components/Montre';
import Altere from './components/Altere';
import Casquette from './components/Casquette';
import Debardeur from './components/Debardeur';
import NikePromo from './components/NikePromo';
import AdidasPromo from './components/AdidasPromo';
import PumaPromo from './components/PumaPromo';
import AbibosPromo from './components/AbibosPromo';
import MontrePromo from './components/MontrePromo';
import AlterePromo from './components/AlterePromo';
import CasquettePromo from './components/CasquettePromo';
import DebardeurPromo from './components/DebardeurPromo';
import ContactUs from './components/ContactUs'; // Importez le composant ContactUs
import AboutUs from './components/AboutUs'; // Importez le composant AboutUs
import Login from './components/Login'; 
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/nike" element={<Nike />} />
          <Route path="/adidas" element={<Adidas />} />
          <Route path="/puma" element={<Puma />} />
          <Route path="/abibos" element={<Abibos />} />
          <Route path="/montre" element={<Montre />} />
          <Route path="/altere" element={<Altere />} />
          <Route path="/casquette" element={<Casquette />} />
          <Route path="/debardeur" element={<Debardeur />} />
          <Route path="/nikePromo" element={<NikePromo />} />
          <Route path="/adidasPromo" element={<AdidasPromo />} />
          <Route path="/pumaPromo" element={<PumaPromo />} />
          <Route path="/abibosPromo" element={<AbibosPromo />} />
          <Route path="/montrePromo" element={<MontrePromo />} />
          <Route path="/alterePromo" element={<AlterePromo />} />
          <Route path="/casquettePromo" element={<CasquettePromo />} />
          <Route path="/debardeurPromo" element={<DebardeurPromo />} />
          <Route path="/contact" element={<ContactUs />} /> {/* Ajoutez la route pour la page de contact */}
          <Route path="/about" element={<AboutUs />} /> {/* Ajoutez cette ligne */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
