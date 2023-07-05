import { useEffect, React } from "react";
import "./About.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="About" data-aos="fade-up" data-aos-duration="1000">
      <h1 className="About__Header" data-aos="fade-up">
        I create tailored websites for small businesses and start-ups to help
        them reach bigger audiences
      </h1>
      <p className="About__Content" data-aos="fade-up" data-aos-duration="3000">
        My background includes corporate and freelance experience, with a
        history of design projects. I have worked on nationwide and
        international marketing and product launch campaigns for global brands.
      </p>
      <p className="About__Content" data-aos="fade-up" data-aos-duration="3000">
        Literally, a website needs 4 seconds to give clear message of what is it
        for, what is the target audience and impress the visitor with visual
        appearance.
      </p>
      <p className="About__Content" data-aos="fade-up" data-aos-duration="3000">
        Design can fascinatingly change our decisions and emotions. It converts
        website visitors into your customers. So I am here to help you with it.
      </p>
    </div>
  );
};

export default About;
