import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import man1 from "../../../assets/man1.jpg";
import man2 from "../../../assets/man2.jpg";
import women1 from "../../../assets/women1.jpg";
import women2 from "../../../assets/women2.jpg";

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 display-5 fw-bold pt-3">
        CLIENT SAY ABOUT ME
      </h2>
      <div className="col-12 d-flex justify-content-center ">
        <p className="text-center " style={{ width: "500px" }}>
          "I don’t just build websites — I translate vision into experience.
          Pixels follow intention, and every line of code carries purpose."
        </p>
      </div>

      <h5 className="text-center">#dummy</h5>
      <div className="slider-container pt-5" style={{ margin: "0 auto" }}>
        <Slider {...settings}>
          <div className="col-12 p-3">
            <div className="col-12 p-3 border rounded-4 d-flex flex-column flex-md-row">
              <div className="col-12 col-md-4">
                <img
                  src={women1}
                  className="rounded-3 col-12"
                  style={{ maxHeight: "166px" }}
                  alt=""
                />
              </div>
              <div className="ps-0 ps-md-3 mt-3 mt-md-0 col-12 col-md-8">
                <h2>Nikhil Arora</h2>
                <p>
                  "The design feels instinctive, like it recognizes you — clean
                  yet expressive, minimal but rich with meaning. Every detail
                  speaks with quiet, deliberate beauty."
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 p-3">
            <div className="col-12 p-3 border rounded-4 d-flex flex-column flex-md-row">
              <div className="col-12 col-md-4">
                <img
                  src={man1}
                  className="rounded-3 col-12 "
                  style={{ maxHight: "166px" }}
                  alt=""
                />
              </div>
              <div className=" ps-0 ps-md-3 pt-3 pt-md-0 col-12 col-md-8">
                <h2>Jade Wiliam</h2>
                <p className="m-0 text-break">
                  "We asked for function, but he gave us elegance — React
                  shaping the front, Mongo grounding the back. Swift, seamless,
                  and beautifully engineered throughout."
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 p-3">
            <div className="col-12 p-3 border rounded-4 d-flex flex-wrap flex-column flex-md-row">
              <div className="col-12 col-md-4">
                <img
                  className="rounded-3 col-12"
                  src={women2}
                  style={{ maxHeight: "166px" }}
                  alt=""
                />
              </div>
              <div className="ps-0 mt-3 mt-md-0 ps-md-3 col-12  col-md-8">
                <h2>Lana Roy</h2>
                <p>
                  "He listens with a designer’s intuition, builds with a
                  developer’s precision, and delivers with the reliability of a
                  true creative partner."
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 p-3">
            <div className="col-12 p-3 border rounded-4 d-flex flex-wrap flex-column flex-md-row">
              <div className="col-12 col-md-4">
                <img
                  className="rounded-3 col-12"
                  src={man2}
                  style={{ maxHeight: "166px" }}
                  alt=""
                />
              </div>
              <div className="ps-0 mt-3 mt-md-0 ps-md-3 col-12  col-md-8">
                <h2>Aditya Menon</h2>
                <p className="m-0">
                  "It wasn’t merely a redesign — it was a rebirth. The brand
                  breathed anew, and both our clients and conversions awakened
                  to its presence."
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
