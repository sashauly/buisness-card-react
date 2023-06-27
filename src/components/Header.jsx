import React from "react";
import profilePhoto from "../images/profile.png";

export default function Header() {
  return (
    <div className="header__container">
      <img
        src={profilePhoto}
        alt="profile-photo"
        width="317px"
        height="317px"
      />
    </div>
  );
}
