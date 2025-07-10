import React from "react";
import { PORTFOLIO } from "../Headers";
import scrolldown from "../../../assets/scroll-down.gif";
import ColorPick from "./ColorPick";

const Portfolio = () => {
  return (
    <>
      <div>
        <div className="portfolio d-flex justify-content-center">
          <PORTFOLIO />
        </div>

        <div className="d-flex flex-column my-5 align-items-center justify-content-center">
          <img src={scrolldown} className="col-1" alt="" />
        </div>

        <div>
          <ColorPick />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
