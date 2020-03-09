import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import { Component } from "react";
import Fullscreen from "./Components/Sections/fullscreen/Fullscreen";
import Sidedrow from "./Components/Sidedrow/Sidedrow";
import Backdrop from "./Components/Backdrow/Backdrow";
class App extends Component {
  state = {
    sideDrowerOpen: false
  };

  SidrawerClickHandler = () => {
    const currentState = this.sideDrowerOpen;
    this.setState({ sideDrowerOpen: !currentState });
    console.log("click happened")
  };
  BackdrowerClickHandler = () => {
    this.setState({ sideDrowerOpen: false });
  };
  render() {
    let Backdrower;
    let Sidedrower;
    if (this.state.sideDrowerOpen) {
      Backdrower = <Backdrop close={this.BackdrowerClickHandler} />;
      Sidedrower = <Sidedrow/>

    }
    return (
      <div className="App">
        <Nav show={this.SidrawerClickHandler} />
        <Fullscreen />
        <section className="divider"></section>
        {/* other components */}
        {/* <Sidedrow open={this.state.sideDrowerOpen} /> */}
        {Sidedrower}
        {Backdrower}
        <br />
        <br />
      </div>
    );
  }
}

export default App;
