import React from "react";
import emailIcon from "../images/mail-icon.svg";
import linkedinIcon from "../images/linkedin-icon.svg";

export default function Main() {
  return (
    <div className="main__container">
      <h1 className="main__heading">Laura Smith</h1>
      <h3 className="main__profession">Frontend Developer</h3>
      <a href="#" className="main__link">
        laurasmith.com
      </a>
      <div className="main__button-wrapper">
        <button href="mailto:#" className="btn-reset btn btn__email">
          <img src={emailIcon} />
          Email
        </button>
        <button href="#" className="btn-reset btn btn__linkedin">
          <img src={linkedinIcon} />
          LinkedIn
        </button>
      </div>
      <div className="main__content">
        <h2 className="content__title">About</h2>
        <p className="content__descr">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h2 className="content__title">Interests</h2>
        <p className="content__descr">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}
