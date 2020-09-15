import React, { Component } from "react";
import PropTypes from "prop-types";

class HeroLogo extends Component {
	static propTypes = {
		src: PropTypes.string,
		height: PropTypes.string
	};
	static defaultProps = {
		src: "/img/favicon.png",
		linkedin: "https://www.linkedin.com/in/baileykeefer/",
		linkedin_img: "/img/linkedin-white.png",
		github: "https://github.com/",
		github_img: "/img/github-logo-white.png",

	};
	render() {
		return (
			<div className="hero__logo-box">
				{/* <img src={this.props.src} className="hero__logo" alt="Logo"/> */}
				<a href={this.props.linkedin}>
					<img src={this.props.linkedin_img} className="hero__logo hero__logo--1" alt="Logo" />
				</a>
				<a href={this.props.github}>
					<img src={this.props.github_img} className="hero__logo hero__logo--2" alt="Logo" />
				</a>
			</div>
		);
	}
}

export default HeroLogo;
