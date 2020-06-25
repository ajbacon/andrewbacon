import React from 'react';
import './Home.css';
import emailImg from './email-icon.png';
import gitHubIcon from './github-icon.png';

const Home = () => {
  return (
    <div className='home'>
      <div className='title'>Hi, I'm Andrew!</div>

      <div className='contact-links'>
        <a href='https://www.linkedin.com/in/andrew-bacon-a13942b3/'>
          <img
            className='contact-img'
            src='https://www.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png'
            alt='linkedin-icon'
          />
        </a>
        <a href='https://github.com/ajbacon'>
          <img className='contact-img' src={gitHubIcon} alt='github-icon' />
        </a>
        <a href='mailto:abacon2013@gmail.com'>
          <img className='contact-img' src={emailImg} alt='email-icon' />
        </a>
      </div>
      <div className='content'>
        <p>
          I'm a software engineer from London. Specialising in full-stack web
          development and a strong interest in cloud-native technologies, I am
          proficient in JavaScript, Node, React, Python and various other
          associated libraries and frameworks.
        </p>
        <p>
          Software engineering has not been my only passion. After earning a
          Masters degree in Aerospace Engineering from the University of
          Manchester, I went on to work in the Aerospace industry specialising
          in the design, analysis and testing of Satellite and aircraft wing
          structures.
        </p>
      </div>
      <div className='link'></div>
    </div>
  );
};

export default Home;
