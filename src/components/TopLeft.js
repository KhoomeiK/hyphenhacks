import React, { Component } from "react";
import Notes from "./Notes";
import Record from "./Record";
import { Container, Row, Col } from "reactstrap";

export default class TopLeft extends Component {
  onKeyPressed(e) {
    console.log(e.keyCode);
    if (e.keyCode === 13) console.log("type");
  }

  render() {
    console.log(this.props.notes);
    return (
      <div>
        <Row>
          <Col>
            <Record fb={this.props.fb} />
          </Col>
          <Col>
            <input type="text" name="name" placeholder="Search..." />
          </Col>
        </Row>
        <Row>
          <div className="list">
            <Notes array={this.props.notes} />
          </div>
        </Row>
      </div>
    );
  }
}
