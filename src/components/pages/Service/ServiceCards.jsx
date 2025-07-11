import React from "react";
import websesignimg from "../../../assets/webdesigning.png";
import UiUx from "../../../assets/uiuxdesigning.png";
import webdeveloping from "../../../assets/webdeveloping.png";

const ServiceCards = () => {
  const Service = [
    {
      img: webdeveloping,
      servicename: "WEB DEVELOPER",
      discription:
        " Building fast, responsive, and modern websites for seamless user experience",
    },
    {
      img: UiUx,
      servicename: "UiUx",
      discription:
        "Designing intuitive, user-friendly interfaces that enhance brand identity.",
    },
    {
      img: websesignimg,
      servicename: "WEBSITE REVAMP",
      discription:
        "Upgrading outdated sites with better design, functionality, and performance.",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between flex-column flex-md-row align-items-center gap-5 mt-5 mb-2 pt-5 pb-2">
          {Service.map((serviceData, index) => (
            <div
              className="serviceCard rounded-2 d-flex flex-column align-items-center row-gap-4 p-5"
              key={index}
              style={{ maxWidth: "300px" }}
            >
              <div className="d-flex justify-content-center">
                <img src={serviceData.img} style={{ width: "75px" }} alt="" />
              </div>
              <div className="d-flex justify-content-center text-center fs-5 fw-bold pt-4">
                {serviceData.servicename}
              </div>
              <div className=" text-center">{serviceData.discription}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceCards;
