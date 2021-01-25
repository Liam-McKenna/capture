import React from "react";
import home1 from "../img/home1.png";
//Styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

//change name to <Liam McKenna  />
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Liam McKenna</h2>
          </Hide>
          <Hide>
            <h2>
              A Design <span>&</span> Development
            </h2>
          </Hide>
          <Hide>
            <h2>Portfolio</h2>
          </Hide>
        </div>
        <p>
          MERN full stack developer based in Dublin. Degree in Information
          Systems encompassing Software Engineering, Machine Learning, Web
          Applications, Databases and Cloud Systems
        </p>
        <button>Contact Me</button>
      </Description>

      <Image>
        <img src={home1} alt="ProfilePhoto" />{" "}
        {/*change to picture of me&Logo*/}
      </Image>
    </About>
  );
};

export default AboutSection;
