import React, { useEffect, useState } from 'react'
import './Products.css'
import { useCart } from './Cart';

const Products = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/items')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <>
    <div className='product-section'>
        <div className='text'>
        <h1>Featured Products</h1>
        <p>Browse our carefully curated collections</p>
         </div>
        <div className='list'>
          {products.map((product, idx) => (
            <div className='product' key={idx}>
                <img src={product.img || 'shoes.jpg'} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.category || ''}</p>
                <h4>${product.price}</h4>
                <button className='cart-btn' onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <center>
            <button className='btn'>View All Products</button>
        </center>
    </div>
    </>
  )
}

export default Products