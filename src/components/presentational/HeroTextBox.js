import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
class HeroTextBox extends Component {
	static propTypes = {
		main: PropTypes.string,
		sub: PropTypes.string
	};
	render() {
		return (
			<div className="hero__text-box">
				<h1 className="heading-primary">
					<span className="heading-primary--main">{this.props.main || ""}</span>
					<span className="heading-primary--sub">{this.props.sub || ""}</span>
				</h1>
				<Button variant="cool" color="white" animated popUpAnimation>Discover our tours</Button>
			</div>
		);
	}
}

export default HeroTextBox;
