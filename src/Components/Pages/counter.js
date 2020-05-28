import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  countUp = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  countDown = (event) => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className='button-container'>
        <h1>Counter</h1>
        <div className='button-wrapper'>
          <button className='btn' onClick={this.countUp}>
            +
          </button>
          <button className='btn' onClick={this.countDown}>
            -
          </button>
        </div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
