import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from "../../img/LOGO-GALLUS-BAER-v2-01.png";
import './styles.scss'


const Footer = () => {
  return (
    <Container fluid>
        <Row className='py-lg-3 mx-lg-2 w-100'>
            <Col className='d-flex align-items-center flex-column flex-sm-row justify-content-sm-between'>
            <Image fluid className="main-logo mx-auto mx-sm-0 align-self-sm-start py-2" src={Logo} alt="logo" />
            <p className='footer-text align-self-lg-end text-center text-md-start'>+41 71 552 20 15 | welcome@gallusbaer.ch <br/>Impressum | Datenschutz</p>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer