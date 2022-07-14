import { Container, Card } from "react-bootstrap";
import "./Kontakt.css";
import KontaktImage from "../img/logo-karte4.png";

const Kontakt = () => {
  return (
    <Container>
      <Card>
        <Card.Img src={KontaktImage} />
      </Card>
    </Container>
  );
};

export default Kontakt;
