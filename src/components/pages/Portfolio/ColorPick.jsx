import React, { useState } from "react";
import Resume from "./Resume";

const ColorPick = () => {
  const [pickColor, setPickColor] = useState("black");

  const Colors = ["#bf1d00", "#ffd33f", "#e91e63", "#a0b8ce", "#9b6ba9"];

  return (
    <>
      <div className="container">
        <div className="col-12 d-flex align-items-center justify-content-center">
          <div className="col-12 my-5">
            <div className="d-flex align-items-center justify-content-center">
              <h2 className="display-5 fw-bold my-3">Pick One</h2>
            </div>

            <div className="">
              <div className=" d-flex align-items-center justify-content-center gap-3 pb-0 pb-md-5">
                {Colors.map((colors, index) => (
                  <div
                    key={index}
                    onClick={() => setPickColor(colors)}
                    style={{
                      backgroundColor: colors,
                      width: "50px",
                      height: "50px",
                      border:
                        colors === pickColor
                          ? "3px solid black"
                          : "1px solid #fff ",
                      borderRadius: "25px",
                      cursor: "pointer",
                      transition: "0.3s",
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="col-12 col-12">
              <Resume pickColor={pickColor} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorPick;
