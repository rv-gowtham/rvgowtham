import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <Navbar
      expand="md"
      className="bg-body-tertiary mb-3 position-sticky top-0"
      style={{ zIndex: "1000" }}
    >
      <Container fluid>
        <div className="ms-0 ms-md-3">
          <Link to="/">
            <img
              className="ms-0 ms-md-4"
              src={Logo}
              alt="Logo"
              style={{ width: "75px", height: "75px" }}
            />
          </Link>
        </div>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          show={showOffcanvas}
          onHide={handleClose}
          placement="end"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img src={Logo} alt="Logo" style={{ width: "50px" }} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {[
                { to: "/", label: "HOME" },
                { to: "/about", label: "ABOUT" },
                { to: "/service", label: "SERVICE" },
                { to: "/portfolio", label: "PORTFOLIO" },
                { to: "/contact", label: "CONTACT" },
              ].map((link) => (
                <Link
                  key={link.to}
                  className="text-decoration-none fs-5 text-dark fw-semibold px-3"
                  to={link.to}
                  style={{ letterSpacing: "0.1cm" }}
                  onClick={handleClose}
                >
                  {link.label}
                </Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
