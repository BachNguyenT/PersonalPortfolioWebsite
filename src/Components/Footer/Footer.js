import { useRef, React } from "react";
import "./Footer.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  
  const handleClickEmail = () => {
    window.location.href = 'mailto:bachesnguyen@gmail.com';
  };

  const experiencesRef = useRef(null);

  const handleClickScroll = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="Footer">
      <div className="Footer__Name">
        <h1>Bach Nguyen</h1>
        <FaLinkedin
          className="Footer__Name__Icons"
          size={40}
          onClick={() => {
            handleClick("https://linkedin.com/in/bach-nguyen-t");
          }}
        />
        <FaGithub
          className="Footer__Name__Icons"
          size={40}
          onClick={() => {
            // handleClick("https://github.com/bachnguyent");
            handleClickScroll();
          }}
        />
        <MdEmail
          className="Footer__Name__Icons"
          size={32}
          onClick={() => {
            handleClickEmail();
          }}
        />
      </div>
      <div className="Footer__Navigator">
        <p className="Footer__Navigator__"></p>
      </div>
    </div>
  );
};

export default Footer;
