import React from "react";

export default function Header(props) {
  return (
    <div className="header__container">
      <img
        src={`src/images/${props.photo}`}
        alt="profile-photo"
        className="header__img"
      />
    </div>
  );
}
