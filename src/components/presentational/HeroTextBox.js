import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const HeadingPrimary = styled.h1`
	color: #fff;
	text-transform: uppercase;
	text-align: center;
`;
const HeadingPrimaryMain = styled.span`
	display: inline-block;
	font-size: 60px;
	font-weight: 400;
	letter-spacing: 35px;
	margin-left: 35px;
`;
const HeadingPrimarySub = styled.span`
	display: inline-block;
	font-size: 20px;
	font-weight: 700;
	letter-spacing: 17.4px;
	margin-left: 17.4px;
`;
const TextBox = styled.div`
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
class HeroTextBox extends Component {
	static propTypes = {
		main: PropTypes.string,
		sub: PropTypes.string
	};
	render() {
		return (
			<HeadingPrimary>
				<TextBox>
					<HeadingPrimaryMain>{this.props.main || ""}</HeadingPrimaryMain>
					<HeadingPrimarySub>{this.props.sub || ""}</HeadingPrimarySub>
				</TextBox>
			</HeadingPrimary>
		);
	}
}

export default HeroTextBox;
