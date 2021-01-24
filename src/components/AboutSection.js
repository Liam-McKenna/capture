import React from "react";
import home1 from "../img/home1.png";
//Styled
import styled from "styled-components";

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

//Styled Components
const About = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
