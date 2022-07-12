import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../img/LOGO-GALLUS-BAER-v2-01.png";

const Header = () => {
  return (
    <div className="nav">
      <hr className="header-line" size="3" />
      <Navbar collapseOnSelect bg="light" variant="light">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto pl-4">
            <Nav.Link as={Link} to="/immobilien">
              IMMOBILIEN
            </Nav.Link>
            <Nav.Link as={Link} to="/projekte">
              PROJEKTE
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/">
              <img
                className="main-logo m-auto responsive"
                src={Logo}
                alt="logo"
              />
            </Nav.Link>
          </Nav>
          <Nav className="m-auto">
            <Nav.Link as={Link} to="/uber">
              ÜBER UNS
            </Nav.Link>
            <Nav.Link as={Link} to="/losungen">
              LÖSUNGEN
            </Nav.Link>
            <Nav.Link as={Link} to="/kontakt">
              KONTAKT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
