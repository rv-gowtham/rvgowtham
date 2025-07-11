import React from "react";
import HeroBoxOne from "./HeroBoxOne";
import HeroBoxTwo from "./HeroBoxTwo";
import GetInTouch from "../../functions/GetInTouch";
import AboutProfile from "../About/AboutProfile";
import ServiceCards from "../Service/ServiceCards";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className=" col-12 col-md-6 d-flex flex-column flex-md-row">
        <div className="col-12 p-2 mt-0 mt-md-5">
          <HeroBoxOne />
        </div>
        <div className="col-12 p-2">
          <HeroBoxTwo />
        </div>
      </div>

      <div className="col-12 mb-0 my-mb-5 pb-0 pb-md-5  d-flex flex-column align-items-center justify-content-center">
        <div className="col-12 col-md-7">
          <AboutProfile />
        </div>
        <div className=" d-flex justify-content-center">
          <Link to="/about">
            <button type="button" className="btn btn-outline-dark">
              KNOW MORE
            </button>
          </Link>
        </div>
      </div>

      <div className="my-0 my-md-5 py-0 py-md-5">
        <div>
          <ServiceCards />
        </div>
        <div className=" d-flex justify-content-center">
          <Link to="/service">
            <button type="button" className="btn btn-outline-dark">
              KNOW MORE
            </button>
          </Link>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center  justify-content-center my-5  py-5">
        <div className="">
          <h1 className="display-3 fw-bold">PORTFOLIO </h1>
        </div>
        <h4>PICK COLORS HERE</h4>
        <br />
        <div className=" d-flex justify-content-center">
          <Link to="/portfolio">
            <button type="button" className="btn btn-outline-dark">
              KNOW MORE
            </button>
          </Link>
        </div>
      </div>

      {/* <GetInTouch /> */}
    </>
  );
};

export default Hero;
