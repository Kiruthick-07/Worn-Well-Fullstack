import React from 'react';

const Footer = () => (
  <footer style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '30px 0', marginTop: '40px', fontSize: '1rem', letterSpacing: '1px' }}>
    <div style={{ marginBottom: '10px', fontWeight: 'bold', fontSize: '1.2rem' }}>WornWell</div>
    <div style={{ marginBottom: '8px' }}>
      &copy; {new Date().getFullYear()} WornWell. All rights reserved.
    </div>
    <div style={{ fontSize: '0.95rem', color: '#ccc' }}>
      Contact: <a href="mailto:support@wornwell.com" style={{ color: '#fff', textDecoration: 'underline' }}>support@wornwell.com</a> | Phone: +1-234-567-8901
    </div>
  </footer>
);

export default Footer; 