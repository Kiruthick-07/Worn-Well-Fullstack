import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className='overlay'></div>
        <img className='heroimg' src='parker-burchfield-tvG4WvjgsEY-unsplash-removebg-preview.png'></img>
        <div className='hero-text'>
        <h1>From Basic to Bold – We've Got You.</h1>
        <p>Dress with intent. Style with purpose</p>
        <button className='shopnow'>Shop Now</button>
        <button className='explore'>Explore</button>
        </div>
      </div>

    </>
  )
}

export default Hero