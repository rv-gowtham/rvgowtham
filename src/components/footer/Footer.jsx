import React from "react";
import logo from "../../assets/icon.png";
import { Link } from "react-router-dom";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import gitHub from "../../assets/github.png";

const Footer = () => {
  const CurrentYear = new Date().getFullYear();

  return (
    <>
      <div className="mt-5 text-light" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="py-5">
          <div className=" col-12 col-md-3 d-flex flex-column flex-md-row">
            {/* footer segment one */}

            <div className=" col-12 d-flex flex-column align-items-center">
              <div className=" w-25">
                <Link to="/">
                  <img
                    src={logo}
                    alt="logo"
                    style={{ width: "100px", height: "100px" }}
                  />
                </Link>
              </div>
              <div className="d-flex flex-column align-items-center mt-3">
                <p className="text-center w-75">
                  "I am a web developer focused on creating innovative,
                  user-friendly solutions that empower designers and
                  businesses."
                </p>
              </div>
            </div>
            {/* footer segment one end */}

            {/* footer segment two */}

            <div className="col-12 mt-5">
              <div className="mt-5">
                <h3 className="d-flex flex-column align-items-center">
                  NAVIGATION
                </h3>
              </div>
              <div className=" d-flex flex-column align-items-center gap-3">
                <Link className="text-decoration-none text-light " to="/">
                  HOME
                </Link>
                <Link className="text-decoration-none text-light" to="/about">
                  ABOUT
                </Link>
                <Link className="text-decoration-none text-light" to="/service">
                  SERVICE
                </Link>
                <Link
                  className="text-decoration-none text-light"
                  to="/portfolio"
                >
                  PORTFOLIO
                </Link>
                <Link className="text-decoration-none text-light" to="/contact">
                  CONTACT
                </Link>
              </div>
            </div>
            {/* footer segment two end */}

            {/* footer segment three */}

            <div className=" col-12 mt-5">
              <div className="mt-5">
                <div className="">
                  <h3 className="d-flex flex-column align-items-center">
                    CONTACT INFO
                  </h3>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <p>Chennai,Tambaram</p>
                  <p>+91 6382523753</p>
                  <p>rvgowtham6@gmail.com</p>
                </div>
              </div>
            </div>
            {/* footer segment three end */}

            {/* footer segment four start */}
            <div className="col-12 mt-5 d-flex align-items-center justify-content-center">
              <div className=" d-flex flex-column align-items-center">
                <div className="">
                  <h3>DISCOVER</h3>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <p>Help</p>
                  <Link
                    to="/contact"
                    className="text-decoration-none text-light"
                  >
                    <p>Contact Us</p>
                  </Link>
                  <div className="d-flex justify-content-around flex-column  gap-3 row-gap-3">
                    <div className="d-flex flex-column align-items-center justify-content-center flex-md-row gap-3">
                      <a
                        href="https://www.linkedin.com/in/rv-gowtham-44900a27b/"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={linkedin}
                          alt="linkedin-logo"
                          style={{ width: "30px", height: "30px" }}
                        />
                      </a>

                      <a
                        href="https://github.com/rv-gowtham"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={gitHub}
                          alt="linkedin-logo"
                          style={{ width: "30px", height: "30px" }}
                        />
                      </a>
                    </div>
                    <div className="d-flex flex-column flex-md-row gap-3">
                      <a
                        href="https://www.instagram.com/_rvgowtham/"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={instagram}
                          alt="insta-logo"
                          style={{ width: "30px", height: "30px" }}
                        />
                      </a>

                      <a
                        href="https://www.facebook.com/profile.php?id=100045407825680"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={facebook}
                          alt="facebook-logo"
                          style={{ width: "30px", height: "30px" }}
                        />
                      </a>

                      <a
                        href="https://www.instagram.com/_rvgowtham/"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={twitter}
                          alt="twitter-logo"
                          style={{ width: "30px", height: "30px" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* footer segmet four end */}
          </div>
        </div>
        <div
          className=" col-12  d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "skyblue", height: "30px" }}
        >
          <p className="m-0">
            &copy;{CurrentYear} _rvgowtham, All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
