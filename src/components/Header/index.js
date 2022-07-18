import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../img/LOGO-GALLUS-BAER-v2-01.png";
import "./Styles.scss";

const Header = () => {
  return (
    <>
      <Navbar fixed="top" bg="light" variant="light" expand="lg">
        <Navbar.Brand className="d-lg-none">
          <img className="main-logo" src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex align-items-center">
            <Nav.Link className="immobilien links" href="#immobilien">
              IMMOBILIEN
            </Nav.Link>
            <Nav.Link className="links" href="#projekte">
              PROJEKTE
            </Nav.Link>
            <Nav.Link className="links d-sm-none d-md-block d-none" href="#">
              <img className="main-logo" src={Logo} alt="logo" />
            </Nav.Link>
            <Nav.Link className="links" href="#uber">
              ÜBER UNS
            </Nav.Link>
            <Nav.Link className="links" href="#losungen">
              LÖSUNGEN
            </Nav.Link>
            <Nav.Link className="links" href="#kontakt">
              KONTAKT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
