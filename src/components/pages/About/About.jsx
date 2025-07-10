import React from "react";
import { ABOUT } from "../Headers";
import scrolldown from "../../../assets/scroll-down.gif";
import AboutProfile from "./AboutProfile";
import AboutAside from "./AboutAside";

const About = () => {
  return (
    <>
      <div>
        <div className="about d-flex justify-content-center">
          <ABOUT />
        </div>

        <div className="d-flex flex-column my-5 align-items-center justify-content-center">
          <img src={scrolldown} className="col-1" alt="" />
        </div>

        <div className="col-12 d-flex flex-column flex-md-row ">
          <div className="col-12 col-md-6">
            <AboutProfile />
          </div>
          <div className="col-12 col-md-6">
            <AboutAside />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
