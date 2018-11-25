import React, { Component } from 'react';
import './Home.sass'

export default class Home extends Component {
	constructor(props) {
		super(props);
		// this.textRotater = this.textRotater.bind(this);
	}

	textRotater = () => {
		let content = [
			' a Web Developer.',
			' a Freelancer.',
			' a JavaScript Fan.',
			' a Soccer Player.',
			' a DJ.',
			' an Audi Enthusiast.',
			' a World Traveller.',
			' a Coffee Lover.'
			],
			rotaterSpan = document.getElementById("rotater");

		if (rotaterSpan !== null) {
			content.forEach((ea, i) => {
				setTimeout(() => {
					rotaterSpan.innerHTML = ea;
				}, 2000);
			});
		}
	}

	render () {
		return (
			<h1>
				Hello. I am
				<span id="rotater" onLoad={this.textRotater()}>
				</span>
				I currently live in Indianapolis IN. I am passionated about leveraging technotextRotatery to solve complex problems.
      </h1>
		);
	}
}