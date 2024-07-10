import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

// Déclaration Variable pour Image de background et promotion
const sportImage = `${process.env.PUBLIC_URL}/assets/background.jpg`;
const promoImage = `${process.env.PUBLIC_URL}/assets/promotion.jpg`;

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentShoeIndex, setCurrentShoeIndex] = useState(0);
  const [currentAccessoryIndex, setCurrentAccessoryIndex] = useState(0);

  // Déclaration pour les Articles
  const shoes = [
    { id: 1, name: 'Nike', price: '79.99$', image: '/assets/nike.jpg' },
    { id: 2, name: 'Adidas', price: '79.99$', image: '/assets/adidas.webp' },
    { id: 3, name: 'Puma', price: '79.99$', image: '/assets/puma.jpg' },
    { id: 4, name: 'Abibos', price: '79.99$', image: '/assets/abibos.webp' }
  ];

  const accessories = [
    { id: 1, name: 'Montre', price: '49.99$', image: '/assets/montre.jpg' },
    { id: 2, name: 'Altere', price: '49.99$', image: '/assets/altere.jpg' },
    { id: 3, name: 'Casquette', price: '49.99$', image: '/assets/casquette.jpg' },
    { id: 4, name: 'Debardeur', price: '49.99$', image: '/assets/debardeur.jpg' }
  ];

  // Effet Pour défilement
  useEffect(() => {
    setIsVisible(true);
    const shoeInterval = setInterval(() => {
      setCurrentShoeIndex((prevIndex) => (prevIndex + 1) % shoes.length);
    }, 5000);
    const accessoryInterval = setInterval(() => {
      setCurrentAccessoryIndex((prevIndex) => (prevIndex + 1) % accessories.length);
    }, 5000);
    return () => {
      clearInterval(shoeInterval);
      clearInterval(accessoryInterval);
    };
  }, [shoes.length, accessories.length]);

  const handleNextShoe = () => {
    setCurrentShoeIndex((prevIndex) => (prevIndex + 1) % shoes.length);
  };

  const handlePrevShoe = () => {
    setCurrentShoeIndex((prevIndex) => (prevIndex - 1 + shoes.length) % shoes.length);
  };

  const handleNextAccessory = () => {
    setCurrentAccessoryIndex((prevIndex) => (prevIndex + 1) % accessories.length);
  };

  const handlePrevAccessory = () => {
    setCurrentAccessoryIndex((prevIndex) => (prevIndex - 1 + accessories.length) % accessories.length);
  };

  const visibleShoes = shoes.slice(currentShoeIndex, currentShoeIndex + 3).concat(shoes.slice(0, Math.max(0, 3 - shoes.slice(currentShoeIndex, currentShoeIndex + 3).length)));
  const visibleAccessories = accessories.slice(currentAccessoryIndex, currentAccessoryIndex + 3).concat(accessories.slice(0, Math.max(0, 3 - accessories.slice(currentAccessoryIndex, currentAccessoryIndex + 3).length)));

  return (
    <div className="con">
      <div className={`content-box ${isVisible ? 'visible' : ''}`}>
        {/* LA BOX NOIRE */}
        <div className="text-section">
          <h1 className="title">Boostez Votre Performance</h1>
          <p className="description">
            Découvrez notre sélection de vêtements, chaussures, et accessoires de sport. Qualité, confort et style au top!
          </p>
          <p className="description">
            Chez NovaSport, nous nous engageons à vous fournir les meilleurs équipements pour améliorer votre performance.
            Que vous soyez un athlète professionnel ou amateur, nos produits sont conçus pour répondre à tous vos besoins.
            Restez motivé et atteignez vos objectifs avec style et confort.
          </p>
          <Link to="/products" className="link-button">Magasinez</Link>
        </div>
        <div className="image-section">
          <img src={sportImage} alt="Sport Image" className="styled-image" />
        </div>
      </div>

      <div className="products-section">
        <h2 className="section-title" style={{ color: '#FFFFFF', fontStyle: 'italic' }}>Voici des produits soigneusement sélectionnés pour Vous!</h2>
        <h2 className="section-title" style={{ color: '#00BFFF', fontStyle: 'italic' }}>Chaussures</h2>
        {/* SECTION DEFILEMENT POUR CHAUSSURES */}
        <div className="product-slider">
          <button className="arrow-button" onClick={handlePrevShoe}>◀</button>
          <div className="product-grid">
            {visibleShoes.map((shoe) => (
              <div key={shoe.id} className="product-card">
                <Link to={`/${shoe.name.toLowerCase()}`} className="product-link">
                  <img src={shoe.image} alt={shoe.name} className="product-image" />
                  <div className="product-info">
                    <h3 className="product-name">{shoe.name}</h3>
                    <p className="product-price">{shoe.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <button className="arrow-button" onClick={handleNextShoe}>▶</button>
        </div>

        <h2 className="section-title" style={{ color: '#00BFFF', fontStyle: 'italic' }}>Accessoires</h2>
        {/* SECTION DEFILEMENT POUR ACCESSOIRES */}
        <div className="product-slider">
          <button className="arrow-button" onClick={handlePrevAccessory}>◀</button>
          <div className="product-grid">
            {visibleAccessories.map((accessory) => (
              <div key={accessory.id} className="product-card">
                <Link to={`/${accessory.name.toLowerCase()}`} className="product-link">
                  <img src={accessory.image} alt={accessory.name} className="product-image" />
                  <div className="product-info">
                    <h3 className="product-name">{accessory.name}</h3>
                    <p className="product-price">{accessory.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <button className="arrow-button" onClick={handleNextAccessory}>▶</button>
        </div>
      </div>

      <div className={`promotion-section ${isVisible ? 'visible' : ''}`}>
        {/* PROMOTIONS */}
        <img src={promoImage} alt="Promotion Image" className="promo-image" />
        <div className="promo-content">
          <h3 className="promo-title">PROMOTIONS EXCLUSIVES</h3>
          <p className="promo-description">
            Ne ratez pas nos offres Exceptionnelles sur une sélection de vêtements, chaussures et accessoires !
          </p>
          <Link to="/products" className="link-button">Magasinez</Link>
        </div>
      </div>

      <div className={`about-us-section ${isVisible ? 'visible' : ''}`}>
        {/* ABOUT US */}
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-content">
          We'd love to hear from you! Here are our contact details:
          <br />
          <strong>Opening Hours:</strong>
          <br />
          - Monday to Friday: 9:00 AM - 6:00 PM
          <br />
          - Saturday: 10:00 AM - 4:00 PM
          <br />
          <strong>Location:</strong>
          <br />
          NovaSport Headquarters
          <br />
          123 Sports Avenue
          <br />
          Ottawa, ON K1A 0B1 Canada
        </p>
      </div>
    </div>
  );
};

export default HomePage;
