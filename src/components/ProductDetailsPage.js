import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetailsPage.css';

const ProductDetailsPage = () => {
  const { id } = useParams();
  
  // Simuler la récupération des données de produit à partir de l'id
  const product = {
    id,
    name: 'Nom du Produit',
    price: '73.97$',
    originalPrice: '96.97$',
    description: 'Qualité grandee lets go!! Meilleur produits Lets go M8 meilleur team ! Hala Madrid !!',
    reviews: [
      {
        user: 'Cindy',
        title: 'Summer V-Neck T-Shirt Casual',
        date: 'May 21, 2024',
        content: 'soft and a nice bit of stretch. love the colours - and the fit and feel you cannot beat.',
        helpful: 5
      }
    ]
  };

  return (
    <div className="details-container">
      <header className="details-header">
        <h1 className="details-title">NovaSport</h1>
      </header>
      <div className="details-content">
        <h2 className="product-name">{product.name}</h2>
        <div className="product-pricing">
          <span className="product-price">NOW {product.price}</span>
          <span className="product-original-price">WAS {product.originalPrice}</span>
        </div>
        <div className="product-image-placeholder">
          <p>Image du produit</p>
        </div>
        <div className="product-description">
          <h3>Details du produit :</h3>
          <p>{product.description}</p>
        </div>
        <div className="product-reviews">
          <h3>Avis Des Personnes</h3>
          {product.reviews.map((review, index) => (
            <div key={index} className="review">
              <h4>{review.user}</h4>
              <h5>{review.title}</h5>
              <p>{review.date}</p>
              <p>{review.content}</p>
              <p>{review.helpful} people found this helpful</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
