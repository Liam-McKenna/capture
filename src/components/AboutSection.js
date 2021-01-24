import React from "react";
import home1 from "../img/home1.png";

//change name to <Liam McKenna  />
const AboutSection = () => {
  return (
    <div className="about-AboutSection">
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Liam McKenna</h2>
          </div>
          <div className="hide">
            <h2>
              A Design <span>&</span> Development
            </h2>
          </div>
          <div className="hide">
            <h2>Portfolio</h2>
          </div>
        </div>
        <p>
          MERN full stack developer based in Dublin. Degree in Information
          Systems encompassing Software Engineering, Machine Learning, Web
          Applications, Databases and Cloud Systems
        </p>
        <button>Contact Me</button>
      </div>
      <img src={home1} alt="ProfilePhoto" /> //change to picture of me&Logo
    </div>
  );
};

export default AboutSection;
