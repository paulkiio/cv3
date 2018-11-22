import React, { Component } from 'react';
import './MainContent.sass';
import { Col } from "reactstrap";

export default class MainContent extends Component {
	state = {}
	render () {
		return (
			<Col id="main-content" lg="6" md="6" xs="12">
				<h1>Main Content Area</h1>
			</Col>
		);
	}
}