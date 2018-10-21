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
          title: "neckrope",
          summary: "time to neckrope"
        },
        {
          id: "2345",
          title: "double neckrope",
          summary: "sex"
        },
        {
          id: "23456",
          title: "complete sex",
          summary: "time to completely sex"
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
