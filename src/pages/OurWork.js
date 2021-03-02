import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProjectData } from "../projectData";

//components
import ProjectTile from "../components/ProjectTile";

//images

//framer Motion & animations
import { motion } from "framer-motion";
import { pageAnimation, slider, sliderContainer } from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();

  const [projects, setProjects] = useState(ProjectData);
  console.log(projects.length);

  const ProjList = projects.map((proj) => (
    <Link to={proj.url}>
      <ProjectTile projectDetails={proj} />
    </Link>
  ));

  return (
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Flexcontainer>{ProjList}</Flexcontainer>

      {/* 
      <Movie>
        <motion.h2 variants={fade}>Project One</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>

      <Movie
        ref={element1}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Project Two</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>

      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Project Three</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie> */}

      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  transition: all 500ms ease;

  h2 {
    color: white;
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #ff0054;
  }
  img {
    width: 100%;
    height: 25vh;
    object-fit: cover;
  }
  margin: 2rem;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Flexcontainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 10%;
  top: 0%;
  width: 100%;
  height: 100vh;
  background: #ff0054;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #e00083;
`;
const Frame3 = styled(Frame1)`
  background: #c011c0;
`;
const Frame4 = styled(Frame1)`
  background: #6d1696;
`;

export default OurWork;
