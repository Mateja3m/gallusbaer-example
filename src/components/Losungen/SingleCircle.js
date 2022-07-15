import LogoSM from "../../img/baer_gb.png";
import { data } from "./data.js";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Losungen.scss";

const SingleCircle = () => {
  const [items] = useState(data);
  return (
    <>
      {items.map((item) => {
        const { id, title, text } = item;
        return (
          <Row className="wrapper d-lg-inline-block" key={id}>
            <Col className="p-2">
              <Card className="bg-light circle text-center p-2 m-lg-4 m-sm-2">
                <Card.Body className="inner-circle">
                  <Card.Img
                    className="circle-img p-md-0"
                    src={LogoSM}
                    alt="baer"
                  />
                  <Card.Title className="circle-title m-1">{title}</Card.Title>
                  <Card.Text className="circle-text">{text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default SingleCircle;
