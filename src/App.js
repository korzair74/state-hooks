import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './Components/Navigation/navbar';
import Home from './Components/Pages/home';
import Align from './Components/Pages/align';
import Counter from './Components/Pages/counter';
import Toggle from './Components/Pages/toggle';
import ShowHide from './Components/Pages/show-hide';
import Clock from './Components/Pages/clock';
import ChangeColor from './Components/Pages/change-color';
import FontSizer from './Components/Pages/font-sizer';
import NoMatch from './Components/Pages/nomatch';

function App() {
	return (
		<Router>
			<div className='container'>
				<NavBar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/counter' component={Counter} />
					<Route path='/toggle' component={Toggle} />
					<Route path='/font-sizer' component={FontSizer} />
					<Route path='/align' component={Align} />
					<Route path='/show-hide' component={ShowHide} />
					<Route path='/clock' component={Clock} />
					<Route path='/change-color' component={ChangeColor} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
