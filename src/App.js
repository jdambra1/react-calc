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
      return;
    } else if (buttonName === "C") {
      this.reset();
      return;
    } else if (buttonName === "CE") this.backspace();
    this.setState({
      result: this.state.result + buttonName,
    });
    return;
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
    return;
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
