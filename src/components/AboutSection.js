import React from "react";
import home1 from "../img/home1.png";
//Styled
import { About, Description, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

import styled from "styled-components";

//change name to <Liam McKenna  />
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>{"<Liam McKenna />"}</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              A Design <span>&</span> Development
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Portfolio</motion.h2>
          </Hide>
        </motion.div>
        <motion.p className="aboutTxt" variants={fade}>
          Full stack developer based in Dublin. Degree in Information Systems
          encompassing Software Engineering Web Applications, Databases, Machine
          Learning, and Cloud Systems
        </motion.p>
        <div className="introButtons">
          <motion.a
            className="phoneCall"
            href="tel:+1800229933"
            variants={fade}
          >
            Projects
          </motion.a>
          <motion.a
            className="phoneCall"
            href="tel:+1800229933"
            variants={fade}
          >
            Download Resume
          </motion.a>
          <motion.a
            className="phoneCall"
            href="mailto:liam@zendesign@gmail.com"
            variants={fade}
          >
            Contact
          </motion.a>
        </div>
      </Description>

      <IntroBio variants={photoAnim} src={home1} alt="ProfilePhoto">
        <div className="bioContainer">
          <p className="cardText">
            TECH STACK<br></br> {"{ "}
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp; Frontend: [Javascript, ReactJS],
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp; Backend: [MongoDB, Express, Node, NextJS,
            Firebase],
            <br></br>
            {" }"}
          </p>
          <div className="card"></div>

          <div className="cardContainer">
            <div className="circleFlex">
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
            </div>
          </div>
        </div>
      </IntroBio>
      {/* <Wave /> */}
    </About>
  );
};

const IntroBio = styled(motion.div)`
  width: 781px;
  height: 555px;

  .cardText {
    z-index: 3;
    position: absolute;
    margin: 2rem 4rem;
  }

  .card {
    z-index: 2;
    position: absolute;
    width: 640px;
    height: 400px;
    background: linear-gradient(
      114.73deg,
      rgba(255, 255, 255, 0.4) 4.49%,
      rgba(255, 255, 255, 0) 104.85%
    );
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(40px);
    border-radius: 40px;
    transition: all 500ms ease;
    //border: 0.1px solid;
  }
  .cardContainer {
    z-index: 1;
    position: absolute;
    width: 640px;
    height: 400px;
    border-radius: 40px;
    transition: all 500ms ease;
    //border: 0.1px solid;
  }

  .circle1 {
    border-radius: 400px;
    position: absolute;
    top: -7rem;
    right: -7rem;
    width: 295px;
    height: 295px;
    background: radial-gradient(
      92.2% 92.2% at 7.8% 100%,
      #0051ff 0.34%,
      #ff0054 100%
    );
    transition: all 500ms ease;
  }
  .circle2 {
    border-radius: 400px;
    position: absolute;
    top: -5rem;
    left: 3rem;
    width: 161px;
    height: 161px;
    background: linear-gradient(
      150.63deg,
      #ff0054 15.21%,
      rgba(0, 81, 255, 0.52) 92.4%,
      rgba(0, 81, 255, 0.9) 92.4%
    );
    transition: all 500ms ease;
  }
  .circle3 {
    border-radius: 400px;
    position: absolute;
    bottom: -4rem;
    left: -1rem;
    width: 109px;
    height: 109px;
    background: linear-gradient(
      208.74deg,
      #ff0054 13.69%,
      rgba(0, 81, 255, 0) 85.36%
    );
    transition: all 500ms ease;
  }

  @media (max-width: 1300px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 500ms ease;

    .cardContainer {
      width: 100%;
    }

    .bioContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 500px;
      height: 500px;
      transition: all 300ms ease;
    }

    .cardText {
      text-align: left;
    }
  }
  @media (max-width: 800px) {
    .card {
      width: 440px;
      height: 300px;
      transition: all 500ms ease;
    }

    .circle1 {
      top: -4rem;
      right: 1rem;
      width: 195px;
      height: 195px;
      transition: all 500ms ease;
    }
    .circle2 {
      top: -1rem;
      left: 6rem;
      width: 101px;
      height: 101px;
      transition: all 500ms ease;
    }
    .circle3 {
      bottom: -2rem;
      left: 14rem;
      width: 100px;
      height: 100px;
      transition: all 500ms ease;
    }
  }
  @media (max-width: 600px) {
    .card {
      width: 360px;
      height: 200px;
      transition: all 500ms ease;
    }

    .circle1 {
      top: 7rem;
      right: 4rem;
      width: 105px;
      height: 105px;
      transition: all 500ms ease;
    }
    .circle2 {
      top: 5rem;
      left: 10rem;
      width: 71px;
      height: 71px;
      transition: all 500ms ease;
    }
    .circle3 {
      bottom: 5rem;
      left: 24rem;
      width: 100px;
      height: 100px;
      transition: all 500ms ease;
    }
  }
`;

export default AboutSection;
