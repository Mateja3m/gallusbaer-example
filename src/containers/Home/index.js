import Header from "../../components/Header";
import Projekte from "../../components/Projekte";
import Uber from "../../components/Uber";
import Losungen from "../../components/Losungen";
import KontaktImage from "../../components/KontaktImage";
import Kontakt from "../../components/Kontakt";
import Footer from "../../components/Footer";
import Banner from "../../img/main-banner.jpg";
import Row  from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Home = () => {
  return (
    <>
      <Header />
      <Row id="immobilien" className='gx-0'>
        <Col>
        <Image fluid src={Banner}/>
    </Col>
      </Row>
      <Uber />
      <Losungen />
      <Projekte />
      <KontaktImage />
      <Kontakt />
      <Footer />
    </>
  );
};

export default Home;
