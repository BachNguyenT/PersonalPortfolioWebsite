import "./Skills.scss";
import React from 'react';

const Skills = () => {
  return (
    <div className="Skills">
      <div className="Skills__Title">
        <h1 className="Skills__Title__Title">Skills & Leadership</h1>
        <p className="Skills__Title_Description">
          My background includes corporate and freelance experience, with a
          history of design projects. I have worked on nationwide and
          international marketing and product launch campaigns for global
          brands.
        </p>
      </div>
      <div className="Skills__Content">
        <div className="Skills__Content__Block" style={{background:"",height:"50%"}}>
          <h1 className="Skills__Content__Block__Title">Badminton</h1>
          {/* <p className="Skills__Content__Block__Detail">
            Working at Facebook has taught me a lot about how to understand
            users, solve problems and build great products.
          </p> */}
        </div>
        <div className="Skills__Content__Block">
          <h1 className="Skills__Content__Block__Title">Piano</h1>
          <p className="Skills__Content__Block__Detail">
            Working at Facebook has taught me a lot about how to understand
            users, solve problems and build great products.
          </p>
        </div>
        <div className="Skills__Content__Block">
          <h1 className="Skills__Content__Block__Title">Programming</h1>
          <p className="Skills__Content__Block__Detail">
            Working at Facebook has taught me a lot about how to understand
            users, solve problems and build great products.
          </p>
        </div>
        <div className="Skills__Content__Block">
          <h1 className="Skills__Content__Block__Title"></h1>
          <p className="Skills__Content__Block__Detail">
            Working at Facebook has taught me a lot about how to understand
            users, solve problems and build great products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
