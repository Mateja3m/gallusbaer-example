import { Container, Row, Col } from "react-bootstrap";
import "./Losungen.scss";

import SingleCircle from "./SingleCircle";
const Losungen = () => {
  return (
    <section className="py-5 losungen d-flex justify-content-center">
      <Container className="container-fluid">
        <Row>
          <Col className="text-center">
            <h3 className="los-heading py-3">IHR ZIEL IST DAS ZIEL.</h3>
            <h2 className="text-light los-text">
              Vom Suchen, Finden und <br />
              Vermitteln der
              <br /> Traumimmobilien.
            </h2>
          </Col>
        </Row>
        <SingleCircle />
      </Container>
    </section>
  );
};

export default Losungen;
