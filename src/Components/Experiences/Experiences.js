import { React } from "react";
import "./Experiences.scss";


const Experiences = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="grid-container">
      <div className="grid-item">
        <div
          className="modify"
          onClick={() => handleClick(
            "https://www.cbc.ca/news/canada/new-brunswick/garbage-collection-project-saint-john-1.6576693"
          )}
        >
          <p style={{ marginBottom: "-1rem" }}>Experiences</p>
          <h3>My Achievements in the past 3 years</h3>
        </div>
        <div className="modifyd"></div>
        <div className="modifyd">Item 1</div>
        <div className="modifyd">Item 1</div>
      </div>
      <div className="grid-item">
        <div className="modifyd">Item 1</div>
        <div className="modifyd">Item 1</div>
        <div className="modifyd">Item 1</div>
        <div className="modifyd">Item 1</div>
      </div>
    </div>
  );
};

export default Experiences;
