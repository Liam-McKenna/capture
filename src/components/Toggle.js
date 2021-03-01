import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import moreicon from "../img/more-icon.svg";

const Toggle = ({ children, title, timeframe }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title} </motion.h4>
      <motion.p layout>{timeframe}</motion.p>
      <SeeMore src={moreicon} alt="" />

      {toggle ? children : ""}

      <div className="faq-line"></div>
    </motion.div>
  );
};

const SeeMore = styled.img`
  width: 50px;
`;

export default Toggle;
