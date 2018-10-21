import React, { Component } from "react";

export default class Notes extends Component {
  // constructor(props) {
  //     super(props);
  // }

  loopRender() {
    console.log(this.props.array);
    let arr = this.props.array;
    console.log(arr);
    if (arr.length !== 0) {
      let change = [];
      for (let i in arr) {
        console.log(i);
        console.log(arr[i].title);
        change.push(
          <p
            className="list-item"
            id={i}
          >
            {arr[i].title}
          </p>
        );
      }
      console.log(change);
      return change;
    }
  }

  render() {
    return this.loopRender();
  }
}
