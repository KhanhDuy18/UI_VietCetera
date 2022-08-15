import React from "react";
import "./VerticalPodcast.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const VerticalPodcast = (props) => {
  return (
    <div className="VerticalPodcast__containner">
      <Row className="VerticalPodcast__body">
        <Col xs={1} md={1} lg={1} className="VerticalPodcast__index">
          <span>{props.index}</span>
        </Col>
        <Col xs={6} md={6} lg={5} className="VerticalPodcast__img">
          <img src={props.img} alt="Hình ảnh"></img>
        </Col>
        <Col xs={5} md={5} lg={6} className="VerticalPodcast__title">
          {props.topic && (
            <a  className="topic" href="#">
              <span>{props.topic}</span>
            </a>
          )}

          <h3>{props.title}</h3>
        </Col>
      </Row>
    </div>
  );
};

export default VerticalPodcast;
