import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import { Component } from "react";
import Fullscreen from "./Components/Sections/fullscreen/Fullscreen"
import WaveApp from "./Components/Sections/wavShape/WavShape";

class App extends Component{
  render() {
    return (
      <div className="App">
        <Nav />
        <Fullscreen />
        <WaveApp/>
      </div>
    );
  }
}

export default App;