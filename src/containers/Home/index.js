import Header from "../../components/Header";
import Uber from "../../components/Uber";
import Losungen from "../../components/Losungen";
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
    </>
  );
};

export default Home;
