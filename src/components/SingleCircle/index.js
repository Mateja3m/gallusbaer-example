import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";import LogoSM from "../../img/baer_gb.png";
import "../Losungen/styles.scss";

const SingleCircle = ({ title, text }) => {
  return (
    <Row className='mx-5'>
      <Col>
        <Card className="bg-light circle text-center p-1 m-2">
          <Card.Body className="inner-circle">
            <Card.Img className="circle-img p-md-0" src={LogoSM} alt="baer" />
            <Card.Title className="circle-title m-1">{title}</Card.Title>
            <Card.Text className="circle-text">{text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
 
  );
};

export default SingleCircle;
