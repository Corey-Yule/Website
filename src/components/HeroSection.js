import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Welcome To My Website</h1>
      <p>This website is a display of what I am working on and projects I have previously completed.</p>
      <p>_____________________</p>
      <div className='hero-btns'>
        <Button
        
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          targetId='card-section'
          offset={80} //offset added to make the navbar not block the top of the cards section
        >
          View Projects
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
