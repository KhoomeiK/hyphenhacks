import React, { Component } from "react";
import Notes from "./Notes";
import Record from './Record';

export default class TopLeft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [
        {
          id: "234",
          title: "hi",
          summary: "time to neckrope"
        },
        {
          id: "2345",
          title: "double hello",
          summary: "sex"
        },
        {
          id: "23456",
          title: "hey",
          summary: "time to completely sex"
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <Record />
          <div className="search-container">
            <form>
              <input type="text" name="name" placeholder="Search..." />
            </form>
           
          </div>
        </div>
        <Notes array={this.state.array} />
      </React.Fragment>
    );
  }
}
