import React, { Component } from "react";
import "./App.css";
import TopRight from "./components/TopRight";
import TopLeft from "./components/TopLeft";
import { Container, Row, Col } from "reactstrap";
// import Columns from 'react-columns';
// import ReactScrollableList from "react-scrollable-list";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <TopLeft fb={this.props.fb} />
            </Col>
            <Col>
              <TopRight />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
