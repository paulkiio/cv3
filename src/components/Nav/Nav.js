import React, { Component } from 'react';
import './Nav.sass';
import { stack as Menu } from 'react-burger-menu';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import routes from "../Routes";

export default class Nav extends Component {
	state = {}
	showSettings = (event) => {
		event.preventDefault();
	}
	render () {
		return (
			<Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
				<Router>
					<ul>
						<li className="menu-item">
							<Link to="/">Home</Link>
						</li>
						<li className="menu-item">
							<Link to="/Resume">Resume</Link>
						</li>
						<li className="menu-item">
							<Link to="/Resume">Work</Link>
						</li>
						{/* <li onClick={this.showSettings} className="menu-item--small" href="">
							Settings
						</li> */}

						{routes.map(route => (
						<Route
							key={route.path}
							path={route.path}
							component={route.component}
						/>
						))}
					</ul>
				</Router>
			</Menu>
		)
	}
}