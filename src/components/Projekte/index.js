import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Balgach from "../../img/balgach1.png";
import "./Styles.scss";

const Projekte = () => {
  return (
    <Container id="projekte" className="mt-5">
      <Row className="justify-content-center gx-0">
        <Col lg={9} className="text-center">
          <h3 className="projekte-heading ">PROJEKTE</h3>
          <h2 className="projekte-text-row-1">
            Möchten Sie hier wohnen? Kommen Sie näher, sehen Sie selbst.
          </h2>
        </Col>
      </Row>
      <Row className='justify-content-sm-center g-0 w-50'>
        <Col xs={11} sm={6} className='projekte-wrapper mb-5'>
           <Image fluid src={Balgach} alt="img" className="ms-sm-4" /> 
           <div className='projekte-text-row-2'>
            <p className='mb-sm-4'>
            <strong>Balgach</strong> <br/>
          Eigentumswohnung
            </p>
          </div>
        </Col>
      </Row> 
      <Row className="mt-5">
        <Col lg={12} className='text-center mt-5'>      
        <Button variant='light btn-projekte'>JETZT ANFRAGEN</Button> 
        </Col>
      </Row>
    </Container>
  );
};

export default Projekte;
