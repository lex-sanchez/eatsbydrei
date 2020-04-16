import React from 'react';
import styles from '../styles/landing.css';
import instagramImg from '../glyph-logo_May2016.png';
import facebookImg from "../facebook.png";
import youtubeImg from "../youtube-1.png";

const Landing = props => {
  return (
      <div className="landing-container" >
          <div className="landing-header">
              <div className="title">
                <h1>Eats By Drei</h1>
                  <hr></hr>
              </div>
            <h3>Cook. Photograph. Repeat.</h3>
            <img src={instagramImg} alt="instagram" />
            <img src={facebookImg} alt="facebook" />
            <img src={youtubeImg} alt="youtube" />
          </div>
          <div className="social-container">
          </div>
      </div>
  )
};

export default Landing;

