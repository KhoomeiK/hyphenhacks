import React, { Component } from 'react';
import logo from './luigi.png';
import './App.css';
import { TopLeft } from "./TopLeft";
import {TopRight} from "./TopRight";
import {Notes} from "./Notes";

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-1 text-left">
            <button>+</button>
          </div>
          <div class="col-sm-3 text-left">
            <form>
              <input type="text" name="name" placeholder="Search" />
            </form>
            <Notes/>
          </div>
          <div class="col-sm-8 text-center">
            <TopRight/>
          </div>
          <div class="row">

          </div>
        </div>
        
      </div>
    );
  }
}

export default App;