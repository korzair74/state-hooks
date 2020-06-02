import React, { Component } from "react";
export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString(),
    });
  }
  render() {
    return (
      <div className='container-wrapper'>
        <h1>Clock Component</h1>
        <div className='wrapper'>
          <h2>{this.state.time}</h2>
        </div>
      </div>
    );
  }
}
