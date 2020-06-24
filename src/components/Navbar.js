import React from 'react';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <header className='nav-container'>
        <a href='#logo' class='logo'>
          andrew bacon.
        </a>
        <input className='nav-menu-btn' type='checkbox' id='nav-menu-btn' />
        <label className='nav-menu-icon' for='nav-menu-btn'>
          <span className='navicon'></span>
        </label>
        <ul className='nav-menu'>
          <li>
            <a href='#home'>home</a>
          </li>
          <li>
            <a href='#work'>portfolio</a>
          </li>
          <li>
            <a href='#about'>blog</a>
          </li>
          <li>
            <a href='#careers'>about</a>
          </li>
        </ul>
      </header>
      <div className='nav-spacer'></div>
    </div>
  );
};

export default Navbar;
