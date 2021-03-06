import React, { Component } from "react";

export default class ChangeColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      newColor: "",
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      color: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      newColor: this.state.color,
      color: "",
    });
  };

  colorPicker = () => {
    const picker = "#" + Math.random().toString(16).substr(2, 6).toUpperCase();
    document.body.style.backgroundColor = picker;
  };

  render() {
    return (
      <div className='container-wrapper'>
        <h1>Change Color</h1>
        <div className='wrapper'>
          <h2 style={{ color: this.state.newColor }}>My Color Changes</h2>
        </div>
        <div className='wrapper'>
          <form onSubmit={this.handleSubmit} className='form-wrapper'>
            <input
              type='text'
              placeholder='Color'
              onChange={this.handleChange}
              value={this.state.color}
            />
            <button
              type='submit'
              style={{ color: this.state.newColor }}
              className='btn'>
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
