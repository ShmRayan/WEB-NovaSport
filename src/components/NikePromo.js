import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

const NikePromo = () => {
  return (
    <div className="product-detail">
      <div className="breadcrumb">
        <Link to="/">Accueil</Link> {'>'} <Link to="/products">Products</Link> {'>'} Nike Promo
      </div>
      <h1>Nike Promo</h1>
      <img src="/assets/nike1.jpg" alt="Nike Promo" />
      <div className="text-content">
        <p>
          Price: $69.99
        </p>
        <p>
          High-quality Nike shoes designed for performance and comfort. Special promo price!
        </p>
        <h3>Advantages:</h3>
        <ul>
          <li>Superior comfort</li>
          <li>Durable and long-lasting</li>
          <li>Stylish design</li>
        </ul>
      </div>
      <button className="add-to-cart">Ajouter au panier</button>
    </div>
  );
};

export default NikePromo;
