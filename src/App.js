import React, { Component } from 'react';
import './App.css';
import TopRight from "./components/TopRight";
import TopLeft from "./components/TopLeft";
import { Container, Row, Col } from "reactstrap"
// import Columns from 'react-columns';
// import ReactScrollableList from "react-scrollable-list";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Columns columns='4' dimensions={dimensions}> */}
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
        {/* </Columns> */}
      </div>
    );
  }
}

export default App;