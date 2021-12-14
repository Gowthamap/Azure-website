import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "../Button/Button";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="header-des">
        <a href="https://azure.microsoft.com/en-in/solutions/covid-19/">
          We are in this together. Explore Azure resourced and tools to help you
          navigate COVID-19
        </a>
        <MdKeyboardArrowRight />
      </div>
      <div className="home">
        <div className="home-section">
          <h3>INVENT WITH PURPOSE</h3>
          <h2>
            Azure. The cloud for space <br /> stations, startups, and <br />
            everything in between.
          </h2>
          <p>
            Create next-generation solutions and deploy them anywhere—on or off
            the planet. Get started with an <br /> Azure free account, 12 months
            of popular services free, and a $200 credit.
          </p>
          <Button />
        </div>
      </div>
    </>
  );
}

export default Home;
