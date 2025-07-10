import React from "react";
import Heroimg from "../../../assets/heroimg.png";

const HeroBoxTwo = () => {
  return (
    <>
      <div>
        <div className="w-100 d-none d-md-block overflow-x-hidden">
          <img
            className="p-0 p-md-5"
            src={Heroimg}
            style={{ maxWidth: "900px" }}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HeroBoxTwo;
