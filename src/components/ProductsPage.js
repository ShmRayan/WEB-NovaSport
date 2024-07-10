import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

const ProductsPage = () => {
  const [filter, setFilter] = useState('');
  const [sorted, setSorted] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const [activeAccordion, setActiveAccordion] = useState(null);

  const products = [
    { id: 1, name: 'Nike', price: '79.99$', image: '/assets/nike.jpg', link: '/nike' },
    { id: 2, name: 'Adidas', price: '79.99$', image: '/assets/adidas.webp', link: '/adidas' },
    { id: 3, name: 'Puma', price: '79.99$', image: '/assets/puma.jpg', link: '/puma' },
    { id: 4, name: 'Abibos', price: '79.99$', image: '/assets/abibos.webp', link: '/abibos' },
    { id: 5, name: 'Montre', price: '49.99$', image: '/assets/montre.jpg', link: '/montre' },
    { id: 6, name: 'Altere', price: '49.99$', image: '/assets/altere.jpg', link: '/altere' },
    { id: 7, name: 'Casquette', price: '49.99$', image: '/assets/casquette.jpg', link: '/casquette' },
    { id: 8, name: 'Debardeur', price: '49.99$', image: '/assets/debardeur.jpg', link: '/debardeur' }
  ];

  const promotions = [
    { id: 1, name: 'Nike', price: '69.99$', image: '/assets/nike1.jpg', link: '/nikePromo' },
    { id: 2, name: 'Adidas', price: '69.99$', image: '/assets/adidas1.jpeg', link: '/adidasPromo' },
    { id: 3, name: 'Puma', price: '69.99$', image: '/assets/puma1.webp', link: '/pumaPromo' },
    { id: 4, name: 'Abibos', price: '69.99$', image: '/assets/abibos1.jpeg', link: '/abibosPromo' },
    { id: 5, name: 'Montre', price: '39.99$', image: '/assets/montre1.jpg', link: '/montrePromo' },
    { id: 6, name: 'Altere', price: '39.99$', image: '/assets/altere1.jpeg', link: '/alterePromo' },
    { id: 7, name: 'Casquette', price: '39.99$', image: '/assets/casquette1.webp', link: '/casquettePromo' },
    { id: 8, name: 'Debardeur', price: '39.99$', image: '/assets/debardeur1.jpeg', link: '/debardeurPromo' }
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

  const visibleProducts = sortedProducts.slice(currentIndex, currentIndex + 4);
  const visiblePromotions = promotions.slice(currentPromoIndex, currentPromoIndex + 4);
  if (visibleProducts.length < 4) {
    visibleProducts.push(...sortedProducts.slice(0, 4 - visibleProducts.length));
  }
  if (visiblePromotions.length < 4) {
    visiblePromotions.push(...promotions.slice(0, 4 - visiblePromotions.length));
  }

  return (
    <div className="container1">
      <header className="header1">
        <h1 className="logo1">NovaSport</h1>
        <input
          className="search-bar1"
          placeholder="Rechercher un produit ou un sport..."
          value={filter}
          onChange={handleFilterChange}
        />
      </header>
      <div className="filters1">
        {Object.keys(filterOptions).map(filter => (
          <div className="filter-button1" key={filter}>
            {filter}
            <div className="filter-options1">
              {filterOptions[filter].map(option => (
                <button key={option} onClick={() => handleFilterSelect(filter, option)}>{option}</button>
              ))}
            </div>
          </div>
        ))}
        <button className="filter-button1" onClick={handleSortChange}>Trier par pertinence</button>
      </div>

      {selectedFilter && <div className="selected-filter1">Filtre sélectionné: {selectedFilter}</div>}

      <div className="results1">

        <h2 className="section-title1" >Résultat des Recherches</h2>
        <p className="explanatory-text">Découvrez notre sélection des meilleurs produits pour améliorer votre performance sportive.</p>
        <div className="product-slider1">
          <button className="slider-arrow1" onClick={handlePrev}>◀</button>
          <div className="product-grid1">
            {visibleProducts.map(product => (
              <div className="product1-card" key={product.id}>
                <Link to={product.link}>
                  <img className="product-image1" src={product.image} alt={product.name} />
                  <div className="product-info1">
                    <p className="product-name1">{product.name}</p>
                    <p className="product-price1">{product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <button className="slider-arrow1" onClick={handleNext}>▶</button>
        </div>
      </div>


      <div className="promotions1" >

        <h2 className="section-title1">Promotions</h2>
        <p className="explanatory-text">Profitez de nos offres exceptionnelles sur une large gamme de produits de sport !</p>
        <div className="product-slider1">
          <button className="slider-arrow1" onClick={handlePromoPrev}>◀</button>
          <div className="product-grid1">
            {visiblePromotions.map(product => (
              <div className="product1-card" key={product.id}>
                <Link to={product.link}>
                  <img className="product-image1" src={product.image} alt={product.name} />
                  <img className="solde-icon1" src="/assets/solde.png" alt="Soldée" />
                  <div className="product-info1">
                    <p className="product-name1">{product.name}</p>
                    <p className="product-price1">{product.price}</p>
                    <p className="product-sale1">Soldée</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <button className="slider-arrow1" onClick={handlePromoNext}>▶</button>
        </div>
      </div>


      <div className="reviews-section">
      <h2 className="section-title1">Avis des Clients</h2>

      <div className="review-card">
        <p className="review-text">"Produit incroyable ! Très confortable et de bonne qualité."</p>
        <p className="review-author">- Jean Dupont</p>
        <div className="review-stars">⭐⭐⭐⭐⭐</div>
      </div>

      <div className="review-card">
        <p className="review-text">"Je recommande fortement ce produit à tous les sportifs."</p>
        <p className="review-author">- Marie Claire</p>
        <div className="review-stars">⭐⭐⭐⭐⭐</div>
      </div>

      <div className="review-card">
        <p className="review-text">"Excellent rapport qualité/prix. Très satisfait de mon achat."</p>
        <p className="review-author">- Alain Tremblay</p>
        <div className="review-stars">⭐⭐⭐⭐⭐</div>
      </div>
      </div>

      <div className="support-section">
      <h2 style={{ color: '#004080' }}>On est là pour vous !</h2>
      <div className="support-options">
        <div className="support-option">
          <img src="/assets/shipping.png" alt="Ship to Home" />
          <h3>Ship to Home</h3>
          <p>Order online and have products shipped to you.</p>
          <div className="accordion-title" onClick={() => toggleAccordion(0)}>View Shipping Options</div>
          <div className={`accordion-content ${activeAccordion === 0 ? 'open' : ''}`}>
            <p>Details about shipping options...</p>
          </div>
        </div>
        <div className="support-option">
          <img src="/assets/pickup.png" alt="Free In-Store Pickup" />
          <h3>Free In-Store Pickup</h3>
          <p>Order online and pick up in store.</p>
          <div className="accordion-title" onClick={() => toggleAccordion(1)}>View Pickup Options</div>
          <div className={`accordion-content ${activeAccordion === 1 ? 'open' : ''}`}>
            <p>Details about pickup options...</p>
          </div>
        </div>
        <div className="support-option">
          <img src="/assets/credit.png" alt="Credit Offered" />
          <h3>Credit Offered</h3>
          <p>Turn big purchases into small payments.</p>
          <div className="accordion-title" onClick={() => toggleAccordion(2)}>View Financing Options</div>
          <div className={`accordion-content ${activeAccordion === 2 ? 'open' : ''}`}>
            <p>Details about financing options...</p>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <p><strong>**Contactez-nous :**</strong></p>
        <p>Besoin d'aide ou avez des questions ? Notre équipe est là pour vous aider !</p>
        <p>N'hésitez pas à nous contacter pour toute question concernant nos produits, les commandes ou le processus d'achat. Nous sommes disponibles pour vous offrir une assistance personnalisée et garantir une expérience d'achat agréable chez NovaSport.</p>
        <p>Par téléphone : +1 (123) 456-7890</p>
        <p>Par email : support@novasport.com</p>
        <p>Rejoignez notre communauté sur les réseaux sociaux pour rester informé des dernières nouveautés et promotions !</p>
      </div>
</div>

  
   </div>
    
  );
};

export default ProductsPage;
