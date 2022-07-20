import Header from "../../components/Header";
import Projekte from "../../components/Projekte";
import Uber from "../../components/Uber";
import Losungen from "../../components/Losungen";
import Kontakt from "../../components/Kontakt";
import Footer from "../../components/Footer";
import Banner from "../../img/main-banner.jpg";
import Row  from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const Home = () => {
  return (
    <>
      <Header />
      <Row id="immobilien" className='gx-0'>
        <Image fluid className="col-12" src={Banner} />
      </Row>
      <Uber />
      <Losungen />
      <Projekte />
      <Kontakt />
      <Footer />
    </>
  );
};

export default Home;
