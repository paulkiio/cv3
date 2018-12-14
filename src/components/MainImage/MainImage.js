import React, { Component } from "react";
import { Col } from 'reactstrap';
import './MainImage.sass'

export default class MainImage extends Component {
	state = {}
	render () {
		return (
			<Col id="main-image-container" lg={{size: 6}} md={{size: 6}} sm={{size: 12, order: 1}} xs={{size: 12, order: 1}} />
		);
	}
}