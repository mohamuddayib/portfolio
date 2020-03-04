import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import { Component } from "react";
import Fullscreen from "./Components/Sections/fullscreen/Fullscreen";
import Mouse from "./Components/Sections/mouse/mouse"

class App extends Component{
  render() {
    return (
      <div className="App">
        <Nav />
        <Fullscreen />
        <Mouse/>
      </div>
    );
  }
}

export default App;