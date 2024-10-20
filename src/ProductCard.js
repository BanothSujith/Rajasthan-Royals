import React from 'react';

function ProductCard({ product,handleBuyNow }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>${product.price} <del>{product.orginalPrice}</del></p>
      <button className="buy-now-btn" onClick={() => handleBuyNow(product)}>
        Buy Now
      </button>
          </div>
  );
}

export default ProductCard;
