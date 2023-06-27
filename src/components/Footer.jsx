import React from "react";
import twitterIcon from "../images/twitter-icon.svg";
import facebookIcon from "../images/facebook-icon.svg";
import instagramIcon from "../images/instagram-icon.svg";
import githubIcon from "../images/github-icon.svg";

export default function Footer() {
  return (
    <div className="footer__container">
      <ul className="list-reset footer__list">
        <li className="footer__item">
          <a href="#">
            <img src={twitterIcon} className="footer__img" />
          </a>
        </li>
        <li className="footer__item">
          <a href="#">
            <img src={facebookIcon} className="footer__img" />
          </a>
        </li>
        <li className="footer__item">
          <a href="#">
            <img src={instagramIcon} className="footer__img" />
          </a>
        </li>
        <li className="footer__item">
          <a href="#">
            <img src={githubIcon} className="footer__img" />
          </a>
        </li>
      </ul>
    </div>
  );
}
