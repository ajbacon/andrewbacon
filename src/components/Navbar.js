import React from 'react';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <header className='nav-container'>
        <a href='/' className='logo'>
          andrew bacon<span className='blue-dot'>.</span>
        </a>
        <input className='nav-menu-btn' type='checkbox' id='nav-menu-btn' />
        <label className='nav-menu-icon' htmlFor='nav-menu-btn'>
          <span className='navicon'></span>
        </label>
        <ul className='nav-menu'>
          <li>
            <a href='/'>home</a>
          </li>
          <li>
            <a href='/portfolio'>portfolio</a>
          </li>
          <li>
            <a href='/blog'>blog</a>
          </li>
          <li>
            <a href='/random'>random</a>
          </li>
        </ul>
      </header>
      <div className='nav-spacer'></div>
    </div>
  );
};

export default Navbar;
