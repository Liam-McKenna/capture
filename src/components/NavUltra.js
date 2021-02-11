import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../img/lmklogo.svg";

const NavUltra = () => {
  const { pathname } = useLocation();
  return (
    <NavUltraContainer>
      <div className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <Link to="/" className="navlink">
              <span className="link-text">LiamMK</span>

              <img src={logo} alt="logo" />
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/" className="navlink">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="address-card"
                className="svg-inline--fa fa-address-card fa-w-18"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"
                ></path>
              </svg>
              <span className="link-text">About</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/work" className="navlink">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="project-diagram"
                className="svg-inline--fa fa-project-diagram fa-w-20"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"
                ></path>
              </svg>
              <span className="link-text">Projects</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="navlink">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone"
                className="svg-inline--fa fa-phone fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                ></path>
              </svg>
              <span className="link-text">Contact</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="navlink">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="cog"
                className="svg-inline--fa fa-cog fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                ></path>
              </svg>
              <span className="link-text">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </NavUltraContainer>
  );
};

//CSS variables
const cssVar = {
  textPrimary: "#b6b6b6",
  textSecondary: "#ececec",
  highlight: "#D9235A",
  bgPrimary: "#0F1113",
  bgSecondary: "#141418",
  transitionSpeed: "600ms ease",
};

const NavUltraContainer = styled.div`
  z-index: 10;
  position: fixed;
  background-color: ${cssVar.bgPrimary};

  .navbar {
    transition: all 200ms ease;
  }

  .navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    transition: all 200ms ease;
  }
  .navbar:hover .logo img {
    transition: all 600ms ease;
    transform: rotate(180deg);
  }
  .nav-item {
    width: 100%;
  }
  /* .nav-item:last-child {
    margin-top: auto;
  } */

  .navlink {
    display: flex;
    align-items: center;
    height: 5rem;
    color: ${cssVar.textPrimary};
    text-decoration: none;
    filter: grayscale(100%) opacity(0.7);
    transition: ${cssVar.transitionSpeed};
  }

  .link-text {
    display: none;
    margin-left: 1rem;
    overflow: hidden;
  }

  .navlink svg {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
  }
  .navlink img {
    width: 3rem;
    min-width: 3rem;
    margin: 0 1rem;
  }

  .navlink:hover {
    filter: grayscale(0%) opacity(1);
    color: ${cssVar.highlight};
    transition: ${cssVar.transitionSpeed};
    background-color: ${cssVar.bgSecondary};
  }

  .logo {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    color: ${cssVar.textSecondary};
    background: ${cssVar.bgSecondary};
    width: 100%;
    font-size: 1.5rem;
    letter-spacing: 0.3ch;
  }

  .logo svg {
    transform: rotate(0deg);
    transition: transform 200ms;
  }

  /* small screen */
  @media only screen and (max-width: 600px) {
    .navbar {
      bottom: 0;
      width: 100vw;
      height: 5rem;
    }
    .logo {
      display: none;
    }
    .navbar-nav {
      flex-direction: row;
    }
    .nav-link {
      justify-content: center;
    }

    main {
      margin-left: 0rem;
      padding: 1rem;
    }
  }
  /* large screen */
  @media only screen and (min-width: 600px) {
    .navbar {
      top: 0;
      width: 5rem;
      height: 100vh;
    }
    .navbar:hover {
      width: 16rem;
    }

    .navbar:hover .link-text {
      display: block;
    }
  }

  @media only screen and (max-width: 600px) {
    bottom: 0;
  }
`;

export default NavUltra;
