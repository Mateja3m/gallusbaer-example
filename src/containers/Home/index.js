import Header from "../../components/Header";
import Projekte from "../../components/Projekte";
import Uber from "../../components/Uber";
import Losungen from "../../components/Losungen";
import Kontakt from "../../components/Kontakt";
import Banner from "../../img/main-banner.jpg";
import { Image, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Header />
      <Row id="immobilien">
        <Image className="img-fluid col-12" src={Banner} />
      </Row>
      <Uber />
      <Losungen />
      <Projekte />
      <Kontakt />
    </>
  );
};

export default Home;
