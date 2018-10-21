import React, { Component } from "react";

export default class Notes extends Component {
    constructor(props) {
        super(props);
    }

    loopRender() {
        let change =  [];
        for (let i = 0; i < this.props.array.length; i++) {
            change.push(
                <h1
                    id={this.props.array[i].id}
                    title={this.props.array[i].title}
                    summary={this.props.array[i].summary}>
                    {this.props.array[i].title}</h1>
            );
        }

        return change;
    }

    render() {
        return this.loopRender();
    }
}