import { useRef, React } from "react";
import "./Footer.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";

const Footer = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const handleClickEmail = () => {
    window.location.href = "mailto:bachesnguyen@gmail.com";
  };

  return (
    <div className="Footer">
      <div className="Footer__Top">
        <div className="Footer__Top__Name">
          {/* <h1 className="Footer__Top__Name__Title">Bach Nguyen</h1> */}
          <h1 className="Footer__Top__Name__Title">
            <Link
              activeClass="active"
              className="Footer__Top__Name__Title__Navigator"
              to="Home"
              spy={true}
              smooth={true}
              duration={700}
            >
              Bach Nguyen
            </Link>
          </h1>
          <FaLinkedin
            className="Footer__Top__Name__Icons"
            size={40}
            onClick={() => {
              handleClick("https://linkedin.com/in/bach-nguyen-t");
            }}
          />
          <FaGithub
            className="Footer__Top__Name__Icons"
            size={40}
            onClick={() => {
              handleClick("https://github.com/bachnguyent");
            }}
          />
          <MdEmail
            className="Footer__Top__Name__Icons"
            size={32}
            onClick={() => {
              handleClickEmail();
            }}
          />
        </div>
        <div className="Footer__Top__Navigator">
          <Link
            activeClass="active"
            className="Footer__Top__Navigator__Sections"
            to="Home"
            spy={true}
            smooth={true}
            duration={700}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            className="Footer__Top__Navigator__Sections"
            to="About"
            spy={true}
            smooth={true}
            duration={700}
          >
            About
          </Link>

          <Link
            activeClass="active"
            className="Footer__Top__Navigator__Sections"
            to="Skills"
            spy={true}
            smooth={true}
            duration={700}
          >
            Skills
          </Link>

          <Link
            activeClass="active"
            className="Footer__Top__Navigator__Sections"
            to="Experiences"
            spy={true}
            smooth={true}
            duration={700}
          >
            Experiences
          </Link>

          <Link
            activeClass="active"
            className="Footer__Top__Navigator__Sections"
            to="Contact"
            spy={true}
            smooth={true}
            duration={700}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="Footer__Bottom">
        <p className="Footer__Bottom__Description">
          Designed & Developed from scratch by Bach Nguyen
        </p>
        <p className="Footer__Bottom__Description">
          Using ReactJS, Javascript, HTML, and CSS/SASS
        </p>
      </div>
    </div>
  );
};

export default Footer;
