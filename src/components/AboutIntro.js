import React from "react";
//Styled
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import styled from "styled-components";

const AboutIntro = () => {
  return (
    <About>
      <Description></Description>
    </About>
  );
};

export default AboutIntro;
