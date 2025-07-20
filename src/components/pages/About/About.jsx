import React from "react";
import { ABOUT } from "../Headers";
import scrolldown from "../../../assets/scroll-down.gif";
import AboutProfile from "./AboutProfile";
import AboutAside from "./AboutAside";
import { Link } from "react-router-dom";
import Skillset from "./Skillset";
import Project from "./Project";

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

        <div>
          <div className="my-5 py-5">
            <Skillset />
          </div>
        </div>

        <div>
          <div>
            <Project />
          </div>
        </div>

        {/* <div className="container">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <div className="col-12">
              <h2>Download Resume</h2>
              <div className="">
                <Link
                  to="/portfolio"
                  className="text-decoration-none btn btn-outline-dark px-5"
                >
                  NOW
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default About;
