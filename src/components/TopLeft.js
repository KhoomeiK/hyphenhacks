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

  onKeyPressed(e) {
    console.log(e.keyCode);
    if (e.keyCode === 13) console.log("Holy Shit");
  }

  render() {
    return (
      <React.Fragment>
<<<<<<< HEAD
        <div className="navbar">
          <Record />
          <div className="search-container">
            <form>
              <input type="text" name="name" placeholder="Search..." />
            </form>
           
          </div>
=======
        <div>
          <Columns columns="2">
            <Record fb={this.props.fb} />
            <input type="text" name="name" placeholder="Search..." />
          </Columns>
>>>>>>> 839f65fc4be79aba7e10bd9c2a1f75a4a57010bd
        </div>
        {/* <Notes array={this.state.array} /> */}
      </React.Fragment>
    );
  }
}
