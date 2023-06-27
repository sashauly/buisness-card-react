import React from "react";
import emailIcon from "../images/mail-icon.svg";
import linkedinIcon from "../images/linkedin-icon.svg";
import hhIcon from "../images/hh-icon.svg";

export default function Main(props) {
  let resumeSettings = {
    icon: linkedinIcon,
    name: "LinkedIn",
    style: "btn__linkedin",
  };
  if (new URL(props.resume).hostname === "hh.ru") {
    resumeSettings = { icon: hhIcon, name: "HeadHunter", style: "btn__hh" };
  }
  return (
    <div className="main__container">
      <h1 className="main__heading">{props.name}</h1>
      <h3 className="main__profession">{props.position}</h3>
      <a
        href={`${props.site}`}
        className="main__link"
        target="_blank"
        rel="noreferrer"
      >
        {props.site}
      </a>
      <div className="main__button-wrapper">
        <a href={`mailto:${props.email}`} target="_blank" rel="noreferrer">
          <button className="btn-reset btn btn__email">
            <img src={emailIcon} />
            Email
          </button>
        </a>
        <a href={`${props.resume}`} target="_blank" rel="noreferrer">
          <button className={`btn-reset btn ${resumeSettings.style}`}>
            <img src={resumeSettings.icon} width="17px" />
            {resumeSettings.name}
          </button>
        </a>
      </div>
      <div className="main__content">
        <h2 className="content__title">About</h2>
        <p className="content__descr">{props.about}</p>
        <h2 className="content__title">Interests</h2>
        <p className="content__descr">{props.interests}</p>
      </div>
    </div>
  );
}
