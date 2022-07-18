import { data } from "../Losungen/data.js";
import SingleCircle from "../SingleCircle";
import { Row, Col } from "react-bootstrap";

const Circles = () => {
  return (
    <>
      <Row className="mx-5">
        {data.map((item) => {
          const { id, title, text } = item;
          return (
            <Col
              key={id}
              className="d-flex justify-content-center"
              lg={4}
              sm={6}
            >
              <SingleCircle title={title} text={text} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Circles;
