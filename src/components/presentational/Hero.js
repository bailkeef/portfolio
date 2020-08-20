import React, { Component } from "react";
import HeroTextBox from "./HeroTextBox";
import HeaderLogo from "./HeroLogo";
import PropTypes from "prop-types";


class Hero extends Component {
	render() {
		return (
			<header className="hero">
				<HeaderLogo />
				<HeroTextBox main="BAILEY KEEFER" sub="Full Stack Engineer" />
			</header>
		);
	}
}

export default Hero;
