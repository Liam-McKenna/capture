import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title={"How Do I Start?"}>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              voluptatibus aspernatur illum sapiente labore necessitatibus, aut
              eum id obcaecati, maiores magnam a sequi provident vero sint iusto
              autem nostrum quibusdam?
            </p>
          </div>
        </Toggle>

        <Toggle title={"daily schedule"}>
          <div className="answer">
            <p layout>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              voluptatibus aspernatur illum sapiente labore necessitatibus, aut
              eum id obcaecati, maiores magnam a sequi provident vero sint iusto
              autem nostrum quibusdam?
            </p>
          </div>
        </Toggle>

        <Toggle title={"Payment Methods"}>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              voluptatibus aspernatur illum sapiente labore necessitatibus, aut
              eum id obcaecati, maiores magnam a sequi provident vero sint iusto
              autem nostrum quibusdam?
            </p>
          </div>
        </Toggle>

        <Toggle title={"What Products Do you offer"}>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              voluptatibus aspernatur illum sapiente labore necessitatibus, aut
              eum id obcaecati, maiores magnam a sequi provident vero sint iusto
              autem nostrum quibusdam?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
