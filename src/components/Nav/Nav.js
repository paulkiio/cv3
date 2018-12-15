import React, { Component } from 'react';
import './Nav.sass';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
	constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
	}

	handleStateChange (state) {
		this.setState({ menuOpen: state.isOpen });
	}

	closeMenu () {
		this.setState({ menuOpen: false });
	}

	render () {
		return (
			<Menu pageWrapId={ 'page-wrap' }
						outerContainerId={ 'outer-container' }
						right
						isOpen={ this.state.menuOpen }
						onStateChange={ (state) => this.handleStateChange(state) }
			>
				<ul>
					<li className='menu-item'>
						<Link to='/' onClick={ () => this.closeMenu() }>Home</Link>
					</li>
					<li className='menu-item'>
						<Link to='/resume' onClick={ () => this.closeMenu() }>Resume</Link>
					</li>
					<li className='menu-item'>
						<Link to='/work' onClick={ () => this.closeMenu() }>Work</Link>
					</li>
				</ul>
			</Menu>
		)
	}
}