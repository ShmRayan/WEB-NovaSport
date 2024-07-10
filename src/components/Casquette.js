import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

const Casquette = () => {
  return (
    <div className="product-detail">
      <div className="breadcrumb">
        <Link to="/">Accueil</Link> {'>'} <Link to="/products">Products</Link> {'>'} Casquette
      </div>
      <h1>Casquette</h1>
      <img src="/assets/casquette.jpg" alt="Casquette" />
      <div className="text-content">
        <p>
          Price: $49.99
        </p>
        <p>
          Stylish and comfortable caps for everyday wear.
        </p>
        <h3>Advantages:</h3>
        <ul>
          <li>Protects from the sun</li>
          <li>Adjustable fit</li>
          <li>Fashionable look</li>
        </ul>
      </div>
      <button className="add-to-cart">Ajouter au panier</button>
    </div>
  );
};

export default Casquette;
