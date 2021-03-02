//Styled
import styled from "styled-components";
import { motion } from "framer-motion";

//Styled Components
export const About = styled(motion.div)`
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    min-height: 50vh;
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  .aboutTxt {
    padding: 3rem 0rem;
  }

  h2 {
    font-weight: lighter;
  }

  .projectsLink {
    display: flex;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;

    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
  .introButtons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
