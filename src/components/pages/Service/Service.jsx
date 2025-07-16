import React from "react";
import { SERVICE } from "../Headers";
import scrolldown from "../../../assets/scroll-down.gif";
import ServiceCards from "./ServiceCards";
import ServiceExplain from "./ServiceExplain";
import Clients from "./Clients";

const Service = () => {
  return (
    <>
      <div>
        <div className="service d-flex justify-content-center">
          <SERVICE />
        </div>
        <div className="my-5">
          <div className="d-flex flex-column my-5 align-items-center justify-content-center">
            <img src={scrolldown} className="col-1" alt="" />
          </div>

          <div className="my-5 py-5">
            <ServiceCards />
          </div>
        </div>
        <div>
          <div>
            <ServiceExplain />
          </div>
        </div>
        <div>
          <div>
            <Clients />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
