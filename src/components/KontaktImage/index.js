import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import KontaktBG from "../../img/kontakt-bg.png";

const KontaktImage = () => {
  return (
    <Container fluid className='p-0'>
        <Row className='gx-0'>
        <Col className="bg-body mt-4">
          <Image fluid src={KontaktBG} alt="Kontakt-bg" />
        </Col>
      </Row>
    </Container>
  );
};

export default KontaktImage;
