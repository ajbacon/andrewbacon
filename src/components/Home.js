import React from 'react';
import './Home.css';
import emailImg from './images/email-14-xl.png';
import gitHubIcon from './images/github-icon.png';
// import faceShot from './faceShot.jpg';

const Home = () => {
  return (
    <div className='home'>
      <div className='title'>Hi, I'm Andrew!</div>

      <div className='contact-links'>
        <a href='https://github.com/ajbacon'>
          <img className='contact-img' src={gitHubIcon} alt='github-icon' />
        </a>
        <a href='https://www.linkedin.com/in/andrew-bacon-a13942b3/'>
          <img
            className='contact-img'
            src='https://www.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png'
            alt='linkedin-icon'
          />
        </a>
        <a href='mailto:abacon2013@gmail.com'>
          <img className='contact-img' src={emailImg} alt='email-icon' />
        </a>
      </div>
      <div className='content'>
        <p>
          I'm a software engineer and recent Makers Academy graduate from
          London. Specialising in full-stack web development with a strong
          interest in cloud-native technologies, I am proficient in JavaScript,
          Node, React, Python, Ruby/Rails and various other associated libraries
          and frameworks.
        </p>
        <p>
          Please see my{' '}
          <span>
            <a href='/portfolio'>portfolio</a>
          </span>{' '}
          page for latest personal projects
        </p>
        <p>
          Software engineering has not been my only passion. After earning a
          Masters degree in Aerospace Engineering from the University of
          Manchester, I went on to work in the Aerospace industry becoming a
          senior engineer specialising in the design, analysis and testing of
          Satellite and aircraft wing structures.
        </p>
      </div>
    </div>
  );
};

export default Home;
