import { React, useEffect } from "react";
import "./Experiences.scss";
import VRP from "../../Assets/VRP.jpg";
import Culture from "../../Assets/CultureIntegration.png";
import Badminton from "../../Assets/Badminton.png";
import FrontEnd from "../../Assets/Frontend.png";
import BuddyLogo from "../../Assets/BuddyLogo.png";
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
    <div className="Experiences">
      <div className="Experiences__Grid">
        <div
          className="Experiences__Grid__Title"
          data-aos="zoom-out"
          data-aos-duration="1500"
        >
          <p style={{ marginBottom: "-1rem" }}>Experiences</p>
          <h3>My Achievements in High School & University</h3>
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
            A weekly club providing support and bonding for international and
            indigenous students. Organized monthly trips and activities to
            foster inclusivity and cultural diversity. Advocated for
            administrative initiatives to promote diversity awareness.
          </p>
        </div>
        <div
          className="Experiences__Grid__Content"
          data-aos="zoom-out"
          data-aos-duration="2000"
          style={{
            cursor: "pointer",
          }}
          href="https://exceltech.vn/"
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
          <h4 className="Experiences__Grid__Content__Title">
            Software Developer
          </h4>
          <p className="Experiences__Grid__Content__Description">
            Software Developer Intern at Excel Technologies & KnG Technologies,
            responsible for developing & maintaining Frontend applications.
            Gained insights towards collaboration, responsibility,
            communication, and transparency, critical in collaborative settings
            in any discipline especially software development.
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
            Optimization for a realistic application. The project won the Silver
            Medal at the 2022 Canada Wide Science Fair, among many other awards.
            Check it out on CBC!: bit.ly/3JNxDSe
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
            Coached and competed as the Varsity Boys’ Badminton Head in
            provincial tournaments, won multiple championships and MVP awards in
            Junior and Senior year. Developed a winning mindset, fostered
            teamwork, and strengthened leadership skills.
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
              src={BuddyLogo}
              alt="Badminton"
              style={{
                width: "90%",
                height: "auto",
                boxSizing: "border-box",
                borderRadius: "10px",
              }}
            />
          </div>
          <h4 className="Experiences__Grid__Content__Title">Buddy Program</h4>
          <p className="Experiences__Grid__Content__Description">
            Provided welcoming experiences to exchange students, aided towards
            university life and foreign cultural settings. Planned and organized
            events for up to 60 students. Designed a Process Management
            framework providing a guidelines towards operation mangement within
            the team of up to 15 people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
