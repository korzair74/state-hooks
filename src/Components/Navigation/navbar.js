import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
	render() {
		return (
			<div className='navbar-wrapper'>
				<div className='nav-link-wrapper'>
					<NavLink exact to='/' activeClassName='nav-link-active'>
						HOME
					</NavLink>
				</div>
				<div className='nav-link-wrapper'>
					<NavLink to='/counter' activeClassName='nav-link-active'>
						COUNTER
					</NavLink>
				</div>
				<div className='nav-link-wrapper'>
					<NavLink to='/toggle' activeClassName='nav-link-active'>
						TOGGLE
					</NavLink>
				</div>
				<div className='nav-link-wrapper'>
					<NavLink
						exact
						to='/font-sizer'
						activeClassName='nav-link-active'>
						FONT SIZER
					</NavLink>
				</div>
				<div className='nav-link-wrapper'>
					<NavLink
						exact
						to='/align'
						activeClassName='nav-link-active'>
						ALIGN
					</NavLink>
				</div>
				<div className='nav-link-wrapper'>
					<NavLink
						exact
						to='/show-hide'
						activeClassName='nav-link-active'>
						SHOW HIDE
					</NavLink>
				</div>
				<div className='nav-link-wrapper'>
					<NavLink
						exact
						to='/clock'
						activeClassName='nav-link-active'>
						CLOCK
					</NavLink>
				</div>
				<div className='nav-link-wrapper'>
					<NavLink
						exact
						to='/change-color'
						activeClassName='nav-link-active'>
						CHANGE COLOR
					</NavLink>
				</div>
			</div>
		);
	}
}
