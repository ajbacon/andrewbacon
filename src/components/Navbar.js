import React from 'react';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-brand'>andrew bacon.</div>
        <div>
          <ul className='navbar-nav'>
            <li className='navbar-item'>portfolio</li>
            <li className='navbar-item'>blog</li>
            <li className='navbar-item'>about</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
