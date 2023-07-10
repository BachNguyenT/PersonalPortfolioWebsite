import { useState, useEffect, React } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./NavBar.scss";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const [isMobileWidth, setIsMobileWidth] = useState(false);

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
    const handleWindowResize = () => {
      if (window.innerWidth < 800) {
        setIsMobileWidth(true);
      } else {
        setIsMobileWidth(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleWindowResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []); // Empty dependency array to ensure the effect runs only once during component mounting

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

      {!isMobileWidth && (
        <div className="NavBar__Nav">
          <p
            className="NavBar__Nav__Content"
            onClick={() => {
              handleClickScroll(
                window.innerHeight <= 560 ? 440 : window.innerHeight - 65
              );
            }}
          >
            About
          </p>
          <p
            className="NavBar__Nav__Content"
            onClick={() => {
              handleClickScroll(1960);
            }}
          >
            Skills
          </p>
          <p
            className="NavBar__Nav__Content"
            onClick={() => {
              handleClickScroll(3120);
            }}
          >
            Experiences
          </p>
          <p
            className="NavBar__Nav__Content"
            onClick={() => {
              props.handleClick();
              console.log("HI");
            }}
          >
            Contact
          </p>
        </div>
      )}

      {isMobileWidth && (
        <GiHamburgerMenu
          className="NavBar__Nav__Hamburger"
          onClick={toggleDropdown}
          style={elementStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}

      {isOpen && (
        <div className="NavBar__Dropdown">
          <p>About</p>
          <p>Experiences</p>

          <p></p>
        </div>
      )}
    </div>
  );
};

export default NavBar;
