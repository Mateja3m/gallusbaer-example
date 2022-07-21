import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './styles.scss'

const KontaktForm = () => {
  return (
    <Form>
      <Row className="g-0 flex-sm-row flex-column">
        <Form.Group as={Col} className="me-3 p-2 my-2 bg-light">
          <Form.Control
            className="p-2 outline"
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group as={Col} className="p-2 my-2 bg-light">
          <Form.Control
            className="p-2 outline"
            type="text"
            placeholder="Enter last name"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3 g-0 flex-sm-row flex-column">
        <Form.Group as={Col} className="p-2 me-3 my-2 bg-light">
          <Form.Control
            className="outline p-2"
            type="text"
            placeholder="Enter mail"
          />
        </Form.Group>
        <Form.Group as={Col} className="p-2 my-2 bg-light">
          <Form.Control
            className="outline p-2"
            type="text"
            placeholder="Enter betreff"
          />
        </Form.Group>
      </Row>
      <Row className="g-0">
        <Col>
          <p className="mb-1">Ich bin interessiert an:</p>
        </Col>
      </Row>
      <Row className="mb-3 p-2 bg-light g-0">
        <Form.Group
          as={Col}
          className="bg-light d-flex flex-wrap align-items-sm-center align-items-start outline flex-sm-row flex-column"
        >
          <Form.Check
            className="m-2"
            type="checkbox"
            label="Visualisierungen"
          />
          <Form.Check className="m-2" type="checkbox" label="Möbel" />
          <Form.Check
            className="m-2"
            type="checkbox"
            label="Inneneinrichtung"
          />
          <Form.Check className="m-2" type="checkbox" label="Käuferberatung" />
          <Form.Check
            className="m-2"
            type="checkbox"
            label="Eigenkapitalaufstockung"
          />
          <Form.Check className="m-2" type="checkbox" label="Hypotheken" />
        </Form.Group>
      </Row>
      <Row className="mb-3 bg-light g-0">
        <Form.Group
          as={Col}
          className="p-2 mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Control
            as="textarea"
            cols={40}
            rows={10} 
            className="bg-white outline textarea-font text-left px-sm-5 pt-3"
            defaultValue="Liebes Gallus Baer Team, ich habe folgende Anfrage…"
          />
        </Form.Group>
      </Row>
      <Row className=" d-flex flex-column flex-sm-row justify-content-sm-around ms-3 ms-sm-0 g-0">
        <Col sm={6} className='ps-sm-0 pe-sm-4 pe-4 order-sm-1 order-2'>
          <p className="form-text me-sm-4 pe-5 py-sm-0 py-3">
            Diese Website ist durch reCAPTCHA geschützt und es gelten die
            Datenschutzbestimmungen und Nutzungsbedingungen von Google
          </p>
           </Col>
         <Col sm={2} className='mb-sm-2 me-sm-5 me-0 px-sm-1 bg-sm-light d-sm-flex justify-content-sm-center align-items-sm-center order-1'>
         <Button
         variant='primary'
            type="submit" 
            className="outline px-sm-2 text-dark bg-light btn-text"
          >
            ABSCHICKEN
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default KontaktForm;
