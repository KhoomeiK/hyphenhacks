import React, { Component } from "react";

export default class Notes extends Component {
  constructor(props) {
      super(props);
      // console.log(props);

      this.loopRender = this.loopRender.bind(this);
  }

  loopRender() {
    // console.log(this.props.array);
    let arr = this.props.array;
    // console.log(arr);
    // if (arr.length !== 0) {
    let change = [];
    for (let i = 0; i < arr.length; i++) {
      // console.log(i);
      // console.log(arr[i].title);
      change.push(
        <p
          className="list-item"
          onClick={e => this.props.click(i)}
        >
          {arr[i].title}
        </p>
      );
    }
    // }
    // console.log(change);
    return change;
  }

  render() {
    return this.loopRender();
  }
}
