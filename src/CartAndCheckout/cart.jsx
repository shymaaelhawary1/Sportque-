import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './cart.css';

const Cart = () => {
  const location = useLocation();
  const [cart, setCart] = useState(location.state?.cart || []);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);
  
  // Calculate the total price of the cart
  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Remove a product from the cart
  const handleRemove = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // Checkout process
  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5003/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const { url } = data;
      window.location = url; // Redirect the user to the payment page
    } catch (error) {
      console.error('Error during checkout:', error);
      setError('An error occurred during checkout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {error && <p className="error-message">{error}</p>}
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-details">
            {cart.map((product, index) => (
              <div key={index} className="cart-item">
                <img
                  src={product.image}
                  alt={product.name}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <h3 className="cart-item-title">{product.name}</h3>
                  <p className="cart-item-price">
                    Price: ${product.price} × {product.quantity}
                  </p>
                  <p className="cart-item-quantity">
                    Quantity: {product.quantity}
                  </p>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => handleRemove(index)}
                >
                  ❌
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ${calculateTotal()}</h3>
          </div>

          <div className="checkout-button-container">
            <button 
              className="checkout-button" 
              onClick={handleCheckout} 
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Checkout'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
