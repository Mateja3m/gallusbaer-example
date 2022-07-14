import { Container, Card } from "react-bootstrap";
import "./Kontakt.scss";
import KontaktImage from "../../img/logo-karte4.png";

const Kontakt = () => {
  return (
    <section className="kontakt">
      <Container className="kontakt-wrapper">
        <Card.Body className="img-wrapper">
          <Card.Img className="kontakt-img" src={KontaktImage} />
          <Card.Text>
            Gallus Baer AG <br />
            Brühlgasse 25 <br />
            9000 St. Gallen <br />
            <strong>welcome@gallusbaer.ch</strong>
            <br />
            <strong>+41 71 552 20 15</strong>
          </Card.Text>
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
