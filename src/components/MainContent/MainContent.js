import React, { Component } from 'react';
import './MainContent.sass';
import { Col } from "reactstrap";
import routes from "../Routes";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class MainContent extends Component {
	state = {}
	render () {
		return (
			<Router>
				<Col id="main-content" lg="6" md="6" xs="12">
				<h1>Main Content Area</h1>


				{routes.map(route => (
						<Route
							key={route.path}
							path={route.path}
							component={route.component}
						/>
				))}
				</Col>
			</Router>
		);
	}
}