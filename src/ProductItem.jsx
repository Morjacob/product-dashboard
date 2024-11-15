import React from 'react';

const ProductItem = ({ product }) => {
  const { name, price, description } = product;

  return (
    <div className="product-item">
      <h2>{name}</h2>
      <p className="product-price">${price}</p>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default ProductItem;
