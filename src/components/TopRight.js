import React, { Component } from "react";
//import { Container, Row, Col } from "reactstrap";
import { Container, Row, Col } from "react-grid-system";
import "./TopRight.css";
import { Text } from "./Text";

export default class TopRight extends Component {
  constructor(props) {
    super(props);
    this.state = { output: this.props.open.sum };
  }

  render() {
    console.log(this.state.output);

    const divStyle = {};
    const buttonStyle = {
      marginRight: '10px',
      backgroundColor: '#33CCFF',
      borderRadius: '2px',
      color: 'white',
      fontSize: '24px',
      fontFamily: 'Arial',
    };

    return (
      <Container>
        <Row style={{ gridColumns: "2" }}>
          <Col>
            <button
              className="login"
              style={{ position: "relative", float: "right" }}
              onClick={this.props.fb.signin}>
              {" "}
              login{" "}
            </button>
            <div style={divStyle}>
              <a href="https://ibb.co/i8fX1L">
                <img
                  src="https://image.ibb.co/i6iS1L/image.png"
                  alt="logo"
                  border="0"
                  style={{
                    width: "225px",
                    height: "auto",
                    position: "relative",
                    left: "225px"
                  }}
                />
              </a>

              <div className="buttongroup" style={{ gridColumns: "3" }}>
                <Row>
                  <Col>
                    <button style={buttonStyle} onClick={e => this.setState({ output: this.props.open.sum })}>SUMMARY </button>
                  </Col>
                  <Col>
                    <button style={buttonStyle} onClick={e => this.setState({ output: this.props.open.text })}>TRANSCRIPT </button>
                  </Col>
                  <Col>
                    <button style={buttonStyle} onClick={e => this.setState({ output: "in progress" })}>RECORDING </button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <div className="output">
          <p>{(this.props.text === "") ? this.state.output : this.props.text}</p>
        </div>
      </Container>
    );
  }
}