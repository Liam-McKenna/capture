import React from "react";
//import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

//styles
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

//Animations
import { scrollReveal } from "../animation";

//functions
import { useScroll } from "./useScroll";

const EduCerts = () => {
  const [element, controls] = useScroll();

  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          Education <span>&</span> Certs
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="Clock" />
              <h3>DIT Degree</h3>
            </div>
            <p>
              1:1 Honours degree in Information systems, Software Engineering,
              Machine Learning, Web Applications, Databases and Cloud Systems
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>React & Redux Course</h3>
            </div>
            <p>
              I know React like a boss and all the react stuff i learned lol
              more text for this part
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Python</h3>
            </div>
            <p>
              I'm a python OOP god with machine learning AI laser beams on
              sharks that are gonna take over the frickin' world
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Database</h3>
            </div>
            <p>
              If Big data and Jeff besoz had a baby and called it Elon Musk then
              my database skillz
            </p>
          </Card>
        </Cards>
      </Description>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: space-around;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default EduCerts;
