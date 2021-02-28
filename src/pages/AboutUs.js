import React from "react";
import AboutSection from "../components/AboutSection";
import AboutIntro from "../components/AboutIntro";
import EduCerts from "../components/EduCerts";
import WorkExp from "../components/WorkExp";
import ScrollTop from "../components/ScrollTop";
//framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <EduCerts />
      <WorkExp />

      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
