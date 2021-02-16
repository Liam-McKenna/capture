import React from "react";
import AboutSection from "../components/AboutSection";
import AboutIntro from "../components/AboutIntro";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
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
      <ServicesSection />
      <FaqSection />

      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
