import React, { useState } from 'react';
import './Header.css'; 
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const opennav = () => setSideNavOpen(true);
  const closenav = () => setSideNavOpen(false);
  const navigate = useNavigate();

  const handleSubmit= () =>{
    navigate('/Login');
  }

  return (
    <>
      <nav className="navbar">
        <h1 className='navtitle'>WornWell</h1>
        <div className='navlinks'>
          <span className='navlink' style={{cursor:'pointer'}} onClick={() => navigate('/dashboard')}>Home</span>
          <span className='navlink' style={{cursor:'pointer'}} onClick={() => navigate('/Products')}>Shop</span>
          <span className='navlink' style={{cursor:'pointer'}} onClick={handleSubmit}>Login</span>
          <span className='navlink' style={{cursor:'pointer'}} onClick={() => navigate('/contact')}>Contact</span>
        </div>
        <div className='buttondiv'>
         <Button variant="contained" color="primary" style={{backgroundColor:'black'}} startIcon={<ShoppingCartIcon />} onClick={() => navigate('/cart')}>
          View Cart
        </Button>
        </div>
        <div className='togglemenu'>
          <i className="fa-solid fa-bars" onClick={opennav}></i>
        </div>
      </nav>
      {sideNavOpen && (
        <div className='sidenavbar'>
          <p className='xmark'>
            <i className="fa-solid fa-xmark" onClick={closenav}></i>
          </p>
          <div className='sidenavlinks'>
            <span className='sidenavlink' style={{cursor:'pointer'}} onClick={() => { navigate('/dashboard'); closenav(); }}>Home</span>
            <span className='sidenavlink' style={{cursor:'pointer'}} onClick={() => { navigate('/Products'); closenav(); }}>Shop</span>
            <span className='sidenavlink' style={{cursor:'pointer'}} onClick={() => { navigate('/cart'); closenav(); }}>Cart</span>
            <span className='sidenavlink' style={{cursor:'pointer'}} onClick={() => { navigate('/contact'); closenav(); }}>Contact</span>
            <span className='sidenavlink' style={{cursor:'pointer'}} onClick={handleSubmit}>Login</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;