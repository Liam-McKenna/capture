import React from "react";
import home1 from "../img/home1.png";
//Styled
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

//change name to <Liam McKenna  />
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Liam McKenna</motion.h2>
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
        <motion.p variants={fade}>
          MERN full stack developer based in Dublin. Degree in Information
          Systems encompassing Software Engineering, Machine Learning, Web
          Applications, Databases and Cloud Systems
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </Description>

      <Image>
        <motion.img variants={photoAnim} src={home1} alt="ProfilePhoto" />{" "}
        {/*change to picture of me&Logo*/}
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
