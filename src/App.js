import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import ProductDetailsPage from './components/ProductDetailsPage';
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
          <Route path="/productdetails" element={<ProductDetailsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
