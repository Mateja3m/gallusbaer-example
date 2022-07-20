import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./Styles.scss";
import KontaktImage from "../../img/logo-karte4.png";
import KontaktForm from "../../components/KontaktForm";

const Kontakt = () => {
  return (
    <Container id="kontakt" fluid>
      <Row className="d-flex justify-content-center gx-5 mx-5">
        <Col lg={4}>
          <Image className="img-fluid w-50 pt-lg-4" src={KontaktImage} alt="Kontakt" />
       
         <p className="pt-md-4">
            Gallus Baer AG <br />
            Brühlgasse 25 <br />
            9000 St. Gallen <br />
            <strong>welcome@gallusbaer.ch</strong>
            <br />
            <strong>+41 71 552 20 15</strong>
          </p></Col>
        <Col lg={6} sm={12} className="align-self-start ">
          <h1 className="kontakt-heading">KONTAKT</h1>
          <h2 className="kontakt-text">
            Überzeugen Sie sich <br /> selbst.
            <br /> Lassen Sie sich beraten.
          </h2>
          <KontaktForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Kontakt;
