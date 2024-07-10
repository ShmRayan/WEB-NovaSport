import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

const CasquettePromo = () => {
  return (
    <div className="product-detail">
      <div className="breadcrumb">
        <Link to="/">Accueil</Link> {'>'} <Link to="/products">Products</Link> {'>'} Casquette Promo
      </div>
      <h1>Casquette Promo</h1>
      <img src="/assets/casquette1.webp" alt="Casquette Promo" />
      <div className="text-content">
        <p>
          Price: $39.99
        </p>
        <p>
          Stylish and comfortable caps for everyday wear. Special promo price!
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

export default CasquettePromo;
