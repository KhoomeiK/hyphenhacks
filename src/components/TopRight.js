import React, { Component } from "react";
import Columns from 'react-columns';
import './TopRight.css';

export default class TopRight extends Component {
    render() {
        const divStyle = {
            position: 'relative',
            right: '20px',
            width: '750px',
            height: '60px',
            padding: '20px',
            margin: '0px',
            float: 'right',
            fontSize: '200%',
            paddingLeft: '50px',
        }
        const buttonStyle = {
            paddingLeft: '20px',
            paddingRight: '20px',
            fontSize: '100%',
            backgroundColor: '#00BFFF',
            fontFamily: './font.ttf',
            color: 'black',
        }
        const spanStyle = {
            paddingLeft: '20px',
            paddingRight: '20px',
        }
        return (
            <Columns>
                <div>
                    <div style={divStyle}>
                        <span style={spanStyle}>  </span>
                        <span style={buttonStyle}>Summary       </span>
                        <span style={spanStyle}>  </span>
                        <span style={buttonStyle}>Transcript     </span>
                        <span style={spanStyle}>  </span>
                        <span style={buttonStyle}>Recording     </span>
                        <span style={spanStyle}>  </span>
                    </div>
                </div>
                <button> signin </button>
            </Columns>
        );
        // onClick={this.props.fb.signin}
    }
}       