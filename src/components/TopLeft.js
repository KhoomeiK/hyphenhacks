import React, { Component } from "react";
import Notes from "./Notes";
import Record from "./Record";
import { Container, Row, Col } from "reactstrap";

export default class TopLeft extends Component {
  onKeyPressed(e) {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      console.log("type");
    }
  }

  render() {
    // console.log(this.props.notes);
    return (
      <div>
        <Row>
          <Col>
            <Record
              newRec={this.props.newRec}
              fb={this.props.fb}
              rec={this.props.rec}
            />
          </Col>
          <Col>
            <input
              type="text"
              name="name"
              placeholder="Search..."
              onKeyDown={this.onKeyPressed}
            />
          </Col>
        </Row>
        <Row>
          <div className="list">
            <Notes array={this.props.notes} click={this.props.click} />
          </div>
        </Row>
      </div>
    );
  }
}
