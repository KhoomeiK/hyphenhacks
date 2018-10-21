import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap"
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
        }
        const buttonStyle = {
            // fontSize: '100%',
            // backgroundColor: '#00BFFF',
            // fontFamily: './font.ttf',
            // color: 'black',
            // margin: '10px',
            // padding: '10px'
        }
        return (
            // <Container>
                <Row>
                    <Col>
                        <div style={divStyle}>
                            <h1> SUMMA </h1>
                            <span style={buttonStyle}>Summary </span>
                            <span style={buttonStyle}>Transcript </span>
                            <span style={buttonStyle}>Recording </span>
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