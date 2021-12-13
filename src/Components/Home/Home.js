import React from "react";
import Button from "../Button/Button";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-section">
        <h3>INVENT WITH PURPOSE</h3>
        <h2>
          Azure. The cloud for space <br /> stations, startups, and <br />
          everything in between.
        </h2>
        <p>
          Create next-generation solutions and deploy them anywhere—on or off
          the planet. Get started with an <br /> Azure free account, 12 months of
          popular services free, and a $200 credit.
        </p>
        <Button />
      </div>
    </div>
  );
}

export default Home;
