import React from "react";
import project1 from "../img/projectthumbnail1.PNG";
import styled from "styled-components";

const ProjectTile = ({ projectDetails }) => {
  const tagList = projectDetails.tags.map((tag) => (
    <li style={{ backgroundColor: tag.tagColour }}>{tag.tagname}</li>
  ));

  return (
    <TileContainer>
      <div className="card">
        <div className="cardDetails">
          <img src={projectDetails.projectImg} alt="projectImg" />
          <h1>{projectDetails.projectName}</h1>
          <p>{projectDetails.projectDescription}</p>
          <ul>{tagList}</ul>
        </div>
      </div>
    </TileContainer>
  );
};

const TileContainer = styled.div`
  font-family: Montserrat;
  width: 490px;
  height: 384px;
  margin: 2rem;

  .cardDetails {
    z-index: 3;
    position: absolute;
    margin: 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      width: 100%;
      border-radius: 15px;
    }
    h1 {
      margin-top: 1rem;
      color: white;
      font-size: 20px;
    }
    p {
      font-size: 12px;
      padding: 0.5rem 0rem;
      color: #b2becd;
    }
    ul {
      margin: 0.7rem;
    }
    ul li {
      font-size: 12px;
      display: inline;
      margin: 0.3rem;
      padding: 0.3rem 1rem;
      border-radius: 360px;
      font-weight: bold;
      color: white;
    }
  }

  .card {
    z-index: 2;
    position: absolute;
    width: 490px;
    height: 384px;
    background: linear-gradient(
      114.73deg,
      rgba(255, 255, 255, 0.4) 4.49%,
      rgba(255, 255, 255, 0) 104.85%
    );
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
    border-radius: 15px;
    transition: all 500ms ease;
    //border: 0.1px solid;
  }
`;

export default ProjectTile;
