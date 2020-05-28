import React, { Component } from "react";

const red = "#b71c1c";
const green = "#1b5e20";
export default class ChangeColor extends Component {
  constructor(props) {
    super(props);
    this.state = { color: red };
  }

  changeColor = () => {
    const newColor = this.state.color === green ? red : green;
    this.setState({ color: newColor });
  };

  colorPicker = () => {
    const picker = "#" + Math.random().toString(16).substr(2, 6).toUpperCase();
    document.body.style.backgroundColor = picker;
  };

  render() {
    return (
      <div className='button-container'>
        <h1>Change Color</h1>
        <div className='button-wrapper'>
          <h2 style={{ color: this.state.color }}>My Color Changes</h2>
        </div>
        <div className='button-wrapper'>
          <button
            style={{ color: this.state.color }}
            className='btn'
            onClick={this.changeColor}>
            Change Color
          </button>
        </div>
        <div className='button-wrapper'>
          <button className='btn' onClick={this.colorPicker}>
            Random BackgroundColor
          </button>
        </div>
      </div>
    );
  }
}
