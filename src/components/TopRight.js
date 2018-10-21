import React, { Component } from "react";
//import { Container, Row, Col } from "reactstrap";
import { Container, Row, Col } from "react-grid-system";
import "./TopRight.css";

export default class TopRight extends Component {
  render() {
    const divStyle = {
      // position: 'relative',
      // right: '20px',
      // width: '750px',
      // height: '60px',
      // padding: '20px',
      // margin: '0px',
      // // float: 'right',
      // fontSize: '200%',
      // paddingLeft: '50px',
      // <img stylesrc="i.imgur.com/dLElTb1.jpg" alt="Logo" />
    };
    const buttonStyle = {
      marginRight: "10px",
      backgroundColor: "#33CCFF",
      borderRadius: "16px",
      color: "white",
      fontSize: "24px",
      fontFamily: "sans-serif"
    };

    return (
      <Container>
        <Row style={{ gridColumns: "2" }}>
          <Col>
            <button
              className="login"
              style={{ position: "relative", float: "right" }}
              onClick={this.props.fb.signin}
            >
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
                    <button style={buttonStyle}>SUMMARY </button>
                  </Col>
                  <Col>
                    <button style={buttonStyle}>TRANSCRIPT </button>
                  </Col>
                  <Col>
                    <button style={buttonStyle}>RECORDING </button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <div className="output">
          <p />
        </div>
      </Container>
    );
  }
}
