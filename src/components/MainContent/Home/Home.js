import React, { Component } from 'react';
import './Home.css';
import { Col, Row } from 'reactstrap';
// import { MdWeb } from 'react-icons/md';
// import { MdDevicesOther } from 'react-icons/md';

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
				<a href='mailto:pkwdigital@gmail.com'>[AVAILABLE FOR HIRE]</a>
				<p className='lead mb-3'>Developer &amp; Tech Geek</p>
					<p>
						Currently based in Indianapolis Indiana. I am passionate about leveraging technology to solve complex problems. When I'm not writing code, some of my hobbies include playing soccer, immersing myself in other cultures through travel, DJ-ing and working on my cars. Have look around and have a fantastic <span id='currentDay'>{ getCurrentDay() }</span> 😉
					</p>

					<p className='social-links'>
						<a href='https://www.linkedin.com/in/paulwathome' target='_blank' rel='noopener noreferrer' className='mr-2 mb-2'>LinkedIn</a>
						<a href='https://github.com/pwathome' target='_blank' rel='noopener noreferrer' className='mr-2 mb-2'>GitHub</a>
						<a href='https://gitlab.com/pwathome' target='_blank' rel='noopener noreferrer' className='mr-2 mb-2'>GitLab</a>
						{/* <a href='https://twitter.com/encryptedkenyan/' target='_blank' rel='noopener noreferrer' className='mr-2 mb-2'>Twitter</a> */}
      	 			</p>

				<h2 className='mb-4 mt-4'>What I'm currently up to...</h2>
				<Row>
					<Col lg='6' md='6' xs='6'>
						<div className='media custom-media  d-block'>
							{/* <span><MdWeb size='5em'/></span> */}
							<div className='media-body'>
								<h4 className='mt-3'>
									<a href='http://example.com'rel='noopener noreferrer' target='_blank'>Freelancer @ Kiio Labs</a>
								</h4>
								<p>
									Develop and maintain various projects for clients. Always iterating & improving the internal processes.
								</p>
							</div>
						</div>
					</Col>
					<Col lg='6' md='6' xs='6'>
						<div className='media custom-media  d-block'>
							{/* <span><MdDevicesOther size='5em'/></span> */}
							<div className='media-body'>
								<h4 className='mt-3'>
									<a href='http://example.com' rel='noopener noreferrer' target='_blank'>Encrypted Kenyan</a>
								</h4>
								<p>
									Music makes the world make sense. <a href='https://www.mixcloud.com/encrypted_kenyan/' rel="noopener noreferrer" target='_blank'>here's</a> some mixes I've made over the years.
								</p>
							</div>
						</div>
					</Col>
				</Row>

			</Col>
		);
	}
}