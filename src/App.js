import React, { Component } from 'react';
import './App.css';
import TopRight from "./components/TopRight";
import TopLeft from "./components/TopLeft";
// import ReactScrollableList from "react-scrollable-list";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <TopLeft />
            <div className="col-sm-8 text-center">
              <TopRight/>
            </div>
            <div className="row">
            </div>
            <button onClick={this.props.fb.signin}> signin </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;