import React, { Component } from 'react';
import './MainContent.sass';
import { Col } from "reactstrap";
import routes from "../Routes";
import { Route } from "react-router-dom";

export default class MainContent extends Component {
	state = {}
	render () {
		return (
			<Col id="main-content" lg="6" md="6" sm="12" xs="12">
			{routes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						component={route.component}
					/>
			))}
			</Col>
		);
	}
}