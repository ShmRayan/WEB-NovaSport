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

  const handleSuggestionClick = () => {
    setSuggestions([]); // Vider les suggestions
  };

  const handleSearchClick = () => {
    const mockSuggestions = ['Chaussures', 'Équipements', 'Accessoires'];
    setSuggestions(mockSuggestions);
  };

  return (
    <header className="header-container">
      <div className="top-container">
        <div className="logo-container">
          <h1 className="logo-text">NovaSport</h1>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/products" className="nav-link">Articles</Link>
          <Link to="/products" className="nav-link">Promotions</Link>
          <Link to="/about" className="nav-link">FAQs</Link>
          <Link to="/contact" className="nav-link">Contact us</Link>
        </nav>
        <div className="icons-container">
          <a href="https://www.google.com/maps/place/Hassan+II,+Casablanca+20250,+Maroc/data=!4m2!3m1!1s0xda7ccc19069f333:0x58f9773f5d1ffad9?sa=X&ved=1t:242&ictx=111" target="_blank" rel="noopener noreferrer">
            <FaMapMarkerAlt className="icon" />
          </a>
          <Link to="/"><FaShoppingCart className="icon" /></Link>
          <Link to="/login" className="icon-link">
            <FaUserCircle className="icon" />
            <span>Login</span>
          </Link>
        </div>
      </div>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Rechercher un produit ou un sport..." 
          value={searchTerm}
          onChange={handleSearchChange}
          onClick={handleSearchClick}
          className="search-input"
        />
        <FaSearch className="search-icon" />
        {suggestions.length > 0 && (
          <div className="suggestions-box">
            {suggestions.map((suggestion, index) => (
              <Link key={index} className="suggestion" onClick={handleSuggestionClick}>{suggestion}</Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
