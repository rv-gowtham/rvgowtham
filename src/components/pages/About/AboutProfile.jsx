import React, { useEffect, useState } from "react";
import profileimg from "../../../assets/profileimg.png";
import profilesimg from "../../../assets/profile'simg.png";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { LuMessageCircle } from "react-icons/lu";
import { FaTelegramPlane } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaHandPointUp } from "react-icons/fa";

const AboutProfile = () => {
  // const [colors, setColor] = useState("#ffffff");

  // useEffect(() => {
  //   const getRandomColor = () => {
  //     const randomColor = `${Math.floor(Math.random() * 256)},${Math.floor(
  //       Math.random() * 256
  //     )},${Math.floor(Math.random() * 256)}`;
  //     return randomColor;
  //   };
  //   setColor(getRandomColor());
  // }, []);

  const [pickColor, setPickColor] = useState(false);

  const clickMe = () => {
    setPickColor((prev) => !prev);
  };

  return (
    <>
      <div className="d-flex align-item-center justify-content-center">
        <div className="col-12 col-md-10 d-flex justify-content-center">
          <div className="col-12 w-75 flex-column flex-md-row px-0  mb-5">
            <div
              className="col-12  d-flex pt-5 align-items-center justify-content-center mb-1"
              style={{
                marginTop: "100px",
                marginBottom: "100px",
                maxWidth: "500px",
              }}
            >
              <div className="col-9 col-md-7  border rounded-4">
                <div
                  className="col-12 d-flex justify-content-between text-light rounded-top-4 p-0 p-md-2 px-0 px-md-3"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  <div className="col-12 col-md-10 p-2 p-md-0 d-flex justify-content-start  align-items-center gap-1 gap-md-2">
                    <img
                      className="border rounded-5 p-1 "
                      src={profilesimg}
                      style={{ maxWidth: "50px", maxHeight: "50px" }}
                      alt=""
                    />
                    <p className="m-0  text-break" style={{ fontSize: ".7em" }}>
                      @_rvgowtham
                    </p>
                  </div>
                  <div className="col-2 p-2 d-none  d-md-block d-md-flex align-items-center  justify-content-end ">
                    <HiOutlineDotsHorizontal className="fs-3" />
                  </div>
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{ backgroundColor: "#ffd" }}
                >
                  <img
                    className="w-75"
                    src={profileimg}
                    style={{ maxHeight: "300px" }}
                    alt=""
                  />
                </div>

                <div
                  className="col-12 rounded-bottom-4 p-4 p-3 d-flex justify-content-between"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  <div className="col-11 d-flex gap-3 align-items-center">
                    <button
                      onClick={clickMe}
                      type="button"
                      style={{ background: "transparent" }}
                    >
                      <FaHeart
                        className="fw-bold fs-3"
                        style={{ color: pickColor ? "#e91e63" : "#ffffff" }}
                      />
                    </button>
                    <LuMessageCircle className="fw-bold text-light fs-3" />
                    <FaTelegramPlane className="fw-bold text-light fs-3" />
                  </div>
                  <div className="col-1">
                    <FaBookmark className="fw-bold text-light fs-4" />
                  </div>
                </div>
              </div>
            </div>

            {!pickColor && (
              <div className=" d-flex justify-content-center">
                <div
                  className=" border rounded-4 px-3 py-3 text-light d-flex text-center justify-content-center"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  <FaHandPointUp className="fs-4 me-4" />
                  Wanna Like the Profile ?
                </div>
              </div>
            )}

            {pickColor && (
              <div className="col-12 d-flex justify-content-center align-items-center">
                <div className="col-8">
                  <div className="p-4 border rounded-4 d-flex flex-column gap-3  justify-content-around  bg-dark">
                    <div className="text-light fs-3 d-flex justify-content-center align-items-center">
                      Follow Me On
                    </div>
                    <div className="d-flex justify-content-around align-items-center">
                      <a href="https://www.linkedin.com/in/rv-gowtham-44900a27b/">
                        <FaLinkedinIn className="fw-bold text-light fs-3" />
                      </a>
                      <a href="https://github.com/rv-gowtham">
                        <BsGithub className="fw-bold text-light fs-3" />
                      </a>
                      <a href="https://www.instagram.com/_rvgowtham/">
                        <FaInstagram className="fw-bold text-light fs-3" />
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=100045407825680">
                        <FaFacebookF className="fw-bold fs-4 text-light" />
                      </a>
                      <a href="">
                        <RiTwitterXLine className="fw-bold fs-4 text-light" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProfile;
