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
      // <Container>
      <Row>
        <Col>
          <div style={divStyle}>
            <img src="logo2.PNG" alt="Logo" />
            <button className="buttonStyle">Summary </button>
            <button className="buttonStyle">Transcript </button>
            <button className="buttonStyle">Recording </button>
          </div>
        </Col>
        <Col>
          <button onClick={this.props.fb.signin}> signin </button>
        </Col>
      </Row>
      // </Container>
    );
  }
}
