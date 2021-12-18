import React from "react";
import "./Smallcard.scss";

function Smallcard({card}) {
    console.log(card)
  return (
    <div className="card2">
      <img src={card.url} alt="str" />
      <div className="headings">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
    </div>
  );
}

export default Smallcard;
