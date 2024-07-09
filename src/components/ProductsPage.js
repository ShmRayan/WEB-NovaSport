import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductsPage.css';

const ProductsPage = () => {
  const [filter, setFilter] = useState('');
  const [sorted, setSorted] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Nike', price: '79.99$', image: '/assets/nike.jpg' },
    { id: 2, name: 'Adidas', price: '79.99$', image: '/assets/adidas.webp' },
    { id: 3, name: 'Puma', price: '79.99$', image: '/assets/puma.jpg' },
    { id: 4, name: 'Abibos', price: '79.99$', image: '/assets/abibos.webp' },
    { id: 5, name: 'Montre', price: '49.99$', image: '/assets/montre.jpg' },
    { id: 6, name: 'Altere', price: '49.99$', image: '/assets/altere.jpg' },
    { id: 7, name: 'Casquette', price: '49.99$', image: '/assets/casquette.jpg' },
    { id: 8, name: 'Debardeur', price: '49.99$', image: '/assets/debardeur.jpg' },
    { id: 9, name: 'NikePromo', price: '69.99$', image: '/assets/nike1.jpg' },
    { id: 10, name: 'AdidasPromo', price: '69.99$', image: '/assets/adidas1.jpeg' },
    { id: 11, name: 'PumaPromo', price: '69.99$', image: '/assets/puma1.webp' },
    { id: 12, name: 'AbibosPromo', price: '69.99$', image: '/assets/abibos1.jpeg' },
    { id: 13, name: 'MontrePromo', price: '39.99$', image: '/assets/montre1.jpg' },
    { id: 14, name: 'AlterePromo', price: '39.99$', image: '/assets/altere1.jpeg' },
    { id: 15, name: 'CasquettePromo', price: '39.99$', image: '/assets/casquette1.webp' },
    { id: 16, name: 'DebardeurPromo', price: '39.99$', image: '/assets/debardeur1.jpeg' }
    
  ];

  const promotions = [
    { id: 1, name: 'Nike', price: '69.99$', image: '/assets/nike1.jpg' },
    { id: 2, name: 'Adidas', price: '69.99$', image: '/assets/adidas1.jpeg' },
    { id: 3, name: 'Puma', price: '69.99$', image: '/assets/puma1.webp' },
    { id: 4, name: 'Abibos', price: '69.99$', image: '/assets/abibos1.jpeg' },
    { id: 5, name: 'Montre', price: '39.99$', image: '/assets/montre1.jpg' },
    { id: 6, name: 'Altere', price: '39.99$', image: '/assets/altere1.jpeg' },
    { id: 7, name: 'Casquette', price: '39.99$', image: '/assets/casquette1.webp' },
    { id: 8, name: 'Debardeur', price: '39.99$', image: '/assets/debardeur1.jpeg' }
  ];

  const filterOptions = {
    'Type de produit': ['Chaussures', 'Accessoires'],
    'Genre': ['Homme', 'Femme'],
    'Couleur': ['Rouge', 'Bleu', 'Noir'],
    'Taille': ['S', 'M', 'L', 'XL'],
    'Marque': ['Nike', 'Adidas', 'Puma', 'Abibos'],
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = () => {
    setSorted(!sorted);
  };

  const handleFilterSelect = (filter, option) => {
    setSelectedFilter(`${filter}: ${option}`);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const handlePromoNext = () => {
    setCurrentPromoIndex((prevIndex) => (prevIndex + 1) % promotions.length);
  };

  const handlePromoPrev = () => {
    setCurrentPromoIndex((prevIndex) => (prevIndex - 1 + promotions.length) % promotions.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
      handlePromoNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedProducts = sorted ? [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name)) : filteredProducts;

  const visibleProducts = sortedProducts.slice(currentIndex, currentIndex + 5);
  const visiblePromotions = promotions.slice(currentPromoIndex, currentPromoIndex + 5);

  if (visibleProducts.length < 5) {
    visibleProducts.push(...sortedProducts.slice(0, 5 - visibleProducts.length));
  }

  if (visiblePromotions.length < 5) {
    visiblePromotions.push(...promotions.slice(0, 5 - visiblePromotions.length));
  }

  const navigateToProduct = (id) => {
    navigate(`/productdetails`);
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">NovaSport</h1>
        <input 
          className="search-bar" 
          placeholder="Rechercher un produit ou un sport..." 
          value={filter} 
          onChange={handleFilterChange} 
        />
      </header>
      <div className="filters">
        {Object.keys(filterOptions).map(filter => (
          <div className="filter-button" key={filter}>
            {filter}
            <div className="filter-options">
              {filterOptions[filter].map(option => (
                <button key={option} onClick={() => handleFilterSelect(filter, option)}>{option}</button>
              ))}
            </div>
          </div>
        ))}
        <button className="filter-button" onClick={handleSortChange}>Trier par pertinence</button>
      </div>
      {selectedFilter && <div className="selected-filter">Filtre sélectionné: {selectedFilter}</div>}
      <div className="results">
        <h2 className="section-title">Résultat des Recherches</h2>
        <div className="product-slider">
          <button className="slider-arrow" onClick={handlePrev}>◀</button>
          <div className="product-grid">
            {visibleProducts.map(product => (
              <button key={product.id} className="product-card" onClick={() => navigateToProduct(product.id)}>
                <img className="product-image" src={product.image} alt={product.name} />
                <div className="product-info">
                  <p className="product-name">{product.name}</p>
                  <p className="product-price">{product.price}</p>
                </div>
              </button>
            ))}
          </div>
          <button className="slider-arrow" onClick={handleNext}>▶</button>
        </div>
      </div>
      <div className="promotions">
        <h2 className="section-title">Promotions</h2>
        <div className="product-slider">
          <button className="slider-arrow" onClick={handlePromoPrev}>◀</button>
          <div className="product-grid">
            {visiblePromotions.map(product => (
              <button key={product.id} className="product-card" onClick={() => navigateToProduct(product.id)}>
                <img className="product-image" src={product.image} alt={product.name} />
                <img className="solde-icon" src="/assets/solde.png" alt="Soldée" />
                <div className="product-info">
                  <p className="product-name">{product.name}</p>
                  <p className="product-price">{product.price}</p>
                  <p className="product-sale">Soldée</p>
                </div>
              </button>
            ))}
          </div>
          <button className="slider-arrow" onClick={handlePromoNext}>▶</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
