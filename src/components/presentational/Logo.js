import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LogoImg = styled.img`
	height: ${props => props.height};
`;
const LogoBox = styled.div`
	position: absolute;
	top: 40px;
	left: 40px;
`;
class Logo extends Component {
	static propTypes = {
		src: PropTypes.string,
		height: PropTypes.string
	};
	static defaultProps = {
		src: "/img/logo-white.png",
		height: "35px"
	};
	render() {
		return (
			<LogoBox className={this.props.className}>
				<LogoImg src={this.props.src} height={this.props.height} />
			</LogoBox>
		);
	}
}

export default Logo;
