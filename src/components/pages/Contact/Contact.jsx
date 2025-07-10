import React from "react";
import { CONTACT } from "../Headers";
import ContactInput from "../../functions/ContactInput";
import { IoHomeOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import scrolldown from "../../../assets/scroll-down.gif";

const Contact = () => {
  return (
    <>
      <div>
        <div className="contactbgc d-flex justify-content-center">
          <CONTACT />
        </div>

        <div className="d-flex flex-column my-5 align-items-center justify-content-center">
          <img src={scrolldown} className="col-1" alt="" />
        </div>

        <div className=" contact d-flex flex-column align-items-center justify-content-center flex-md-row flex-md-row mx-5 my-5">
          <div className=" col-12 col-md-4 ps-0 ps-md-5">
            <div className="">
              <div className="d-flex gap-5 justify-content-center justify-content-md-start">
                <IoHomeOutline className="display-6 d-none d-md-block" />
                <div className="d-flex flex-column  align-items-center align-items-md-start">
                  <h3>Tamil Nadu,India</h3>
                  <p>Rajapalayam, Virudhunagar</p>
                </div>
              </div>
              <div className="d-flex gap-5 justify-content-center justify-content-md-start">
                <IoCallOutline className="display-6 d-none d-md-block" />
                <div className="d-flex flex-column  align-items-center align-items-md-start">
                  <h3>+91 6382523753</h3>
                  <p>MON - FRI 9AM to 5PM</p>
                </div>
              </div>
              <div className="d-flex gap-5 justify-content-center justify-content-md-start">
                <CiMail className="display-6 d-none d-md-block" />
                <div className="d-flex flex-column  align-items-center align-items-md-start">
                  <h3 className="text-break">rvgowtham6@gmail.com</h3>
                  <p>Send your feedback anytime!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 pe-0 pe-md-5">
            <ContactInput />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
