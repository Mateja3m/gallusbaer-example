import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Balgach from "../../img/balgach1.png";
import "./Styles.scss";

const Projekte = () => {
  return (
    <Container id="projekte" className="mt-5">
      <Row className="d-flex justify-content-center gx-0">
        <Col lg={9} className="text-center">
          <h3 className="projekte-heading ">PROJEKTE</h3>
          <h2 className="projekte-text">
            Möchten Sie hier wohnen? Kommen Sie näher, sehen Sie selbst.
          </h2>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center overlay-parent g-0">
        <Col lg={9}>
          <Image src={Balgach} alt="img" className="w-25" />
        </Col>
        <Col lg={9} className="text">
          <h6>
            <strong>Balgach</strong>
          </h6>
          <p>Eigentumswohnung</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Projekte;
