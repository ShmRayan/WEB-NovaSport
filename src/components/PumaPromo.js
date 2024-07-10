import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

const PumaPromo = () => {
  return (
    <div className="product-detail">
      <div className="breadcrumb">
        <Link to="/">Accueil</Link> {'>'} <Link to="/products">Products</Link> {'>'} Puma Promo
      </div>
      <h1>Puma Promo</h1>
      <img src="/assets/puma1.webp" alt="Puma Promo" />
      <div className="text-content">
        <p>
          Price: $69.99
        </p>
        <p>
          Experience the best with Puma shoes, known for their excellent quality and design.
        </p>
        <h3>Advantages:</h3>
        <ul>
          <li>Exceptional comfort</li>
          <li>Durable materials</li>
          <li>Modern look</li>
        </ul>
      </div>
      <button className="add-to-cart">Ajouter au panier</button>
    </div>
  );
};

export default PumaPromo;
