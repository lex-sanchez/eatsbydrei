import React from 'react';
import styles from '../styles/landing.css';
import instagramImg from '../glyph-logo_May2016.png';
import facebookImg from "../facebook.png";
import youtubeImg from "../youtube-1.png";
import SidebarButton from "./SidebarButton";

const Landing = props => {
    console.log(props);
  return (
      <div className="landing-container" >
          <div className="landing-header">
              <div className="title">
                <h1>Eats By Drei</h1>
                  <hr></hr>
              </div>
              <div className="motto">
                  <h3>Cook. Photograph. Repeat.</h3>
              </div>
              <div className="social-container">
              <img src={instagramImg} alt="instagram" />
            <img src={facebookImg} alt="facebook" />
            <img src={youtubeImg} alt="youtube" />
          </div>
          </div>
      </div>
  )
};

export default Landing;

