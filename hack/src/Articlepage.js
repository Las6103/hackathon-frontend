import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Menu from "./Menu";

class Articlepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getArticle();
  }
  getArticle() {
    fetch(
      `https://hackathon-backend-corona.herokuapp.com/articles/${this.props.match.params.id}`
    )
      .then((unparsedData) => unparsedData.json())
      .then((parsedData) => {
        console.log(parsedData);
        this.setState({ data: parsedData });
      });
  }

  render() {
    return (
      <div>
        <Container>
          <h2>{this.state.data.title}</h2>
          <h2>{this.state.data.author}</h2>
          <p>{this.state.data.content}</p>
          <p>{this.state.data.issued}</p>
        </Container>
      </div>
    );
  }
}

export default Articlepage;
