import React, { Component } from "react";
import Notes from "./Notes";
import Columns from 'react-columns';
import Record from "./Record";

export default class TopLeft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [
        {
          id: "234",
          title: "neckrope",
          summary: "time to neckrope"
        },
        {
          id: "2345",
          title: "double neckrope",
          summary: "sex"
        },
        {
          id: "23456",
          title: "complete sex",
          summary: "time to completely sex"
        }
      ]
    };
  }

  onKeyPressed(e) {
    console.log(e.keyCode);
    if (e.keyCode === 13) console.log("Holy Shit");
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Columns columns="2">
            <Record fb={this.props.fb} />
            <input type="text" name="name" placeholder="Search..." />
          </Columns>
        </div>
        {/* <Notes array={this.state.array} /> */}
      </React.Fragment>
    );
  }
}
