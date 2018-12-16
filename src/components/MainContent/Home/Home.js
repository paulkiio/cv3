import React, { Component } from 'react';
import './Home.sass';
import { Col, Row } from 'reactstrap';
import { MdWeb } from 'react-icons/md';
import { MdDevicesOther } from 'react-icons/md';

export default class Home extends Component {
	render() {

		function getCurrentDay () {
			const today = new Date(),
						day = today.getDay(),
						dayList = ['Sunday','Monday','Tuesday','Wednesday ','Thursday','Friday','Saturday'];
			return dayList[day];
		}

		return (
			<Col className='mt-5' lg='10' md='10' sm='10' xs={{ size: 10, offset: 1 }}>
				<h1>Hi, I'm Paul Wathome</h1>
				<p className='lead mb-3'>Developer &amp; Tech Geek</p>
					<p>
						Currently based in Indianapolis Indiana. I am passionated about leveraging technology to solve complex problems. When I'm not writing code, some of my hobbies include playing soccer, immersing myself in other cultures through travel, DJ-ing and working on my cars. Have look around and have a fantastic <span id='currentDay'>{ getCurrentDay() }</span> 😉
					</p>

					<p className='social-links'>
						<a href='https://www.linkedin.com/in/paulwathome' target='_blank' rel='noopener noreferrer' className='mr-2 mb-2'>LinkedIn</a>
						<a href='https://github.com/paulkiio' target='_blank' rel='noopener noreferrer' className='mr-2 mb-2'>GitHub</a>
						<a href='https://www.instagram.com/the_pkw1/' target='_blank' rel='noopener noreferrer' className='mr-2 mb-2'>Instagram</a>
      	 	</p>

				<h2 className='mb-4 mt-4'>Services</h2>
				<Row>
					<Col lg='6' md='6' xs='6'>
						<div className='media custom-media  d-block'>
							<span><MdWeb size='5em'/></span>
							<div className='media-body'>
								<h4 className='mt-3'>
									<a href='/'rel='noopener noreferrer' target='_blank'>Websites</a>
								</h4>
								<p>
									Quality, Responsive, Fully-customised website at affordable prices.
								</p>
							</div>
						</div>
					</Col>
					<Col lg='6' md='6' xs='6'>
						<div className='media custom-media  d-block'>
							<span><MdDevicesOther size='5em'/></span>
							<div className='media-body'>
								<h4 className='mt-3'>
									<a href='http://www.kiiolabs.info/' rel='noopener noreferrer' target='_blank'>Tech Repair</a>
								</h4>
								<p>
									Toubleshooting and repair for all your favorite consumer electronics.
								</p>
							</div>
						</div>
					</Col>
				</Row>

			</Col>
		);
	}
}