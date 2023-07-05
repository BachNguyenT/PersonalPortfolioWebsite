import { FaLinkedin, FaGithub, FaTwitter, } from "react-icons/fa";
import "./Connect.scss";

const Connect = () => {
  return (
    <div className="Connect">
      <span className="Connect__Circle">
        <FaLinkedin />
      </span>

      <span className="Connect__Circle">
        <FaGithub />
      </span>

      <span className="Connect__Circle">
        <FaTwitter />
      </span>
    </div>
  );
};

export default Connect;
