import React, { Component } from "react";
import PropTypes from "prop-types";

class FontIcon extends Component {
	static propTypes = {
		type: PropTypes.string.isRequired
	};

	render() {
		let className = this.props.className
			? `${this.props.className} icon-${this.props.type}`
			: `icon-${this.props.type}`;
		return <i className={className} />;
	}
}

export default FontIcon;
