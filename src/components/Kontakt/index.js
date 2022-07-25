import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import KontaktIMG from "../../img/logo-karte4.png";
import KontaktForm from "../../components/KontaktForm";
import "./Styles.scss";



const Kontakt = () => {
  return (
    
    <Container id="kontakt" fluid >
      <Row className='justify-content-sm-center align-items-sm-start gx-0'>
        <Col md={3} className='ms-sm-5 pt-sm-5 d-flex flex-sm-column align-items-sm-center justify-content-start'>
          <Image fluid src={KontaktIMG} alt="Kontakt" className='w-50 pt-sm-3 px-sm-0 pe-sm-0 align-self-center pe-4'/>
          <p className="p-sm-4 text-left align-self-center">
            Gallus Baer AG <br />
            Brühlgasse 25 <br /> 
            9000 St. Gallen <br /> 
            <strong>welcome@gallusbaer.ch</strong>
            <br />
            <strong>+41 71 552 20 15</strong>
          </p>
        </Col>
        <Col sm={6} className="align-self-start">
          <h1 className="kontakt-heading pt-5 pb-2">KONTAKT</h1>
          <h2 className="kontakt-text pb-1">
            Überzeugen Sie sich selbst. <br/>
            Lassen Sie sich beraten.
          </h2>
          <KontaktForm />
        </Col>
      </Row>
        </Container>
        
  );
};

export default Kontakt;
