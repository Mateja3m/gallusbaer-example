import "./Uber.scss";
import House from "../../img/ueber-uns1.jpg";
import { Container, Row, Col } from "react-bootstrap";

const Uber = () => {
  return (
    <section className='uber-wrapper'>
      <Container className="m-4">
        <Row>
          <Col className="col-sm-5">
            <h3 className=" col-10 uber-heading3">ÜBER UNS</h3>
            <h2 className="uber-heading2">
              Mit klarem Blick, sicherem Instinkt und viel Erfahrung.
            </h2>
          </Col>
        </Row>
        <Row className="row-2">
          <Col className="row-text">
            <p>
              Gallus Baer ist ein Immobilienunternehmen mit einer Leidenschaft
              für grossartige Objekte, makellosen Service und aussergewöhnliche
              Ideen. Wir arbeiten mit traditionellen Werten und einer modernen
              Ausrichtung. Die Immobilienwelt, wie wir sie betrachten, ist
              weitaus mehr als ein Ein- und Verkaufen. Jede Immobilie besitzt
              Charakter und Eigenheiten. Unsere Aufgabe ist es, dieses Potenzial
              zu erkennen, zu präsentieren und zu vermitteln. Der umfassende
              Blick nach Innen und Aussen hilft uns, diesem Ziel näher zu
              kommen. Dafür setzen wir auf unseren geschulten Instinkt, unser
              Handwerk und die Magie des digitalen Zeitalters.
            </p>
          </Col>
          <Col className="img">
            <img src={House} alt="img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Uber;
