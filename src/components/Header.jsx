import React from "react";

import photo from "../images/profile.png";

export default function Header(props) {
  return (
    <div className="header__container">
      <img src={photo} alt="profile-photo" className="header__img" />
    </div>
  );
}
