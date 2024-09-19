import React, { Component } from "react";

const DisplayCount = ({ count }) => {
  return <h1>Contador: {count}</h1>;
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <DisplayCount count={this.state.count} />
        <button onClick={this.increment}>Incrementar</button>
      </div>
    );
  }
}

export default Counter;
