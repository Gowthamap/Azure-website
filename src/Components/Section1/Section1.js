import React from "react";
import Button from "../Button/Button";
import Largecard from "./Largecard";
import "./section1.scss";
import Smallcard from "./Smallcard";

let cardsDetails = [
  {
    title: "Watch Microsoft Ignite on demand",
    description:
      "See Azure announcements from the event, including new technologies to innovate across all your environments.",
    url: "https://azurecomcdn.azureedge.net/cvt-79947b3d66cccad1a6c038c94cfadefd65ec87adbe3437b4a621036a420c507b/images/page/home/watch-microsoft-ignite.png",
  },
  {
    title: "Innovate faster with open source on Azure",
    description:
      "Build, collaborate, and deploy seamlessly and more securely—in any environment—using your favorite languages and frameworks.",
    url: "https://azurecomcdn.azureedge.net/cvt-95ab15d78db3c26546f7e180150b07ff9648eba59f492db0907dc42adebcc1c0/images/page/home/innovate.png",
  },
];

function Section1() {
  return (
    <div className="section1">
      <h2>
        On-premises, hybrid, multicloud, or at the edge---create secure,
        future-ready cloud solutions on Azure
      </h2>
      <div className="cards">
        <Largecard />
        <div>
          {cardsDetails.map((card) => (
            <Smallcard card={card} />
          ))}
        </div>
      </div>
      <div className="button">
        <h6>New to Azure?</h6>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Section1;
