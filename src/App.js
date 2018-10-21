import React, { Component } from 'react';
import './App.css';
import {TopRight} from "./TopRight";
import {Notes} from "./Notes";
import ReactScrollableList from "react-scrollable-list";

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
            <ReactScrollableList
            listItems={[<Notes/>]}
            heightofItem={30}
            maxItemsToRender={50}/>
          </div>
          <div class="col-sm-8 text-center">
            <TopRight />
          </div>
          <div class="row">

          </div>
        </div>
        
      </div>
    );
  }
}

export default App;