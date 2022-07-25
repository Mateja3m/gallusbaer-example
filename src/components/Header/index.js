import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Logo from "../../img/LOGO-GALLUS-BAER-v2-01.png";
import "./Styles.scss";

const Header = () => {
  return (
    <Navbar fixed="top" expand="lg" className='p-1 py-sm-4 shadow mb-5 bg-white rounded'>
      <Navbar.Brand className="d-lg-none p-1 ms-1 ms-sm-0">
        <Image className="main-logo pe-3 pb-2" src={Logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto d-flex align-items-md-center align-items-end pe-3 pe-sm-0">
          <Nav.Link className="immobilien links ms-5 ps-5" href="#immobilien">
            IMMOBILIEN
          </Nav.Link>
          <Nav.Link className="links" href="#projekte">
            PROJEKTE
          </Nav.Link>
          <Nav.Link className="links d-sm-none d-md-block d-none" href="#immobilien">
            <Image className="main-logo" src={Logo} alt="logo" />
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
  );
};

export default Header;
