import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
// import Balgach from "../../img/balgach1.png";
import "./styles.scss";

const Projekte = () => {
  return (
    <Container id="projekte" className="mt-5">
      <Row className="d-flex justify-content-center gx-0">
        <Col lg={9} className="text-center">
          <h3 className="projekte-heading ">PROJEKTE</h3>
          <h2 className="projekte-text-row-1">
            Möchten Sie hier wohnen? Kommen Sie näher, sehen Sie selbst.
          </h2>
        </Col>
      </Row>
      {/* Fix this part */}
      {/* <Row className='projekte-row-img d-flex justify-content-sm-start g-0'>
        <Col sm={5} className='projekte-wrapper'>
           <Image fluid src={Balgach} alt="img" className="w-75" /> 
           <div className='projekte-text-row-2' >
          <h6>
            <strong>Balgach</strong>
          </h6>
          <p className='mb-sm-4'>Eigentumswohnung</p>
          </div>
        </Col>
      </Row>   */}
    </Container>
  );
};

export default Projekte;
