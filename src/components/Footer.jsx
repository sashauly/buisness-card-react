import React from "react";
import twitterIcon from "../images/twitter-icon.svg";
import facebookIcon from "../images/facebook-icon.svg";
import instagramIcon from "../images/instagram-icon.svg";
import telegramIcon from "../images/telegram-icon.svg";
import githubIcon from "../images/github-icon.svg";

export default function Footer(props) {
  return (
    <div className="footer__container">
      <ul className="list-reset footer__list">
        {props.twitter && (
          <li className="footer__item">
            <a href={`${props.twitter}`}>
              <img src={twitterIcon} className="footer__img" />
            </a>
          </li>
        )}
        {props.facebook && (
          <li className="footer__item">
            <a href={`${props.facebook}`}>
              <img src={facebookIcon} className="footer__img" />
            </a>
          </li>
        )}
        {props.instagram && (
          <li className="footer__item">
            <a href={`${props.instagram}`}>
              <img src={instagramIcon} className="footer__img" />
            </a>
          </li>
        )}
        {props.telegram && (
          <li className="footer__item">
            <a href={`${props.telegram}`}>
              <img src={telegramIcon} className="footer__img" />
            </a>
          </li>
        )}
        {props.github && (
          <li className="footer__item">
            <a href={`${props.github}`}>
              <img src={githubIcon} className="footer__img" />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
