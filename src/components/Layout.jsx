import React from "react";
import Footer from "./footer/Footer";
import NavBar from "./nav/NavBar";

const Layout = ({ page }) => {
  return (
    <>
      <div>
        <NavBar />
        {page}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
