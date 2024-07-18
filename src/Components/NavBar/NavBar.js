import { useState, useEffect, React } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./NavBar.scss";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdClose } from "react-icons/io";

const NavBar = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileWidth, setIsMobileWidth] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleClickScroll = (height) => {
    window.scrollTo({
      top: height,
      behavior: "smooth",
    });
  };

  const elementStyle = {
    transform: isHovered ? "scale(1.2)" : "scale(1)",
  };

  useEffect(() => {
    if (window.innerWidth < 800) {
      setIsMobileWidth(true);
    } else {
      setIsMobileWidth(false);
    }
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 800) {
        setIsMobileWidth(true);
      } else {
        setIsMobileWidth(false);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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

      {!isMobileWidth && (
        <div className="NavBar__Nav">
          <>
            {/* <p
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
              handleClick();
              // handleClickScroll(3120);
            }}
          >
            Experiences
          </p>
          <p
            className="NavBar__Nav__Content"
            onClick={() => {
              console.log("HI");
            }}
          >
            Contact
          </p> */}
          </>
          <Link
            activeClass="active"
            className="NavBar__Nav__Content"
            to="Home"
            spy={true}
            smooth={true}
            duration={700}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            className="NavBar__Nav__Content"
            to="About"
            spy={true}
            smooth={true}
            duration={700}
          >
            About
          </Link>

          <Link
            activeClass="active"
            className="NavBar__Nav__Content"
            to="Skills"
            spy={true}
            smooth={true}
            duration={700}
          >
            Skills
          </Link>

          <Link
            activeClass="active"
            className="NavBar__Nav__Content"
            to="Experiences"
            spy={true}
            smooth={true}
            duration={700}
          >
            Experiences
          </Link>

          <Link
            activeClass="active"
            className="NavBar__Nav__Content"
            to="Contact"
            spy={true}
            smooth={true}
            duration={700}
          >
            Contact
          </Link>
        </div>
      )}

      {isMobileWidth && (
        <GiHamburgerMenu
          className="NavBar__Nav__Hamburger"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          style={elementStyle}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        />
      )}

      {isOpen && (
        <div
          className="NavBar__Dropdown"
          data-aos="fade-left"
          // style={{ animation: `${isOpen ? "fadeIn" : "fadeOut"} 1s` }}
        >
          <div className="NavBar__Dropdown__Content">
            <Link
              activeClass="active"
              className="NavBar__Dropdown__Content__Sections"
              to="Home"
              spy={true}
              smooth={true}
              duration={700}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              className="NavBar__Dropdown__Content__Sections"
              to="About"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              About
            </Link>

            <Link
              activeClass="active"
              className="NavBar__Dropdown__Content__Sections"
              to="Skills"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Skills
            </Link>

            <Link
              activeClass="active"
              className="NavBar__Dropdown__Content__Sections"
              to="Experiences"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Experiences
            </Link>

            <Link
              activeClass="active"
              className="NavBar__Dropdown__Content__Sections"
              to="Contact"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Contact
            </Link>
          </div>

          <IoMdClose
            className="NavBar__Dropdown__Close"
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
