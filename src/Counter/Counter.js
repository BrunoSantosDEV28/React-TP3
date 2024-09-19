import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <h1>Contador: {this.state.count}</h1>
        {}
        <button onClick={this.increment}>Incrementar</button>
        {}
        <button onClick={this.reset}>Resetar</button>
      </div>
    );
  }
}

export default Counter;
