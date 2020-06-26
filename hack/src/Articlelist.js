import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Article from "./Article";

class Articlelist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://hackathon-backend-corona.herokuapp.com/articles/")
      .then((unparsedData) => unparsedData.json())
      .then((parsedData) => {
        console.log(parsedData);
        this.setState({ data: parsedData });
      });
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.data.map((data) => {
            return <Article data={data} key={data.id} />;
          })}
        </Row>
      </Container>
    );
  }
}

export default Articlelist;
