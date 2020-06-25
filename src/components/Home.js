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
          I'm a full-stack software engineer from London. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
      <div className='link'></div>
    </div>
  );
};

export default Home;
