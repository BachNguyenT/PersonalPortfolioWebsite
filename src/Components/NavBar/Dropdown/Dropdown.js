import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Dropdown.scss";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`Dropdown${isOpen ? "__Open" : ""}`}>
      <button className="Dropdown__Open__Button" onClick={toggleDropdown}>
        <GiHamburgerMenu />
        <div className="Dropdown__Open__Hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </button>
      {isOpen && (
        <div className="Dropdown__Content">
          <p></p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
