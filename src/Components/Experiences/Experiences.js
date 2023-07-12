import { React, useEffect, forwardRef } from "react";
import "./Experiences.scss";
import VRP from "./VRP.jpg";
import Culture from "./CultureIntegration.png";
import Badminton from "./Badminton.png";
import FrontEnd from './Frontend.png'
import AOS from "aos";
import "aos/dist/aos.css";

const Experiences = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="Experiences" >
      <div className="Experiences__Grid">
        <div
          className="Experiences__Grid__Title"
          data-aos="zoom-out"
          data-aos-duration="1500"
        >
          <p style={{ marginBottom: "-1rem" }}>Experiences</p>
          <h3>My Achievements in the past 3 years</h3>
        </div>
        <div
          className="Experiences__Grid__Content"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <div className="Experiences__Grid__Content__Container">
            <img
              className="Experiences__Grid__Content__Container__Image"
              src={Culture}
              alt="Culture"
              style={{
                width: "90%",
                height: "auto",
                boxSizing: "border-box",
                borderRadius: "10px",
              }}
            />
          </div>
          <h4 className="Experiences__Grid__Content__Title">Culture Club</h4>
          <p className="Experiences__Grid__Content__Description">
            A weekly club I founded where I provided support and a sense of
            belonging for both international and indigenous students. Through
            this club, we organized monthly school trips and activities to
            foster inclusivity and cultural diversity. Additionally, I advocated
            for administrative initiatives such as international culture
            celebrations and displaying flags in the hallways to promote
            diversity awareness.
          </p>
        </div>
        <div
          className="Experiences__Grid__Content"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <div className="Experiences__Grid__Content__Container">
            <img
              className="Experiences__Grid__Content__Container__Image"
              src={FrontEnd}
              alt="FrontEnd"
              style={{
                width: "90%",
                height: "auto",
                boxSizing: "border-box",
                borderRadius: "10px",
              }}
              data-aos="zoom-out"
              data-aos-duration="2000"
            />
          </div>
          <h4 className="Experiences__Grid__Content__Title">Web Developer</h4>
          <p className="Experiences__Grid__Content__Description">
            I worked at Excel Technologies as a Frontend Developer Intern
            responsible for developing and maintaining various Frontend
            components. Working closely with a team of developers, I
            collaborated to ensure a seamless user experience. This internship
            provided me with valuable lessons in discipline, teamwork, and
            effective collaboration, which further enhanced my skills and
            professional growth.
          </p>
        </div>
      </div>
      <div className="Experiences__Grid">
        <div
          className="Experiences__Grid__Content"
          data-aos="zoom-out"
          data-aos-duration="2000"
          onClick={() =>
            handleClick(
              "https://www.cbc.ca/news/canada/new-brunswick/garbage-collection-project-saint-john-1.6576693"
            )
          }
          style={{ marginTop: "0", cursor: "pointer" }}
          // onMouseEnter={(e) => {
          //   e.target.style.transform = "scale(1.05)";
          // }}
          // onMouseLeave={(e) => {
          //   e.target.style.transform = "scale(1)";
          // }}
        >
          <div className="Experiences__Grid__Content__Container">
            <img
              className="Experiences__Grid__Content__Container__Image"
              src={VRP}
              alt="VRP"
              style={{
                width: "90%",
                height: "auto",
                boxSizing: "border-box",
                borderRadius: "10px",
              }}
              data-aos="zoom-out"
              data-aos-duration="2000"
            />
          </div>
          <h4 className="Experiences__Grid__Content__Title">
            Vehicle Routing Problem
          </h4>
          {/* <div className="Experiences__Grid__Content__Description"> */}
          <p className="Experiences__Grid__Content__Description">
            A research project utilizing Mixed Integer Linear Programming
            Optimization for a realistic application. This project was
            recognized with a Silver Medal at the 2022 Canada Wide Science Fair,
            as well as the Renewable Energy Award and Challenge Award - Senior
            in the Energy Category. Check it out on CBC!: bit.ly/3JNxDSe
          </p>
          {/* </div> */}
        </div>
        <div
          className="Experiences__Grid__Content"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <div className="Experiences__Grid__Content__Container">
            <img
              className="Experiences__Grid__Content__Container__Image"
              src={Badminton}
              alt="Badminton"
              style={{
                width: "90%",
                height: "auto",
                boxSizing: "border-box",
                borderRadius: "10px",
              }}
            />
          </div>
          <h4 className="Experiences__Grid__Content__Title">
            Varsity Badminton Head
          </h4>
          <p className="Experiences__Grid__Content__Description">
            Coached and competed as the Varsity Boys’ Badminton Head with the
            Varsity Boys' Badminton team at the provincial level, winning
            multiple championships and earning MVP awards in Junior and Senior
            years. Developed a winning mindset, fostered teamwork, and
            cultivated individual talents to achieve remarkable success.
            Leadership role strengthened coaching abilities and instilled values
            of sportsmanship and perseverance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
