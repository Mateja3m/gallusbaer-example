import { Container, Row, Col } from "react-bootstrap";
import "./Styles.scss";
import Circles from "../Circles";
const Losungen = () => {
  return (
    <Container id="losungen" fluid>
      <Row>
        <Col lg={9} className="m-auto">
          <h3 className="text-center los-heading">IHR ZIEL IST DAS ZIEL.</h3>
          <h2 className="text-center text-light los-text">
            Vom Suchen, Finden und <br />
            Vermitteln der
            <br /> Traumimmobilien.
          </h2>
        </Col>
      </Row>
      <Circles />
    </Container>
  );
};

export default Losungen;
