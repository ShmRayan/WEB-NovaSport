import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUserCircle, FaShoppingCart, FaMapMarkerAlt } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const mockSuggestions = ['Chaussures', 'Équipements', 'Accessoires'];
    setSuggestions(mockSuggestions.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase())));
  };

  return (
    <header className="header-container">
      <div className="top-container">
        <div className="logo-container">
          <h1 className="logo-text">NovaSport</h1>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/products" className="nav-link">Chaussures</Link>
          <Link to="/products" className="nav-link">Accessoires</Link>
          <Link to="/products" className="nav-link">Promotions</Link>
          <Link to="/" className="nav-link">FAQs</Link>
          <Link to="/" className="nav-link">Nous Contacter</Link>
        </nav>
        <div className="icons-container">
          <Link to="/" className="bold-link">EN</Link>
          <FaMapMarkerAlt className="icon" />
          <FaUserCircle className="icon" />
          <FaShoppingCart className="icon" />
          <Link to="/login" className="bold-link">Login</Link>
        </div>
      </div>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Rechercher un produit ou un sport..." 
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <FaSearch className="search-icon" />
        {suggestions.length > 0 && (
          <div className="suggestions-box">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="suggestion">{suggestion}</div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
