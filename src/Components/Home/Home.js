import React from "react";
import "./Home.scss";
import Avatar from "./Avatar.png";

const Home = () => {
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
            animationTimingFunction: 'cubic-bezier(0.035, 0.82, 0.865, 1)'
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
          <a
            className="Home__Left__Intro__Link"
            href="https://et-landing-page.vercel.app"
          >
            Excel Technologies
          </a>
        </p>
      </div>
      <div className="Home__Right">
        <img className="Home__Right__Image" src={Avatar} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;