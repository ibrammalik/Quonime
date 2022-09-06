import React from "react";
import Logo from "../asset/images/Logo.png";
import Profile from "../asset/images/Profile.png";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer id="footer">
      <div id="footer-content">
        <div id="logo">
          <img id="website-logo" src={Logo} alt="Website Logo Quonime Q"></img>
          <p id="website-name" className="margin-0">
            Quonime
          </p>
        </div>
        <div id="credit-container">
          <p id="credit-title" className="margin-0">
            Credit
          </p>
          <a href="https://www.flaticon.com/authors/freepik" title="q icons" target="_blank" rel="noreferrer" className="t-decor-none color-white">
            Q icons created by Freepik - Flaticon
          </a>
          <a href="https://github.com/rocktimsaikia/anime-chan" target="_blank" rel="noreferrer" className="t-decor-none color-white">
            Animechan API created by rocktimsaikia - Github
          </a>
        </div>
        <div id="aboutme" className="left-align">
          <p id="aboutme-title" className="margin-0">
            About Me
          </p>
          <div id="aboutme-detail" className="d-flex">
            <img src={Profile} id="profile-picture" alt="profile-ibrammalik"></img>
            <div id="social-media-container">
              <p id="social-media-title" className="margin-0">
                Social Media
              </p>
              <a href="https://github.com/ibrammalik" target="_blank" rel="noreferrer" className="d-block t-decor-none color-white">
                <FontAwesomeIcon icon={faGithub} /> <span>ibrammalik</span>
              </a>
              <a href="https://instagram.com/ibra_mmalik" target="_blank" rel="noreferrer" className="d-block t-decor-none color-white">
                <FontAwesomeIcon icon={faInstagram} /> <span>ibra_mmalik</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="copyright">
        <p>
          Copyright <FontAwesomeIcon icon={faCopyright} /> 2022 ibrammalik. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
