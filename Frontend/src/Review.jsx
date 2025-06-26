import React from 'react'
import './Review.css'

const Review = () => {
  return (
    <>
    <div className='review-component'>
        <div className='head-txt'>
            <h1>What Our Customers Say</h1>
            <p>We value our customers' feedback and strive to provide the best service possible.</p>
        </div>
        <div className='review-containers'>
          <div className='container'>
            <h2>⭐⭐⭐⭐⭐</h2>
            <p>"I absolutely love my new sneakers! They are so comfortable and stylish. Highly recommend!"</p>
            <img src='' alt='customer-img'></img>
            <h3>- Sarah J</h3>
            <h5>Verified Buyer</h5>
          </div>
          <div className='container'>
            <h2>⭐⭐⭐⭐</h2>
            <p>"Great quality and fast shipping. The jeans fit perfectly and look amazing!"</p>
            <img src='' alt='customer-img'></img>
            <h3>- Mike L</h3>
            <h5>Verified Buyer</h5>
        </div>
        <div className='container'>
            <h2>⭐⭐⭐⭐</h2>
            <p>"The formal t-shirt was so comfortable to wear and the fit was perfect , love this shirt!"</p>
            <img src='' alt='customer-img'></img>
            <h3>- Akilan T</h3>
            <h5>Verified Buyer</h5>
        </div>
    </div>
    </div>
    </>
  )
}

export default Review