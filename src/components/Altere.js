import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

const Altere = () => {
  return (
    <div className="product-detail">
      <div className="breadcrumb">
        <Link to="/">Accueil</Link> {'>'} <Link to="/products">Products</Link> {'>'} Altere
      </div>
      <h1>Altere</h1>
      <img src="/assets/altere.jpg" alt="Altere" />
      <div className="text-content">
        <p>
          Price: $49.99
        </p>
        <p>
          High-quality dumbbells perfect for strength training and muscle building.
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

export default Altere;
