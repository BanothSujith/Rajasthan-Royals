import React from 'react';
import { useState } from 'react';
import ProductCard from './ProductCard';

const products = [
  { name: 'Jursey', price: 20, orginalPrice:100, image: './img/p1.png' },
  { name: 'Cricket Bat', price: 30, orginalPrice:200, image: './img/bat.png' },
  { name: 'Cap', price: 25, orginalPrice:70,  image: './img/cap.png' },
  { name: 'Water Bottle', price: 40, orginalPrice:150, image: './img/water.png' }
];

function Shopping() {

    const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false); // For toggling cart visibility

  // Define the handleBuyNow function to add products to the cart
  const handleBuyNow = (product) => {
    setCart([...cart, product]); // Add the product to the cart
    alert(`${product.name} has been added to the cart!`); // Notify the user
  };

  // Function to toggle the cart display
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <section className="shopping-section">
    <div className="header">
      <div><h2 className="section-title">Shop Our Products </h2>
       </div>
      <div className="cart-icon" onClick={toggleCart}>
        <img src="./img/Cart.svg" alt="Cart" className="cart-image" />
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </div>
    </div>

    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} handleBuyNow={handleBuyNow} />
      ))}
    </div>

    {/* Cart Dropdown */}
    {showCart && (
      <div className="cart-dropdown">
        <h3>Your Cart</h3>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    )}
  </section>
);
}
export default Shopping;
