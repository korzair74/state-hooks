import React, { Component } from 'react';

import '../../App.css';

export default class Toggle extends Component {
	constructor(props) {
		super(props);

		this.state = {
			on: false,
		};
	}

	toggle = () => {
		this.setState({
			on: !this.state.on,
		});
	};

	render() {
		return (
			<div className='toggle-container'>
				<h1>This Toggle</h1>
				<div className='toggle-wrapper'>
					<button className='btn' onClick={this.toggle}>
						{this.state.on === true ? 'Hello' : 'Goodbye'}
					</button>
				</div>
				<h1>{this.state.on === true ? 'Hello' : 'Goodbye'}</h1>
			</div>
		);
	}
}
