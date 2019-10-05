import React, { Component } from 'react';
import './Nav.sass';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelopeSquare } from 'react-icons/fa';

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
		function year () {
			const year = new Date().getFullYear();
			return year;
		}

		return (
		<Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right isOpen={this.state.menuOpen} onStateChange={state => this.handleStateChange(state)}>
        <ul>
          <li className="menu-item">
            <Link to="/" onClick={() => this.closeMenu()}>
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/resume" onClick={() => this.closeMenu()}>
              Resume
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/work" onClick={() => this.closeMenu()}>
              Work
            </Link>
          </li>
        </ul>
        <p className="social">
          <a href="https://www.instagram.com/the_pkw1/" target="_blank" rel="noopener noreferrer" className="mr-2 mb-2">
            <FaInstagram size="2em" color='#c32aa3'/>
          </a>
          <a href="https://github.com/pwathome" target="_blank" rel="noopener noreferrer" className="mr-2 mb-2">
            <FaGithub size="2em" color='white'/>
          </a>
          <a href="https://www.linkedin.com/in/paulwathome" target="_blank" rel="noopener noreferrer" className="mr-2 mb-2">
            <FaLinkedin size="2em" color='#007bb5' />
          </a>
        </p>
				<a href='mailto: wathome.paul@gmail.com' className='text-center'>
					<FaEnvelopeSquare size="1.5em"/>
				</a>
				<footer className='text-center'>
					&copy; Kiio Labs <span>{ year() }</span>
				</footer>
      </Menu>
		);
	}
}