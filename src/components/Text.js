import React, { Component } from "react";

export class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {finalDisplay: ''};
    }

    chooseText() {
        if(this.props.type === "Transcribe")
        {
            this.state.finalDisplay = this.props.displayTranscribe;
        }
        else if(this.props.type === "Summary")
        {
            this.state.finalDisplay = this.props.displaySummary;
        }
        else
        {
            this.state.finalDisplay = this.props.displayRecord;
        }
    }

    render() {
        return (
            <div>
                <article className="list-item">
                    {this.state.finalDisplay}
                </article>
            </div>
        );
    }
}