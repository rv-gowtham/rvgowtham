import React from "react";
import Heroimg from "../../../assets/heroimg.png";

const HeroBoxTwo = () => {
  return (
    <>
      <div className="">
        <div className="d-none d-md-block overflow-x-hidden">
          <img
            className="img-fluid p-0 p-md-5"
            src={Heroimg}
            style={{ maxWidth: "100%", height: "auto", maxHeight: "100%" }}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HeroBoxTwo;
