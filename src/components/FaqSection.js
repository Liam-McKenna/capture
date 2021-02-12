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
        Work History <span>Experience</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle
          title={"SOFTWARE DEVELOPER : CloudTech"}
          timeframe={"DEC 2019 - AUG 2020."}
        >
          <div className="answer">
            <p>
              Main Duties: <br />
              <br />
              •Custom Software Solutions. •CRM Setup & Management. •Native & Web
              development. •Project Management & Documentation.
              <br />
              <br />
              Role Overview: My role involved the configuration of CRM platforms
              such as Zoho & Salesforce for clients in a range of industries
              from SME’s to Enterprise. Where needed I would develop custom
              software solutions to business problems ranging from cross-web API
              integration (JavaScript, deluge, XML, JSON, JAVA) to large data
              mapping and transfer applications in Python or C#. I worked with
              team projects where we developed applications available on CRM
              marketplaces such as integration connectors with external
              financial software. This role encompasses all stages of the
              development process including translating the client’s
              requirements to concept design, UML/ERD diagrams and
              documentation, version control setup, unit-test writing, the full
              development of the project, Graphic Designs/GUI are required,
              sandbox testing and live release.
            </p>
          </div>
        </Toggle>

        <Toggle
          title={"Senior IT Support analyst : Hewlett-Packard Enterprise/DXC"}
          timeframe={" - JUNE 2018 - DEC 19."}
        >
          <div className="answer">
            <p layout>
              Main Duties:
              <br />
              <br /> • Specialist IT support to first level agents. •resolving
              major issues with clients software and hardware.•Active Directory
              provisioning. •Coaching & mentorship of peers. •Control of
              Knowledge Base.
              <br />
              <br />
              Role Overview: Supporting all B2B IT issues and queries for St
              James Place Wealth Management, FTSE 100 listed company. This role
              has given me greater control over supporting software for the
              client including Active Directory provisioning (Distribution List
              provisioning, software, password resets) & Mobileiron access. I
              provide specialist support to the clients major IT issues aswell
              as mentorship of team members and control of the teams knowledge
              base. My responsibilities are dealt with in tight deadlines to
              ensure no financial penalties for both the client and the
              employers SLA.
            </p>
          </div>
        </Toggle>

        <Toggle
          title={"Audio Visual Technician. : SonicsAVI"}
          timeframe={" - AUG 2017 - JUNE 2018"}
        >
          <div className="answer">
            <p>
              Main Duties:
              <br />
              <br /> •Provide IT support to engineers.•First line of IT support
              to client.•Building comms racks. •Hardware install & setup.•face
              to face client support. •Cable crimping & running.
              <br />
              <br />
              Role Overview: Mostly consisted of setup of hardware to comms
              racks in corporate environments such as video network systems,
              digital signage software and assisting the engineers with
              installing network cables ( RJ45 over Cat6) Support was also
              provided to clients with SLA’s either remotely or on-site across
              Ireland & UK.
            </p>
          </div>
        </Toggle>

        <Toggle
          title={"GRAPHIC DESIGN & PRODUCTION MANAGER : Sin Nightclub"}
          timeframe={"MAY 2012 - AUG 2017"}
        >
          <div className="answer">
            <p>
              Main Duties:
              <br />
              <br />
              •Full creative control of the company.•Full Adobe Suite
              competence.•Start-to-finish design projects. •Budget setting and
              cash flow. •Club and event creation.•Promotion and marketing.
              <br />
              <br />
              Role Overview: •Entered business as marketeer, promoted to Media &
              Production Manager. •Successful marketing brought media following
              from 5000 to 225,000 followers •Most viewed nightclub in Ireland
              on social media during my involvement. •Revenue increase over 2x
              during my involvement.•Massively developed graphic design
              skills.•Successful creation of multiple brands for the venue.•Peek
              view ship of 95 million views weekly.
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
