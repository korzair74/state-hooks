import React, { Component } from "react";

export default class ChangeColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      value: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
    event.preventDefault();
  };
  onSubmit = (event) => {
    this.setState({
      color: this.state.value,
    });
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
          <form onSubmit={this.handleSubmit} className='form-wrapper'>
            <input
              type='text'
              placeholder='Color'
              onChange={this.handleChange}
            />
            <button
              style={{ color: this.state.color }}
              className='btn'
              value={this.state.color}
              onClick={this.handleSubmit}>
              Change Color
            </button>
          </form>
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
