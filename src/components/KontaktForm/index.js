import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const KontaktForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3 d-flex justify-content-between">
        <Form.Control
          className="w-50 p-3 me-3"
          type="text"
          placeholder="Enter email"
        />
        <Form.Control
          className="w-50 p-3"
          type="text"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-between">
        <Form.Control
          className="w-50 p-3 me-3"
          type="text"
          placeholder="Enter email"
        />
        <Form.Control
          className="w-50 p-3"
          type="text"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Label>Ich bin interessiert an:</Form.Label>
      <Form.Group
        className="mb-3 bg-light p-2 d-flex justify-content-between flex-wrap align-items-center"
        controlId="formBasicCheckbox"
      >
        <Form.Check
          className="mx-2 align-self-center"
          type="checkbox"
          label="Visualisierungen"
        />
        <Form.Check
          className="mx-2 align-self-center "
          type="checkbox"
          label="Möbel"
        />
        <Form.Check
          className="mx-2 align-self-center"
          type="checkbox"
          label="Inneneinrichtung"
        />
        <Form.Check
          className="mx-2 align-self-center"
          type="checkbox"
          label="Käuferberatung"
        />
        <Form.Check
          className="mx-2"
          type="checkbox"
          label="Eigenkapitalaufstockung"
        />
        <Form.Check className="mx-2" type="checkbox" label="Hypotheken" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default KontaktForm;
