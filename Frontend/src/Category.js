import React from 'react'
import './Category.css'

const Category = () => {
  return (
    <>
    <div className='category'>
        <div className='category-title'>
            <h1>Shop by Category</h1>
            <p>Explore Our Various Range Of Products</p>
        </div>
        <div className='category-containers'>
            <div className='category-iteams'>
                <img src='mod4.jpg'></img>
                <h3>Men's</h3>
            </div>
            <div className='category-iteams'>
                <img src='women clothing.jpg'></img>
                <h3>Women's</h3>
            </div>
            <div className='category-iteams'>
                <img src='accessories image.jpg'></img>
                <h3>Accessories</h3>
            </div>
            <div className='category-iteams'>
                <img src='new-arrrival.jpg'></img>
                <h3>New Arrival</h3>
            </div>
            
        </div>
        

    </div>
    </>
  )
}

export default Category