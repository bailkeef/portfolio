import React, { Component } from "react";
import PropTypes from "prop-types";

class HeroLogo extends Component {
	static propTypes = {
		src: PropTypes.string,
		height: PropTypes.string
	};
	static defaultProps = {
		src: "/img/logo-white.png",
	};
	render() {
		return (
			<div className="hero__logo-box">
				<img src={this.props.src} className="hero__logo" alt="Logo"/>
			</div>
		);
	}
}

export default HeroLogo;
