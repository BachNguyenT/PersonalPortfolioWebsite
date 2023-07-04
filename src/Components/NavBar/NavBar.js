import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  const handleClickScroll = (height) => {
    window.scrollTo({
      top: height,
      behavior: "smooth",
    });
  };
  return (
    <div className="NavBar">
      <h1
        className="NavBar__Name"
        onClick={() => {
          handleClickScroll(0);
        }}
      >
        Bach Nguyen
      </h1>
      <div className="NavBar__Nav">
        <p
          className="NavBar__Nav__Content"
          onClick={() => {
            handleClickScroll(80);
          }}
        >
          About
        </p>
        <p className="NavBar__Nav__Content">Experiences</p>
        <p className="NavBar__Nav__Content">Skills</p>
        <p className="NavBar__Nav__Content">Contact</p>
      </div>
    </div>
  );
};

export default NavBar;
