import { useState, useEffect, React } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./NavBar.scss";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClickScroll = (height) => {
    window.scrollTo({
      top: height,
      behavior: "smooth",
    });
  };

  const elementStyle = {
    transform: isHovered ? "scale(1.2)" : "scale(1)",
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        // Scrolling up, show the navbar
        setNavbarVisible(true);
      } else {
        // Scrolling down, hide the navbar
        setNavbarVisible(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  console.log(isOpen);

  return (
    // <div className={`NavBar${navbarVisible ? "" : "__Hidden"}`}>
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
        {/* <button className="NavBar__Nav__Hamburger" onClick={toggleDropdown}> */}
        <GiHamburgerMenu
          className="NavBar__Nav__Hamburger"
          onClick={toggleDropdown}
          style={elementStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {/* </button> */}

        {isOpen && (
          <div className="NavBar__Dropdown">
            <p>About</p>
            <p>Experiences</p>

            <p></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
