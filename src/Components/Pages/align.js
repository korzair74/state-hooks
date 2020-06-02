import React, { Component } from "react";

export default class Align extends Component {
  constructor() {
    super();

    this.state = {
      position: "center",
    };
  }

  handlePosition = (newPosition) => {
    return this.setState({ position: newPosition });
  };

  render() {
    return (
      <div className='container'>
        <div className='container-wrapper'>
          <h1>Align Component</h1>
          <div className='wrapper'>
            <button className='btn' onClick={() => this.handlePosition("Left")}>
              Left
            </button>
            <button
              className='btn'
              onClick={() => this.handlePosition("Center")}>
              Center
            </button>
            <button
              className='btn'
              onClick={() => this.handlePosition("Right")}>
              Right
            </button>
          </div>
        </div>
        <div>
          <h2 style={{ textAlign: this.state.position }}>
            {this.state.position}
          </h2>
        </div>
      </div>
    );
  }
}
