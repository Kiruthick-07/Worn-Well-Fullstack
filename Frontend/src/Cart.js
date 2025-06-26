import React, { createContext, useContext, useState } from 'react';
import Header from './Header';
import Review from './Review';
import Contact from './Contact';
import Footer from './Footer';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export const Cart = () => {
  const { cart } = useCart();

  return (
    <>
      <Header />
      <div style={{ padding: '40px', background: '#fff', minHeight: '100vh', color: '#111', boxShadow: '0 4px 32px rgba(0,0,0,0.10)', maxWidth: 700, margin: '40px auto', borderRadius: 16 }}>
        <h2 style={{ color: '#111', borderBottom: '2px solid #111', paddingBottom: '10px', marginBottom: '30px' }}>Your Cart</h2>
        {cart.length === 0 ? (
          <p style={{ color: '#555' }}>Your cart is empty.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item, idx) => (
              <li
                key={idx}
                style={{
                  marginBottom: '30px',
                  borderRadius: '12px',
                  background: '#fff',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid #eee',
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: '100px',
                    height: '80px',
                    objectFit: 'cover',
                    marginRight: '30px',
                    borderRadius: '8px',
                    border: '2px solid #eee',
                    background: '#fafafa',
                  }}
                />
                <div style={{ flex: 1 }}>
                  <strong style={{ fontSize: '1.2rem', color: '#111' }}>{item.name}</strong> <br />
                  <span style={{ color: '#555' }}>{item.category}</span> <br />
                  <span style={{ color: '#111', fontWeight: 'bold' }}>${item.price}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Contact />
      <Footer />
    </>
  );
}; 