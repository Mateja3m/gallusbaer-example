import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../img/LOGO-GALLUS-BAER-v2-01.png";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand className="d-lg-none">
          <img className="main-logo" src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex align-items-center">
            <Nav.Link className="immobilien links" as={Link} to="/">
              IMMOBILIEN
            </Nav.Link>
            <Nav.Link className="links" as={Link} to="/projekte">
              PROJEKTE
            </Nav.Link>
            <Nav.Link
              className="links d-sm-none d-md-block d-none"
              as={Link}
              to="/"
            >
              <img className="main-logo" src={Logo} alt="logo" />
            </Nav.Link>
            <Nav.Link className="links" as={Link} to="/uber">
              ÜBER UNS
            </Nav.Link>
            <Nav.Link className="links" as={Link} to="/losungen">
              LÖSUNGEN
            </Nav.Link>
            <Nav.Link className="links" as={Link} to="/kontakt">
              KONTAKT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
