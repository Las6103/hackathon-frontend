import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";
function Article(props) {
  return (
    <Col xs={12} md={4}>
      <Link to={`/articles/${props.data.id}`}>
        <Card>
          <Card.Body>
            <Card.Title>{props.data.title}</Card.Title>
            <Card.Text>{props.data.author}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default Article;
