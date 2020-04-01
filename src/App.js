import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import { Component } from "react";
import Fullscreen from "./Components/Sections/fullscreen/Fullscreen";
import Sidedrow from "./Components/Sidedrow/Sidedrow";
import Backdrop from "./Components/Backdrow/Backdrow";
import Services from "./Components/Sections/Services/Services";
import About from "./Components/Sections/About/About";
import Sucess from "./Components/Sections/Success/Sucesss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pricing from "./Components/Sections/Pricing/Pricing";
import Standard from "./Components/Sections/Payments/standard";
import Popular from "./Components/Sections/Payments/popular";
import Premium from "./Components/Sections/Payments/premium";
import Project from "./Components/Sections/Projects/Project";
import Contact from "./Components/Sections/Contact/Contact";
import Footer from "./Components/Sections/Footer/footer";

class App extends Component {
  state = {
    sideDrowerOpen: false
  };

  SidrawerClickHandler = () => {
    const currentState = this.sideDrowerOpen;
    this.setState({ sideDrowerOpen: !currentState });
    console.log("click happened");
  };
  BackdrowerClickHandler = () => {
    this.setState({ sideDrowerOpen: false });
  };
  render() {
    let Backdrower;
    if (this.state.sideDrowerOpen) {
      Backdrower = <Backdrop close={this.BackdrowerClickHandler} />;
    }
    return (
      <Router>
        <div className="App">
          <Nav show={this.SidrawerClickHandler} />
          <Fullscreen />
          <section className="divider"></section>
          <Sidedrow
            open={this.state.sideDrowerOpen}
            close={this.BackdrowerClickHandler}
          />
          {Backdrower}
          <Services />
          <About />
          <Pricing />
          <Project />
          <Contact />
          <Footer />
          <Switch>
            <Route path="/success" component={Sucess} />
            <Route path="/standard-payment" component={Standard} />
            <Route path="/popular-payment" component={Popular} />
            <Route path="/Premium-payment" component={Premium} />
          </Switch>
          <br />
        </div>
      </Router>
    );
  }
}

export default App;
