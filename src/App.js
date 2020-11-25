import React, { Component } from "react";
import { render } from "react-dom";
import Keypad from "./components/Keypad";
import Output from "./components/Output";
import "./App.css";

class App extends Component {
  state = {
    result: "",
  };
  buttonPressed = (buttonName) => {
    if (buttonName === "=") {
      this.calculate();
    } else if (buttonName === "C") {
      this.reset();
    } else if (buttonName === "CE") this.backspace();
    this.setState({
      result: this.state.result + buttonName,
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calc-body">
          <Output result={this.state.result} />
          <Keypad buttonPressed={this.buttonPressed} />
        </div>
      </div>
    );
  }
}

export default App;
