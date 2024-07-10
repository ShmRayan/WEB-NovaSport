import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

const MontrePromo = () => {
  return (
    <div className="product-detail">
      <div className="breadcrumb">
        <Link to="/">Accueil</Link> {'>'} <Link to="/products">Products</Link> {'>'} Montre Promo
      </div>
      <h1>Montre Promo</h1>
      <img src="/assets/montre1.jpg" alt="Montre Promo" />
      <div className="text-content">
        <p>
          Price: $39.99
        </p>
        <p>
          Elegant and functional watches for all occasions. Special promo price!
        </p>
        <h3>Advantages:</h3>
        <ul>
          <li>Precise timekeeping</li>
          <li>Stylish design</li>
          <li>Durable build</li>
        </ul>
      </div>
      <button className="add-to-cart">Ajouter au panier</button>
    </div>
  );
};

export default MontrePromo;
