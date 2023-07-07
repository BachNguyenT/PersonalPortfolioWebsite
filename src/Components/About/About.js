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
        I am a dynamic leader & developer with a great experiences in
        programming and leadership
      </h1>
      <p className="About__Content" data-aos="fade-up" data-aos-duration="3000">
        My background includes both corporate and freelance experiences, with a
        history of Frontend Web development and Integer Optimization
        programming, as well as pioneering Leadership who make the first moves
      </p>
      <p className="About__Content" data-aos="fade-up" data-aos-duration="3000">
        With previous high school club leadership experiences and in the
        workplace, I have solidified my reputation as a dedicated team player
        and effective leader. By fostering collaboration and encouraging open
        communication, I have successfully guided teams to achieve shared goals
        and maximize their potential.
      </p>
      <p className="About__Content" data-aos="fade-up" data-aos-duration="3000">
        With an unwavering commitment to excellence, I am ecstatic to lead by
        example and make a profound and lasting impact in the society
      </p>
    </div>
  );
};

export default About;
