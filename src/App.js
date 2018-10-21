import React, { Component } from 'react';

import './App.css';
import {TopLeft} from "./TopLeft";
import {TopRight} from "./TopRight";

class App extends Component {
  render() {
    return (
      <div>
        <TopLeft/>
        <TopRight/>
        
      </div>
    );
  }
}

export default App;
