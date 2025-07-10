import React, { useState } from "react";
import lightning from "../../../assets/lightning.png";
import artbrush from "../../../assets/artbrush.png";
import brain from "../../../assets/brain.png";
import colorpalette from "../../../assets/colorpalette.png";
import idea from "../../../assets/idea.png";
import mobile from "../../../assets/mobile.png";
import recycle from "../../../assets/recycle.png";
import settings from "../../../assets/settings.png";
import shield from "../../../assets/shield.png";
import tool from "../../../assets/tool.png";
import mantree1 from "../../../assets/mantree1.png";
import mantree2 from "../../../assets/mantree.png";
import mantree3 from "../../../assets/mantreethree.png";

const ServiceExplain = () => {
  const [showmore, setShowMore] = useState({
    card1: false,
    card2: false,
    card3: false,
  });

  const onCardClick = (cardid) => {
    setShowMore((prev) => ({ ...prev, [cardid]: !prev[cardid] }));
  };

  return (
    <>
      <div className="container">
        <div className="">
          <div className="col-12 col-md-6 d-flex flex-column flex-md-row ">
            <div className="col-12 p-2   ">
              <img src={mantree1} className="w-100 rounded-4" alt="" />
            </div>
            <div className="col-12" style={{ marginTop: "90px" }}>
              <div>
                <h1 className="display-1 fw-bold">Web Developer</h1>
              </div>
              <div>
                <h4>
                  I build fast, responsive, and scalable web apps that turn
                  ideas into digital products.
                </h4>
              </div>

              {showmore.card1 && (
                <div>
                  <div>
                    <ul className="list-unstyled">
                      <li className="d-flex">
                        <div>
                          <img
                            src={lightning}
                            style={{
                              width: "30px",
                              height: "30px",
                              marginRight: "20px",
                            }}
                            alt=""
                          />
                        </div>
                        <div>
                          <strong>Speed & Performance - </strong> Optimized
                          loading times and smooth navigation
                        </div>
                      </li>
                      <li className="d-flex">
                        <div>
                          <img
                            src={mobile}
                            style={{
                              width: "30px",
                              height: "30px",
                              marginRight: "20px",
                            }}
                            alt=""
                          />
                        </div>
                        <div>
                          <strong>Responsive Design - </strong> Seamless user
                          experience across all devices
                        </div>
                      </li>
                      <li className="d-flex">
                        <div>
                          <img
                            src={tool}
                            style={{
                              width: "30px",
                              height: "30px",
                              marginRight: "20px",
                            }}
                            alt=""
                          />
                        </div>
                        <div>
                          <strong>Full-Stack Solutions - </strong> From
                          front-end interfaces to back-end architecture
                        </div>
                      </li>
                      <li className="d-flex">
                        <div>
                          <img
                            src={shield}
                            style={{
                              width: "30px",
                              height: "30px",
                              marginRight: "20px",
                            }}
                            alt=""
                          />
                        </div>
                        <div>
                          <strong>Secure & Scalable Code - </strong> Clean,
                          maintainable, and production-ready
                        </div>
                      </li>
                    </ul>
                    <div>
                      <p>
                        With real-world experience in UI/UX design, RESTful
                        APIs, and cloud integration, I aim to turn ideas into
                        impactful digital products.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className=" d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-outline-dark"
                  onClick={() => onCardClick("card1")}
                >
                  {showmore.card1 ? "SHOW LESS" : "SHOW MORE"}
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column flex-md-row  py-5 ">
            <div className="col-12 py-5" style={{ marginTop: "100px" }}>
              <div>
                <h1 className="display-1 fw-bold">UI/UX Designer</h1>
              </div>
              <div>
                <h4>
                  Designing Intuitive & Engaging Interfaces that Reflect Brand
                  Identity
                </h4>
              </div>

              {showmore.card2 && (
                <div>
                  <div>
                    <ul className="list-unstyled">
                      <li className="d-flex">
                        <div>
                          <img
                            src={brain}
                            style={{
                              width: "30px",
                              height: "30px",
                              marginRight: "20px",
                            }}
                            alt=""
                          />
                        </div>
                        <div>
                          <strong>User Research & Flow Mapping - </strong>{" "}
                          Understanding user behavior and crafting smooth
                          journeys
                        </div>
                      </li>
                      <li className="d-flex">
                        <div>
                          <img
                            src={artbrush}
                            style={{
                              width: "30px",
                              height: "30px",
                              marginRight: "20px",
                            }}
                            alt=""
                          />
                        </div>
                        <div>
                          <strong>Clean, Modern UI Design - </strong>{" "}
                          Consistent, brand-aligned visuals that captivate users
                        </div>
                      </li>
                      <li className="d-flex">
                        <div>
                          <img
                            src={mobile}
                            style={{
                              width: "30px",
                              height: "30px",
                              marginRight: "20px",
                            }}
                            alt=""
                          />
                        </div>
                        <div>
                          <strong>Responsive Layouts - </strong> Pixel-perfect
                          interfaces across all screen sizes
                        </div>
                      </li>
                      <li className="d-flex">
                        <div>
                          <img
                            src={recycle}
                            style={{
                              width: "30px",
                              height: "30px",
                              marginRight: "20px",
                            }}
                            alt=""
                          />
                        </div>
                        <div>
                          <strong>Rapid Prototyping & Wireframing </strong>{" "}
                          Figma, Adobe XD, and interactive mockups
                        </div>
                      </li>
                      <li className="d-flex">
                        <div>
                          <img
                            src={idea}
                            style={{
                              width: "30px",
                              height: "30px",
                              marginRight: "20px",
                            }}
                            alt=""
                          />
                        </div>
                        <div>
                          <strong>Usability & Accessibility </strong> Ensuring
                          every design is easy to use and inclusive
                        </div>
                      </li>
                    </ul>
                    <div>
                      <p>
                        I blend creativity with logic to build experiences that
                        delight users and drive results.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className=" d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-outline-dark"
                  onClick={() => onCardClick("card2")}
                >
                  {showmore.card2 ? "SHOW LESS" : "SHOW MORE"}
                </button>
              </div>
            </div>
            <div className="col-12 p-5   ">
              <img src={mantree2} className="w-100 rounded-4" alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column flex-md-row my-5 py-5">
            <div className="col-12 p-2   ">
              <img src={mantree3} className="w-100 border rounded-4" alt="" />
            </div>

            <div className="col-12  my-5 py-5">
              <div>
                <h1 className="display-1 fw-bold">Website Revamp Specialist</h1>
              </div>
              <div>
                <h4>
                  Transforming Outdated Websites into Modern, High-Performing
                  Platforms
                </h4>
              </div>

              {showmore.card3 && (
                <div>
                  <div>
                    <ul className="list-unstyled">
                      <li className="d-flex">
                        <div>
                          <img
                            src={colorpalette}
                            style={{
                              width: "30px",
                              height: "30px",
                              marginRight: "20px",
                            }}
                            alt=""
                          />
                        </div>
                        <div>
                          Visual Redesign – Fresh, modern layouts aligned with
                          current design trends
                        </div>
                      </li>
                      <li className="d-flex">
                        <div>
                          <img
                            src={settings}
                            style={{
                              width: "30px",
                              height: "30px",
                              marginRight: "20px",
                            }}
                            alt=""
                          />
                        </div>
                        <div>
                          <strong>Improved Functionality - </strong> Enhanced
                          navigation, forms, and interactive features
                        </div>
                      </li>
                      <li className="d-flex">
                        <div>
                          <img
                            src={lightning}
                            style={{
                              width: "30px",
                              height: "30px",
                              marginRight: "20px",
                            }}
                            alt=""
                          />
                        </div>
                        <div>
                          <strong>Performance Optimization – </strong> Faster
                          load times, better responsiveness, and SEO
                          improvements
                        </div>
                      </li>
                      <li className="d-flex">
                        <div>
                          <img
                            src={mobile}
                            style={{
                              width: "30px",
                              height: "30px",
                              marginRight: "20px",
                            }}
                            alt=""
                          />
                        </div>
                        <div>
                          <strong>Mobile-Friendly Updates –</strong> Fully
                          responsive design for all devices
                        </div>
                      </li>
                      <li className="d-flex">
                        <div>
                          <img
                            src={shield}
                            style={{
                              width: "30px",
                              height: "30px",
                              marginRight: "20px",
                            }}
                            alt=""
                          />
                        </div>
                        <div>
                          <strong>
                            Code Cleanup & Security Enhancements –{" "}
                          </strong>
                          Cleaner code, fewer bugs, and better security
                        </div>
                      </li>
                    </ul>
                    <div>
                      <p>
                        Whether it's a small tweak or a complete overhaul, I
                        ensure your website looks modern, runs smoothly, and
                        delivers a great user experience.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className=" d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-outline-dark"
                  onClick={() => onCardClick("card3")}
                >
                  {showmore.card3 ? "SHOW LESS" : "SHOW MORE"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceExplain;
