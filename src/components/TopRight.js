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
      borderRadius: "2px",
      color: "white",
      fontSize: "24px",
      fontFamily: "font1"
    };
    return (
      // <Container>
      <Row style={{ gridColumns: "2" }}>
        <Col>
          <button
            className="record"
            style={{ position: "relative", float: "right" }}
            onClick={this.props.fb.signin}
          >
            {" "}
            signin{" "}
          </button>
          <div style={divStyle}>
            <h2 style={{ position: "relative", left: "240px" }}>SUMMA</h2>
            <div style={{ gridColumns: "3" }}>
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
      // </Container>
    );
  }
}
