import React, { Component } from "react";
import styled from "styled-components";
import HeroTextBox from "./HeroTextBox";
import Logo from "./Logo";
const StyledHeader = styled.header`
	height: 95vh;
	background-image: linear-gradient(
			to right bottom,
			rgba(126, 213, 111, 0.8),
			rgba(40, 180, 131, 0.8)
		),
		url(/img/hero.jpg);
	background-size: cover;
	background-position: top;
	clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
	position: relative;
`;
class Header extends Component {
	render() {
		return (
			<StyledHeader>
				<Logo />
				<HeroTextBox main="Outdoors" sub="Is where life happens" />
			</StyledHeader>
		);
	}
}

export default Header;
