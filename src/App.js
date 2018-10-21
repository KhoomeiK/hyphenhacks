import React, { Component } from "react";
import "./App.css";
import TopRight from "./components/TopRight";
import TopLeft from "./components/TopLeft";
//import { Container, Row, Col } from "reactstrap";
import { Container, Row, Col } from 'react-grid-system';
// import Columns from 'react-columns';
// import ReactScrollableList from "react-scrollable-list";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={4}>
              <TopLeft fb={this.props.fb} />
            </Col>
            <Col sm={8}>
              <TopRight fb={this.props.fb} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
