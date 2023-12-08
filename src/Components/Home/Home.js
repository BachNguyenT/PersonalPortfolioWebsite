import React, { useEffect } from "react";
import "./Home.scss";
import Avatar from "../../Assets/Avatar.png";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="Home">
      <div className="Home__Left">
        <p
          className="Home__Left__Intro"
          style={{
            margin: "-.7rem 0",
            fontWeight: "400",
            animation: "slideIn 1.5s ease-in-out",
            fontSize: "32px",
            opacity: "1",
          }}
        >
          Hi, I'm
        </p>
        <h1 className="Home__Left__Name" style={{ margin: "1rem 0 -1rem 0" }}>
          Bach Nguyen
        </h1>
        <h1
          className="Home__Left__Name"
          style={{
            fontSize: "35px",
            animation: "slideIn 6s ease-in-out",
            animationTimingFunction: "cubic-bezier(0.035, 0.82, 0.865, 1)",
          }}
        >
          An Aspiring Software Engineer
        </h1>
        {/* & Enthusiastic  */}
        <p className="Home__Left__Intro">
          Studying Computer Science at{" "}
          <a
            className="Home__Left__Intro__Link"
            href="https://uwaterloo.ca/future-students/programs/business-administration-computer-science-double-degree#:~:text=In%20this%20unique%20program%2C%20you,and%20social%20implications%20of%20computing."
          >
            University of Waterloo
          </a>{" "}
          and Business Administration at{" "}
          <a
            className="Home__Left__Intro__Link"
            href="https://www.wlu.ca/programs/business-and-economics/undergraduate/business-bba-and-computer-science-bsc/index.html"
          >
            Wilfrid Laurier University
          </a>
        </p>
        <p className="Home__Left__Intro">
          Passionate in acquiring new languages, frameworks, concepts, and
          technologies.
        </p>
        <p className="Home__Left__Intro">
          Currently working as a Frontend Developer Intern at{" "}
          <a className="Home__Left__Intro__Link" href="https://exceltech.vn/">
            Excel Technologies
          </a>
        </p>
      </div>
      <div className="Home__Right" data-aos="fade-left" data-aos-duration="1500">
        <img className="Home__Right__Image" src={Avatar} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;
