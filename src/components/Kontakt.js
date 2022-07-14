import { Container, Card } from "react-bootstrap";
import "./Kontakt.css";
import KontaktImage from "../img/logo-karte4.png";

const Kontakt = () => {
  return (
    <section className="kontakt">
      <Container className="kontakt-wrapper">
        <Card.Body className="img-wrapper">
          <Card.Img className="kontakt-img" src={KontaktImage} />
        </Card.Body>
        <Card.Body>
          <Card.Title className="kontakt-heading">KONTAKT</Card.Title>
          <Card.Title className="kontakt-text">
            Überzeugen Sie sich selbst. Lassen Sie sich beraten.
          </Card.Title>
        </Card.Body>
      </Container>
    </section>
  );
};

export default Kontakt;
