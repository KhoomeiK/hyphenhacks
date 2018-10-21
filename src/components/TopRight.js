import React, { Component } from "react";
import Columns from 'react-columns';

export default class TopRight extends Component {
    render() {
        return (
            <Columns>
                <div>
                    <h1>Summa</h1>
                    <button>Summary</button>
                    <button>Transcribe</button>
                    <button>Record</button>
                </div>
                <button> signin </button>
            </Columns>
            // onClick={this.props.fb.signin}
        );
    }
}