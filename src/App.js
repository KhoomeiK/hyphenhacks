import React, { Component } from 'react';
import './App.css';
import TopRight from "./components/TopRight";
import TopLeft from "./components/TopLeft";
// import ReactScrollableList from "react-scrollable-list";

// <button onClick={this.props.fb.signin}> signin </button>

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <div style={{columnSpan:'1'}}>
        <TopLeft/>
        </div>
        <div style={{columnSpan:'2'}}>
        <TopRight/>
        </div>


       
        </div>
      </div>
    );
  }
}

export default App;