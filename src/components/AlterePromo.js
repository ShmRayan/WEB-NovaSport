import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

const AlterePromo = () => {
  return (
    <div className="product-detail">
      <div className="breadcrumb">
        <Link to="/">Accueil</Link> {'>'} <Link to="/products">Products</Link> {'>'} Altere Promo
      </div>
      <h1>Altere Promo</h1>
      <img src="/assets/altere1.jpeg" alt="Altere Promo" />
      <div className="text-content">
        <p>
          Price: $39.99
        </p>
        <p>
          High-quality dumbbells perfect for strength training and muscle building. Special promo price!
        </p>
        <h3>Advantages:</h3>
        <ul>
          <li>Improves muscle strength</li>
          <li>Versatile for different exercises</li>
          <li>Durable and long-lasting</li>
        </ul>
      </div>
      <button className="add-to-cart">Ajouter au panier</button>
    </div>
  );
};

export default AlterePromo;
