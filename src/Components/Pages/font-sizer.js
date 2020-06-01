import React, { Component } from "react";

export default class FontSizer extends Component {
  constructor() {
    super();

    this.state = {
      fontSize: 30,
    };
  }

  handleFontChanger = (number) => {
    this.setState({
      fontSize: this.state.fontSize + number,
    });
  };

  render() {
    return (
      <div className='container-wrapper'>
        <h1>Change Font Size</h1>
        <div>
          <button className='btn' onClick={() => this.handleFontChanger(+5)}>
            Font Size +
          </button>

          <button className='btn' onClick={() => this.handleFontChanger(-5)}>
            Font Size -
          </button>
        </div>
        <div style={{ fontSize: `${this.state.fontSize}px` }}>
          {this.state.fontSize}px
        </div>
      </div>
    );
  }
}
