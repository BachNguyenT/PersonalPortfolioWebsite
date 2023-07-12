import "./Skills.scss";
import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="Skills">
      <div className="Skills__Title" data-aos="fade-up" data-aos-duration="1500">
        <h1 className="Skills__Title__Title">Skills & Leadership</h1>
        <p className="Skills__Title__Description">
          With extensive experiences in club leadership and professional
          corporate roles, I possess exceptional skills in leadership, sports,
          and professional settings. I have a proven track record of
          successfully managing teams, achieving outstanding results, and
          maintaining a high level of professionalism in all aspects of my work.
        </p>
      </div>
      <div className="Skills__Content">
        <div
          className="Skills__Content__Block"
          data-aos="fade-up-right"
          data-aos-duration="1500"
        >
          <h1 className="Skills__Content__Block__Title">Badminton</h1>
          <p className="Skills__Content__Block__Description">
            Through my two-year tenure as the varsity boys' team lead,
            encompassing coaching and competing in high-stakes provincial level
            championships, I diligently honed my technical prowess, tactical
            acumen, and transformative leadership abilities, reaching an
            extraordinary level of expertise in guiding and inspiring the team
            towards remarkable achievements including multiple championships in
            both singles and doubles
          </p>
        </div>
        <div
          className="Skills__Content__Block"
          data-aos="fade-up-left"
          data-aos-duration="1500"
        >
          <h1 className="Skills__Content__Block__Title">Piano</h1>
          <p className="Skills__Content__Block__Description">
            As a devoted classical music aficionado, I have dedicated left years
            to studying and self-teaching the piano. This pursuit has not only
            deepened my appreciation for the art form but has also instilled
            valuable qualities such as time management, resilience, and the
            ability to express my emotions through the enchanting melodies of
            romantic pieces that I hold dear.
          </p>
        </div>
        <div
          className="Skills__Content__Block"
          data-aos="fade-up-right"
          data-aos-duration="1500"
        >
          <h1 className="Skills__Content__Block__Title">Programming</h1>
          <p className="Skills__Content__Block__Description">
            My journey in programming initially fuelled with simple games like
            Sudoku and Count to 30. Through various projects, including a
            research project on Vehicle Routing Problems, hackathons, and
            internships as a frontend developer at a rising tech corporation, I
            have refined my skills and embraced a future career dedicated to
            programming and software developing.
          </p>
        </div>
        <div
          className="Skills__Content__Block"
          data-aos="fade-up-left"
          data-aos-duration="1500"
        >
          <h1 className="Skills__Content__Block__Title">Culture Integration</h1>
          <p className="Skills__Content__Block__Description">
            As an international exchange student in Canada, I experienced
            first-hand the challenges of cultural differences and diversity. To
            address these issues, I founded a culture club to provide support
            and foster a sense of belonging for both international and
            indigenous students. The club served as a platform for dialogue and
            understanding, promoting cultural integration within our school
            community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
