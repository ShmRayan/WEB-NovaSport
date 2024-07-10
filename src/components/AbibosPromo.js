import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

const AbibosPromo = () => {
  return (
    <div className="product-detail">
      <div className="breadcrumb">
        <Link to="/">Accueil</Link> {'>'} <Link to="/products">Products</Link> {'>'} Abibos Promo
      </div>
      <h1>Abibos Promo</h1>
      <img src="/assets/abibos1.jpeg" alt="Abibos Promo" />
      <div className="text-content">
        <p>
          Price: $69.99
        </p>
        <p>
          Affordable yet reliable Abibos shoes for everyday use.
        </p>
        <h3>Advantages:</h3>
        <ul>
          <li>Good value for money</li>
          <li>Comfortable fit</li>
          <li>Stylish appearance</li>
        </ul>
      </div>
      <button className="add-to-cart">Ajouter au panier</button>
    </div>
  );
};

export default AbibosPromo;
