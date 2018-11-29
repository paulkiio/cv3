import React, { Component } from 'react';
import './MainContent.sass';
import routes from '../../Routes';
import { Col } from "reactstrap";
import { Route } from "react-router-dom";

export default class MainContent extends Component {
	state = {}
	render () {
		return (
			<Col id="main-content" lg={{size: 6, order: 1}} md={{size: 6, order: 1}} sm={{size: 12, order: 2}} xs={{size: 12, order: 2}}>
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