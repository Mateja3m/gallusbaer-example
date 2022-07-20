import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Styles.scss'

const KontaktForm = () => {
  return (
    <Form>
      <Row className="mb-3 g-0">
      <Form.Group as={Col} className="p-2 me-3 bg-light d-flex justify-content-between">
        <Form.Control
          className="p-2 outline"
          type="text"
          placeholder="Enter name"
        />
      </Form.Group>
      <Form.Group as={Col} className="p-2 bg-light d-flex justify-content-between">
        <Form.Control
          className="outline p-2"
          type="text"
          placeholder="Enter last name"
          />
          </Form.Group>
          </Row>
          <Row className="mb-3 g-0">
          <Form.Group as={Col} className="p-2 me-3 bg-light d-flex justify-content-between">
        <Form.Control
          className="outline p-2"
          type="text"
          placeholder="Enter mail"
        />
      </Form.Group>
      <Form.Group as={Col} className="p-2 bg-light d-flex justify-content-between">
        <Form.Control
          className="outline p-2"
          type="text"
          placeholder="Enter betreff"
          />
          </Form.Group>
          </Row>
          <Row className='g-0'>
            <Col>
            <p className='mb-1'>Ich bin interessiert an:</p>
            </Col>
          </Row>
          <Row className="mb-3 p-2 bg-light g-0">
      <Form.Group as={Col}
        className="bg-light d-flex flex-wrap align-items-center outline"
        >
        <Form.Check
          className="m-2"
          type="checkbox"
          label="Visualisierungen"
        />
        <Form.Check
          className="m-2"
          type="checkbox"
          label="Möbel"
        />
        <Form.Check
          className="m-2"
          type="checkbox"
          label="Inneneinrichtung"
        />
        <Form.Check
          className="m-2"
          type="checkbox"
          label="Käuferberatung"
        />
        <Form.Check
          className="m-2"
          type="checkbox"
          label="Eigenkapitalaufstockung"
        />
        <Form.Check className="m-2" type="checkbox" label="Hypotheken" />
      </Form.Group>
          </Row>
          <Row className="mb-3  bg-light g-0">
          <Form.Group as={Col} className="p-2 mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" cols={40} rows={10} className='bg-white outline textarea-font text-left px-5 pt-3' value='Liebes Gallus Baer Team, ich habe folgende Anfrage…'/>
      </Form.Group>
          </Row>
          <Row className='align-items-center g-0'>
      <Col>
        <p className='form-text w-75 mx-3 px-2'>Diese Website ist durch reCAPTCHA geschützt und es gelten die Datenschutzbestimmungen und Nutzungsbedingungen von Google</p>
      </Col>
      <Col className='d-flex justify-content-end me-5'>
      <Button variant="primary" type="submit" className='px-2 py-2 text-dark bg-light'>
      ABSCHICKEN
      </Button> 
      </Col>
          </Row>
    </Form>
  );
};

export default KontaktForm;
