import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='portfolio-item'>
        <div className='portfolio-info'>
          <div className='portfolio-title'>StocksApp</div>
        </div>

        <div className='portfolio-image'>
          <img className='device-image' src='zzNgk.png' alt='' />
          <img className='stocksapp-gif' src='stocksapp3.gif' alt='' />
        </div>
      </div>

      <div className='portfolio-item'>
        <div className='portfolio-info'>
          <div className='portfolio-title'>N.E.O.N</div>
        </div>

        <div className='portfolio-image'>
          <img className='device-image' src='zzNgk.png' alt='' />
          <img className='stocksapp-gif' src='neon.gif' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
