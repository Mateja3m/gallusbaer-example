import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../img/LOGO-GALLUS-BAER-v2-01.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav">
      <hr className="header-line" size="3" />
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link className="immobilien links" as={Link} to="/">
              IMMOBILIEN
            </Nav.Link>
            <Nav.Link className="links" as={Link} to="/projekte">
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
          <Nav>
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
    </div>
  );
};

export default Header;
