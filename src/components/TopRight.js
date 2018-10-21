import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
// import './TopRight.css';

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
    };
    return (
      // <Container> <img src="images/logo.jpg" alt="Logo">
      <Row>
        <Col>
          <div style={divStyle}>
            <h1> SUMMA </h1>
            <h1 className="test">hot</h1>
            <span className="buttonStyle">Summary </span>
            <span className="buttonStyle">Transcript </span>
            <span className="buttonStyle">Recording </span>
          </div>
        </Col>
        <Col>
          <button> signin </button>
        </Col>
      </Row>
      // </Container>
    );
    // onClick={this.props.fb.signin}
  }
}
