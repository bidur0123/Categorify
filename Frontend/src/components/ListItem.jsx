// src/components/ListItem.jsx
import React from 'react';

const ListItem = ({ product }) => {
  return (
    <div className="list-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>Company: {product.company}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Discount: {product.discount}%</p>
        <p>Availability: {product.availability}</p>
      </div>
    </div>
  );
};

export default ListItem;
