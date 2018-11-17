import React, { Component } from 'react'
import './Nav.sass'
import { stack as Menu } from 'react-burger-menu'

export default class Nav extends Component {
	state = {  }
	showSettings = (event) => {
		event.preventDefault();
	}
	render() {
		return (
			<Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right noOverlay>
				<a id="home" className="menu-item" href="/">Home</a>
				<a id="about" className="menu-item" href="/about">About</a>
				<a id="contact" className="menu-item" href="/contact">Contact</a>
				<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
		);
	}
}