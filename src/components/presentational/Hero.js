import React, { Component } from "react";
import HeroTextBox from "./HeroTextBox";
import HeaderLogo from "./HeroLogo";

class Hero extends Component {
	render() {
		return (
			<header className="hero">
				<HeaderLogo />
				<HeroTextBox main="Outdoors" sub="Is where life happens" />
			</header>
		);
	}
}

export default Hero;
