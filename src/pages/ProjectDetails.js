import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ProjectData } from "../projectData";
import { useHistory } from "react-router-dom";
//framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
//comps
import ScrollTop from "../components/ScrollTop";
//images
import githublogo from "../img/GitHubLogo.svg";
import liveapplogo from "../img/liveAppLogo.svg";

const ProjectDetails = () => {
  //currentUrl
  const history = useHistory();
  const url = history.location.pathname;
  //useStates
  const [projects, setProjects] = useState(ProjectData);
  const [project, setProject] = useState(projects[1]);
  //UseEffect
  console.log("outside useEffect");
  useEffect(() => {
    console.log("inside useEffect");
    const currentProject = projects.filter((p) => p.url === url);
    setProject(currentProject[0]);
  }, [projects, url]);

  const tagList = project.tags.map((tag) => (
    <li style={{ backgroundColor: tag.tagColour }}>
      <img src={tag.tagIcon} alt="icon" />
      {tag.tagname}
    </li>
  ));

  return (
    <>
      {project && (
        <ProjectContainer
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <div className="project">
            <div className="heading">
              <h1>{project.projectName}</h1>
              <div className="liveLinks">
                <div className="liveLinkItem">
                  <img src={githublogo} alt="githublogo" />
                </div>
                <div className="liveLinkItem">
                  <img src={liveapplogo} alt="liveapplogo" />
                </div>
              </div>
            </div>

            <div className="main-img">
              <img src={project.projectImg} alt="projectimg" />
            </div>
            <ul>{tagList}</ul>
            <p>{project.extendDescription}</p>
          </div>
        </ProjectContainer>
      )}
    </>
  );
};

const ProjectContainer = styled(motion.div)`
  padding-top: 2rem;
  font-family: Montserrat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .project {
    width: 80vw;
    p {
      text-align: center;
    }
  }

  .heading {
    height: 5rem;
    padding-right: 3rem;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    color: white;
    margin: 2rem;
  }

  .liveLinks {
    display: flex;
    justify-content: center;
  }
  .liveLinkItem {
    margin-left: 1rem;
    width: 75px;
    height: 75px;
    background-color: black;
    border-radius: 360px;
    display: flex;
    justify-content: center;
    img {
      width: 60%;
    }
  }

  .main-img {
    max-height: 50vh;
    border-radius: 15px;
    margin: 0rem;

    overflow: hidden;
    border-style: solid;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 90%;
      object-fit: cover;
    }
  }

  ul {
    list-style-type: none;
    height: 10rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 4rem;
    width: 12rem;
    padding: 1rem;
    margin: 1rem;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    img {
      height: 100%;
      margin-right: 0.5rem;
    }
  }

  @media (max-width: 1700px) {
    .liveLinks {
      display: flex;
      justify-content: center;
    }
    .liveLinkItem {
      margin-left: 1rem;
      width: 50px;
      height: 50px;
      background-color: black;
      border-radius: 360px;
      display: flex;
      justify-content: center;
      img {
        width: 50%;
      }
    }
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export default ProjectDetails;
