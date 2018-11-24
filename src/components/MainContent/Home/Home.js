import React, { Component } from 'react';
import './Home.sass'

export default class Home extends Component {
	state = { }
	render() {
		return <h1>
        Hello. I am
				<span>
					<span>a Web Developer.</span>
					<span>a Freelancer.</span>
					<span>a JavaScript Fan.</span>
					<span>a Soccer Player.</span>
					<span>a DJ.</span>
					<span>an Audi Enthusiast.</span>
					<span>a World Traveller.</span>
					<span>a Coffee Lover.</span>
				</span>
         I currently live in Indianapolis IN. I am passionated about leveraging technology to solve complex problems.
      </h1>;
	}
}