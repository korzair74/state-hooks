import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClickCounter = (number) => {
    this.setState((state) => {
      return { count: state.count + number };
    });
  };

  render() {
    return (
      <div className='container-wrapper'>
        <h1>Counter</h1>
        <div className='wrapper'>
          <button className='btn' onClick={() => this.handleClickCounter(+1)}>
            +
          </button>
          <button className='btn' onClick={() => this.handleClickCounter(-1)}>
            -
          </button>
        </div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
