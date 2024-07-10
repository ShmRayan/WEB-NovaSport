import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

const DebardeurPromo = () => {
  return (
    <div className="product-detail">
      <div className="breadcrumb">
        <Link to="/">Accueil</Link> {'>'} <Link to="/products">Products</Link> {'>'} Debardeur Promo
      </div>
      <h1>Debardeur Promo</h1>
      <img src="/assets/debardeur1.jpeg" alt="Debardeur Promo" />
      <div className="text-content">
        <p>
          Price: $39.99
        </p>
        <p>
          Comfortable tank tops for your workouts and casual wear. Special promo price!
        </p>
        <h3>Advantages:</h3>
        <ul>
          <li>Breathable fabric</li>
          <li>Stylish design</li>
          <li>Perfect for workouts</li>
        </ul>
      </div>
      <button className="add-to-cart">Ajouter au panier</button>
    </div>
  );
};

export default DebardeurPromo;
