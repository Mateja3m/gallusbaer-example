
import {Row, Form, Col} from 'react-bootstrap'

import './Styles.scss'

const KontaktForm = () => {
  return (
    <Form>
      <Row className="mb-3 g-0">
      <Form.Group as={Col} className="d-flex justify-content-between">
        <Form.Control
          className="p-3"
          type="text"
          placeholder="Enter name"
        />
      </Form.Group>
      <Form.Group as={Col} className="d-flex justify-content-between">
        <Form.Control
          className="p-3"
          type="text"
          placeholder="Enter last name"
          />
          </Form.Group>
          </Row>
          <Row className="mb-3 g-0">
          <Form.Group as={Col} className="d-flex justify-content-between">
        <Form.Control
          className="p-3"
          type="text"
          placeholder="Enter mail"
        />
      </Form.Group>
      <Form.Group as={Col} className="d-flex justify-content-between">
        <Form.Control
          className="p-3"
          type="text"
          placeholder="Enter betreff"
          />
          </Form.Group>
          </Row>
          <Row className="mb-3 g-0">
            <Form.Label>Ich bin interessiert an:</Form.Label>
      <Form.Group as={Col}
        className="bg-light d-flex flex-wrap align-items-center"
        >
        <Form.Check
          className=" "
          type="checkbox"
          label="Visualisierungen"
        />
        <Form.Check
          className=""
          type="checkbox"
          label="Möbel"
        />
        <Form.Check
          className=" "
          type="checkbox"
          label="Inneneinrichtung"
        />
        <Form.Check
          className=" "
          type="checkbox"
          label="Käuferberatung"
        />
        <Form.Check
          className=""
          type="checkbox"
          label="Eigenkapitalaufstockung"
        />
        <Form.Check className=" " type="checkbox" label="Hypotheken" />
      </Form.Group>
          </Row>
        {/* 
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" cols={40} rows={10} className='text-center'>Liebes Gallus Baer Team, ich habe folgende Anfrage…</Form.Control>
      </Form.Group>
      <p className='ml-3 w-25'>Diese Website ist durch reCAPTCHA geschützt
und es gelten die Datenschutzbestimmungen
und Nutzungsbedingungen von Google</p>
      <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>
  );
};

export default KontaktForm;
