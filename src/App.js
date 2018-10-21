import React, { Component } from 'react';
import './App.css';
import TopRight from "./components/TopRight";
import TopLeft from "./components/TopLeft";
import Columns from 'react-columns';
// import ReactScrollableList from "react-scrollable-list";

<<<<<<< HEAD
// <button onClick={this.props.fb.signin}> signin </button>
=======
const dimensions = [
  { width: 100, height: 1200 },
  { width: 500, height: 1200 }
]
>>>>>>> 839f65fc4be79aba7e10bd9c2a1f75a4a57010bd

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <div className="container">
        <div style={{columnSpan:'1'}}>
        <TopLeft/>
        </div>
        <div style={{columnSpan:'2'}}>
        <TopRight/>
        </div>


       
        </div>
=======
      <div>
        <Columns columns='2' dimensions={dimensions}>
          <TopLeft fb={this.props.fb} />
          <TopRight />
        </Columns>
>>>>>>> 839f65fc4be79aba7e10bd9c2a1f75a4a57010bd
      </div>
    );
  }
}

export default App;