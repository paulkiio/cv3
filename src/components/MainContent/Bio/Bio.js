import React, { Component } from 'react';
import './Bio.sass';
import { Col, Row, Card } from "reactstrap";

export default class Bio extends Component {
	render() {
		function getCurrentDay () {
			const today = new Date(),
						day = today.getDay(),
						dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"],
						element = document.getElementById('currentDay');
		}
		return (
			<Col className="mt-5" sm="12" md="6" md="offset-md-3">
				<h1>Hi, I'm Paul Wathome.</h1>
				<p class="lead mb-3">Developer &amp; Tech Geek</p>
					<p>
						Currently based in Indianapolis Indiana. I am passionated about leveraging technology to solve complex problems. When I'm not writing code some of my hobbies include playing soccer, immersing myself in other cultures through travel, DJ-ing and working on my cars. Have look around and have a great <span id="currentDay">day</span> :D
					</p>

					<p>
						<a href="#" className="mr-2 mb-2">LinkedIn</a>
						<a href="#" className="mr-2 mb-2">GitHub</a>
						<a href="#" className="mr-2 mb-2">Instagram</a>
      	 	</p>

				<h2 className="mb-4 mt-4">Services</h2>
				<Row>
					<Col lg="6" md="6">
						<div className="media custom-media  d-block">
							<div className="icon mr-3"><span className="ion-android-cart"></span></div>
							<div className="media-body">
								<h3 className="mt-0"><a href="#">Websites</a></h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed obcaecati totam.</p>
							</div>
						</div>
					</Col>
					<Col lg="6" md="6">
						<div className="media custom-media  d-block">
							<div className="icon mr-3"><span className="ion-bonfire"></span></div>
							<div className="media-body">
								<h3 className="mt-0"><a href="#">Electronics Repair</a></h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed obcaecati, totam.</p>
							</div>
						</div>
					</Col>
				</Row>

			</Col>
		);
	}
}