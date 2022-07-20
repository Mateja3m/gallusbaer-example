import { data } from "../Losungen/data.js";
import SingleCircle from "../SingleCircle";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Circles = () => {
  return (
       <Row className="g-0 mx-md-5">
       {data.map((item) => {
         const { id, title, text } = item;
          return (
            <Col
              key={id}
              className="d-flex justify-content-center"
              lg={4}
              md={4}
              sm={6}
            >
              <SingleCircle title={title} text={text} />
            </Col>
          );
        })}
      </Row>
    
  );
};

export default Circles;
