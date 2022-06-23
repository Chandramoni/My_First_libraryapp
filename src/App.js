import {hot} from "react-hot-loader";
import React, { Component} from "react";
import LibraryContainer from "./containers/LibraryContainer";
import "./App.css";

class App extends Component{
  render(){
    return(
      
            <div className="App">
        <h1> Welcome to Bookreads!!!!!! </h1>
        <LibraryContainer/>
      </div>
      
    );
  }
}

export default hot(module)(App);