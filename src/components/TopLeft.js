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

  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <Record />
          <div className="search-container">
            <form>
              <input type="text" name="name" placeholder="Search..." />
            </form>
            <button type="submit"><i class="fa fa-search"></i></button>
          </div>
        </div>
        <Notes array={this.state.array} />
      </React.Fragment>
    );
  }
}
