import { useRef, React } from "react";
import "./Footer.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
          <h1 className="Footer__Top__Name__Title">Bach Nguyen</h1>
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
          <p className="Footer__Top__Navigator__">About</p>
          <p className="Footer__Top__Navigator__">Skills</p>
          <p className="Footer__Top__Navigator__">Experiences</p>
          <p className="Footer__Top__Navigator__">Contact</p>
        </div>
      </div>
      <div className="Footer__Bottom">
            <p className="Footer__Bottom__Description">Designed & Developed from scratch by Bach Nguyen</p>
            <p className="Footer__Bottom__Description">Using ReactJS, HTML, and CSS/SASS</p>
      </div>
    </div>
  );
};

export default Footer;
