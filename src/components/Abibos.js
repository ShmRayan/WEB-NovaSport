import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

const Abibos = () => {
  return (
    <div className="product-detail">
      <div className="breadcrumb">
        <Link to="/">Accueil</Link> {'>'} <Link to="/products">Products</Link> {'>'} Abibos
      </div>
      <h1>Abibos</h1>
      <img src="/assets/abibos.webp" alt="Abibos" />
      <div className="text-content">
        <p>
          Price: $79.99
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

export default Abibos;
