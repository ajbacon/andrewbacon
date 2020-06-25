import React from 'react';
import './Portfolio.css';
import deviceImg from './zZNgk.png';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='portfolio-item'>
        <div className='portfolio-info'>
          <div className='portfolio-title'>StocksApp</div>
          <div className='portfolio-links'>
            <a href='https://project-stocks-app.herokuapp.com/'>website</a>
            <a href='https://github.com/ajbacon/StocksApp'>code</a>
          </div>
          <div className='portfolio-description'>
            <p>
              Full-stack javascript application allowing users to search share
              prices, view general business and company specific news and trade
              in a mock environment.{' '}
            </p>
            <p>
              This is an ongoing personal project to solidify deeper
              understanding of building production standard full-stack
              JavaScript applications, the focus of which is on maintainable,
              thoroughly tested code. Automation of integration and
              delivery/deployment is managed through CI/CD tools and processes.{' '}
            </p>
          </div>
          <div className='portfolio-tech-skills'>
            <h2>Technologies:</h2>
            <div className='skill-item'>
              <p>Node</p>
            </div>
            <div className='skill-item'>
              <p>Express</p>
            </div>
            <div className='skill-item'>
              <p>React</p>
            </div>
            <div className='skill-item'>
              <p>Redux</p>
            </div>
            <div className='skill-item'>
              <p>MongoDB</p>
            </div>
            <div className='skill-item'>
              <p>Jest/Enzyme</p>
            </div>
            <div className='skill-item'>
              <p>TravisCI</p>
            </div>
          </div>
          <div className='portfolio-tech-skills'>
            <h2>Skills:</h2>
            <div className='skill-item'>
              <p>CI/CD</p>
            </div>
            <div className='skill-item'>
              <p>Async Testing</p>
            </div>
            <div className='skill-item'>
              <p>RESTful API</p>
            </div>
            <div className='skill-item'>
              <p>Authentication</p>
            </div>
            <div className='skill-item'>
              <p>NoSQL Databases</p>
            </div>
          </div>
        </div>

        <div className='portfolio-image'>
          <img className='device-image' src={deviceImg} alt='' />
          <img className='stocksapp-gif' src='stocksapp3.gif' alt='' />
        </div>
      </div>

      <div className='portfolio-item'>
        <div className='portfolio-info'>
          <div className='portfolio-title'>N.E.O.N</div>
          <div className='portfolio-links'>
            <a href='https://neon-simulation.herokuapp.com/'>website</a>
            <a href='https://github.com/even13/game_of_life'>code</a>
          </div>
          <div className='portfolio-description'>
            <p>
              An alternative take on the classic Conways game of life cellular
              automata simulation, adding 2-player game functionality.{' '}
            </p>
            <p>
              Makers Academy final project completed over 10days, with AGILE
              workflows at the core of team processes. Experience gained from
              this has helped to better plan future complex React component
              structures. Global state management with Redux would have helped
              reduce complexity in this project.{' '}
            </p>
          </div>
          <div className='portfolio-tech-skills'>
            <h2>Technologies:</h2>
            <div className='skill-item'>
              <p>Node</p>
            </div>
            <div className='skill-item'>
              <p>React</p>
            </div>
            <div className='skill-item'>
              <p>Jest/Enzyme</p>
            </div>
            <div className='skill-item'>
              <p>TravisCI</p>
            </div>
          </div>
          <div className='portfolio-tech-skills'>
            <h2>Skills:</h2>
            <div className='skill-item'>
              <p>CI/CD</p>
            </div>
            <div className='skill-item'>
              <p>Async Testing</p>
            </div>
            <div className='skill-item'>
              <p>AGILE</p>
            </div>
            <div className='skill-item'>
              <p>TDD</p>
            </div>
          </div>
        </div>

        <div className='portfolio-image'>
          <img className='device-image' src={deviceImg} alt='' />
          <img className='stocksapp-gif' src='neon.gif' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
