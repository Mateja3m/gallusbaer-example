import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Circles from "../Circles";
import Col from "react-bootstrap/Col";
import "./Styles.scss";


const Losungen = () => {
  return (
    <Container fluid id="losungen" className='mt-5 pb-5'>
      <Row>
        <Col lg={9} className="mt-5 m-auto"> 
          <h3 className="text-center los-heading">IHR ZIEL IST DAS ZIEL.</h3>
          <h2 className="text-center text-light los-text pb-5">
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
