import React from "react";
//import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import college from "../img/collegeIcon.svg";
import moreicon from "../img/more-icon.svg";
import home2 from "../img/home2.png";

//styles
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

//Animations
import { scrollReveal } from "../animation";

//functions
import { useScroll } from "./useScroll";
import Toggle from "./Toggle";

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
        <div className="title">
          <img src={college} alt="" />
          <h2>
            Education <span>&</span> Certs
          </h2>
        </div>
        <Cards>
          <Card>
            <Toggle
              title={"Information Technology"}
              timeframe={"Honours Degree / 2018-2022"}
            >
              <p>
                1:1 higher honours degree in Information Systems and Information
                Technology at Technology University Dublin encompassing Software
                Engineering Web Applications, Databases, Machine Learning, and
                Cloud Systems.
              </p>
            </Toggle>
          </Card>

          <Card>
            <Toggle
              title={"Software Development"}
              timeframe={"Lvl 5 Certificate / 2017-2018 "}
            >
              <p>
                1:1 FETAC Lvl 5 Certificate in Software Development at Crumlin
                College encompassing Web Dev Computer Mathamatics and Software
                Development
              </p>
            </Toggle>
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
    padding: 0rem 0rem 0rem 0rem;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 8rem;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  @media (max-width: 1300px) {
    justify-content: space-around;
  }
`;

const Card = styled.div`
  margin: 2rem;
  flex-basis: 25rem;
  justify-content: center;
  justify-content: space-around;

  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;

export default EduCerts;
