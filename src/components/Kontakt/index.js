import { Container, Row, Col } from "react-bootstrap";
import "./Styles.scss";
import KontaktImage from "../../img/logo-karte4.png";
import KontaktForm from "../../components/KontaktForm";

const Kontakt = () => {
  return (
    <Container id="kontakt" fluid>
      <Row className="justify-content-center g-0">
        <Col lg={2} className="align-items-start">
          <img className="w-75 pt-4" src={KontaktImage} alt="Kontakt" />
          <p className="pt-4">
            Gallus Baer AG <br />
            Brühlgasse 25 <br />
            9000 St. Gallen <br />
            <strong>welcome@gallusbaer.ch</strong>
            <br />
            <strong>+41 71 552 20 15</strong>
          </p>
        </Col>
        <Col lg={6} className="align-self-start">
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
