import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      expand="md"
      className="bg-body-tertiary mb-3 position-sticky top-0 "
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
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img src={Logo} alt="Logo" style={{ width: "50px" }} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link
                className="text-decoration-none fs-5 text-dark fw-semibold px-3"
                to="/"
                style={{ letterSpacing: "0.1cm" }}
              >
                HOME
              </Link>
              <Link
                className="text-decoration-none fs-5 text-dark fw-semibold px-3"
                to="/about"
                style={{ letterSpacing: "0.1cm" }}
              >
                ABOUT
              </Link>
              <Link
                className="text-decoration-none fs-5 text-dark fw-semibold px-3"
                to="/service"
                style={{ letterSpacing: "0.1cm" }}
              >
                SERVICE
              </Link>
              <Link
                className="text-decoration-none fs-5 text-dark fw-semibold px-3"
                to="/portfolio"
                style={{ letterSpacing: "0.1cm" }}
              >
                PORTFOLIO
              </Link>
              <Link
                className="text-decoration-none fs-5 text-dark fw-semibold px-3"
                to="/contact"
                style={{ letterSpacing: "0.1cm" }}
              >
                CONTACT
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
