import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./Styles.scss";
import House from "../../img/ueber-uns1.jpg";

const Uber = () => {
  return (
    <Container id="uber" fluid className="mt-5">
      <Row className="justify-content-center gx-0">
        <Col sm={12} lg={8}>
          <h3 className="uber-title">ÜBER UNS</h3>
          <h2 className="uber-text">
            Mit klarem Blick, sicherem Instinkt und viel Erfahrung.
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center gx-0">
        <Col 
          xs={12} 
          md={12}
          lg={8}
          className="d-sm-flex justify-content-sm-between align-items-center overlay"
        >
          <p className='px-0'>
            Gallus Baer ist ein Immobilienunternehmen mit einer Leidenschaft für
            grossartige Objekte, makellosen Service und aussergewöhnliche Ideen.
            Wir arbeiten mit traditionelle n Werten und einer modernen
            Ausrichtung. Die Immobilienwelt, wie wir sie betrachten, ist weitaus
            mehr als ein Ein- und Verkaufen. Jede Immobilie besitzt Charakter
            und Eigenheiten. Unsere Aufgabe ist es, dieses Potenzial zu
            erkennen, zu präsentieren und zu vermitteln. Der umfassende Blick
            nach Innen und Aussen hilft uns, diesem Ziel näher zu kommen. Dafür
            setzen wir auf unseren geschulten Instinkt, unser Handwerk und die
            Magie des digitalen Zeitalters.
          </p>
        <Image fluid className="w-50 img-border" src={House} alt="img" />
        </Col>
      </Row>
    </Container>
  );
};

export default Uber;
