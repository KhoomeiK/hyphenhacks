import React, { Component } from 'react';
import './App.css';
import Record from './components/Record';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Record fb={this.props.fb} />
      </div>
    );
  }
}

export default App;
