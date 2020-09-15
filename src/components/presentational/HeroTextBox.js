import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
class HeroTextBox extends Component {
	static propTypes = {
		main: PropTypes.string,
		sub: PropTypes.string
	};
	static defaultProps = {
		src: "./img/bailey-1.png",
	};
	render() {
		return (
			<div className="hero__text-box">
				<h1 className="heading-primary">
					<span className="heading-primary--main">{this.props.main || ""}</span>
					<span className="heading-primary--sub">{this.props.sub || ""}</span>
					<Button className="btn--animated" variant="cool" color="white" animated popUpAnimation href="#projects">View My Projects</Button>
				</h1>
				<img src={this.props.src} className="hero__profile-pic"/>
		</div>
		);
	}
}

export default HeroTextBox;
