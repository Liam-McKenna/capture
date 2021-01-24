import React from "react";
//import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>Quality</span> Services
        </h2>
        <div className="cards">
          <div iv className="card">
            <div className="icon">
              <img src={clock} alt="Clock" />
              <h3>Efficient</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ea
              expedita, deserunt amet voluptates esse eveniet! Laudantium amet
              quaerat fugiat dolores recusandae, quidem ipsa cum numquam in. Id,
              animi adipisci.
            </p>
          </div>
          <div iv className="card">
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>teamwork</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ea
              expedita, deserunt amet voluptates esse eveniet! Laudantium amet
              quaerat fugiat dolores recusandae, quidem ipsa cum numquam in. Id,
              animi adipisci.
            </p>
          </div>
          <div iv className="card">
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>diaphragm</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ea
              expedita, deserunt amet voluptates esse eveniet! Laudantium amet
              quaerat fugiat dolores recusandae, quidem ipsa cum numquam in. Id,
              animi adipisci.
            </p>
          </div>
          <div iv className="card">
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ea
              expedita, deserunt amet voluptates esse eveniet! Laudantium amet
              quaerat fugiat dolores recusandae, quidem ipsa cum numquam in. Id,
              animi adipisci.
            </p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="home2" />
      </div>
    </div>
  );
};

export default ServicesSection;
