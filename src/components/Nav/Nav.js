import React, { Component } from 'react';
import './Nav.sass';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom'

export default class Nav extends Component {
	state = {}
	showSettings = (event) => {
		event.preventDefault();
	}
	render () {
		return (
			<Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right>
				<ul>
					<li className="menu-item">
						<Link to="/">Home</Link>
					</li>
					<li className="menu-item">
						<Link to="/resume">Resume</Link>
					</li>
					<li className="menu-item">
						<Link to="/work">Work</Link>
					</li>
					{/* <li onClick={this.showSettings} className="menu-item--small" href="">
						Settings
					</li> */}
				</ul>
			</Menu>
		)
	}
}