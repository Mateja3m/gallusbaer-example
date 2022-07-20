import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";import "./Styles.scss";
import Circles from "../Circles";


const Losungen = () => {
  return (
    <Container id="losungen" fluid>
      <Row className='g-0'>
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
