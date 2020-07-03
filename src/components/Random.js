import React from 'react';
import './Random.css';
import aiCatFlap from './images/ai-cat-flap.png';
import legoSubmarine from './images/lego-submarine.png';

const Random = () => {
  return (
    <div className='container'>
      <div className='wrapper' id='rnd-page'>
        <h1>Some Interesting Articles...</h1>
        <a
          href='https://www.theverge.com/tldr/2019/6/30/19102430/amazon-engineer-ai-powered-catflap-prey-ben-hamm'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='rnd-article'>
            <div className='rnd-img'>
              <img src={aiCatFlap} alt='ai-cat-flap_image' />
            </div>
            <div className='rnd-info'>
              <h2>AI-Powered cat flap</h2>
              <p className='rnd-summary'>
                An Amazon employee made an AI-powered cat flap to stop his cat
                from bringing home dead animals
              </p>
            </div>
          </div>
        </a>
        <a
          href='https://www.youtube.com/watch?v=MdfUSNzc0Xk'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='rnd-article'>
            <div className='rnd-img'>
              <img src={legoSubmarine} alt='ai-cat-flap_image' />
            </div>
            <div className='rnd-info'>
              <h2>Lego Submarine</h2>
              <p className='rnd-summary'>
                Submarine made from lego and an ikea tub! This RC sub has
                magnetic couplings to transmit torque through the walls. No need
                to drill holes = no leaks.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Random;
