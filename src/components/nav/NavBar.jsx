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
      className="bg-light shadow-sm mb-3 position-sticky top-0"
      style={{ zIndex: 1000 }}
    >
      <Container fluid className="px-3">
        <Link to="/" className="d-flex align-items-center">
          <img
            src={Logo}
            alt="Website Logo"
            className="ms-md-3"
            style={{ width: "75px", height: "75px" }}
          />
        </Link>

        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          onClick={handleShow}
        />

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={showOffcanvas}
          onHide={handleClose}
          scroll={true} // Optional to allow background scroll
          backdrop={true}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img src={Logo} alt="Offcanvas Logo" style={{ width: "50px" }} />
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="ms-auto d-flex fs-5 flex-column flex-md-row align-items-start align-items-md-center">
              {[
                { to: "/", label: "HOME" },
                { to: "/about", label: "ABOUT" },
                { to: "/service", label: "SERVICE" },
                { to: "/portfolio", label: "PORTFOLIO" },
                { to: "/contact", label: "CONTACT" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="nav-link px-md-3 py-2 text-dark fw-semibold text-uppercase"
                  style={{ letterSpacing: "0.05rem" }}
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
