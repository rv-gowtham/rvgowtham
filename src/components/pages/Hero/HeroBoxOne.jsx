import React from "react";
import { Link } from "react-router-dom";
import Resume from "../../../assets/rvgowtham.pdf";

const HeroBoxOne = () => {
  return (
    <>
      <div className="mt-5 mx-2 ms-md-5">
        <div className="mt-5 ms-0 ms-md-3">
          <div className="hero_aside d-flex flex-column">
            <h3 className="hero_hello display-3 fw-normal">
              HELLO<span>_____________</span>
            </h3>
            <div className="w-100">
              <h1 className="hero_name display-2 fw-normal">
                I AM
                <span
                  className="display-1 w-100 m-0 d-flex"
                  style={{ fontWeight: "900" }}
                >
                  RV GOWTHAM
                </span>
              </h1>
            </div>
            <h5 className="hero_namedown d-flex w-100 flex-row flex-nowrap fs-3">
              I'M A<span className="hero_animation fs-2">WEB DEVELOPER</span>
            </h5>

            <div className="hero_btn d-flex gap-3 pt-4 align-items-center">
              <div>
                <Link to="/about">
                  <button className="herobtn1 fs-4 border px-3 py-1 rounded-2">
                    KNOW MORE
                  </button>
                </Link>
              </div>
              <div className="m-0 p-0">
                <Link
                  to="/portfolio"
                  className="herobtn2 border fs-4 px-2 py-2 rounded-2 text-decoration-none"
                  href=""
                >
                  GET CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBoxOne;
