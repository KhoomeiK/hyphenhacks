import React, { Component } from "react";
import Notes from "./Notes";
import Record from "./Record";
import { Container, Row, Col } from "reactstrap";

export default class TopLeft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [
        {
          id: "234",
          title: "cs 101 10/15",
          summary: "test num 1"
        },
        {
          id: "2345",
          title: "physics 1b 10/13",
          summary: "test num 2"
        },
        {
          id: "23456",
          title: "npr california report 10/1",
          summary: "test num 3"
        }
      ]
    };
  }

  onKeyPressed(e) {
    console.log(e.keyCode);
    if (e.keyCode === 13) console.log("Holy Shit");
  }

  render() {
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
          <div className="list-item">
            <Notes array={this.state.array} />
          </div>
        </Row>
      </div>
    );
  }
}
