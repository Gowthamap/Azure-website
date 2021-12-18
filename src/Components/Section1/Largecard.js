import React from "react";
import "./Largecard.scss";

function Largecard() {
  return (
    <div className="card">
      <img
        src="https://azurecomcdn.azureedge.net/cvt-d79d8f8bf21b702d5043e671743dfd9cede711e9b9c6288e0e6cb9b0b9c28d2c/images/page/home/manage.png"
        alt=""
      />
      <h3><a href="https://azure.microsoft.com/en-us/blog/new-satellite-connectivity-and-geospatial-capabilities-with-azure-space/"> Manage satellite data at cloud scale</a></h3>
        <p>Communicate with, and process data from satellites with Azure Orbital, a fully
            managed ground station service.
        </p>
    </div>
  );
}

export default Largecard;
