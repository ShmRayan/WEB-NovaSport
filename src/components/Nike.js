import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

const Nike = () => {
  return (
    <div className="product-detail">
      <div className="breadcrumb">
        <Link to="/">Accueil</Link> {'>'} <Link to="/products">Products</Link> {'>'} Nike
      </div>
      <h1>Nike</h1>
      <img src="/assets/nike.jpg" alt="Nike" />
      <div className="text-content">
        <p>
          Price: $79.99
        </p>
        <p>
          High-quality Nike shoes designed for performance and comfort.
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

export default Nike;
