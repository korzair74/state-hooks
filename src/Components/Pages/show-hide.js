import React, { Component } from "react";

export default class ShowHide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  toggle = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className='container-wrapper'>
        <h1>Show and Hide</h1>
        <div className='wrapper'>
          <button className='btn' onClick={this.toggle}>
            {this.state.show ? "Show" : "Hide"}
          </button>
        </div>
        <h1>{this.state.show ? "Show" : ""}</h1>
      </div>
    );
  }
}
