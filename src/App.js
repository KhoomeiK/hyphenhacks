import React, { Component } from 'react';
import './App.css';
import TopRight from "./components/TopRight";
import TopLeft from "./components/TopLeft";
import Columns from 'react-columns';
// import ReactScrollableList from "react-scrollable-list";

const dimensions = [
  { width: 100, height: 1200 },
  { width: 500, height: 1200 }
]

class App extends Component {
  render() {
    return (
      <div>
        <Columns columns='2' dimensions={dimensions}>
          <TopLeft fb={this.props.fb} />
          <TopRight />
        </Columns>
      </div>
    );
  }
}

export default App;