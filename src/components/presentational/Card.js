import React, { Component } from "react";


class Card extends Component {
	getVariant = () => {
		const { className, children } = this.props;
		let classes = className ? `${className} feature-box` : "feature-box";
		return <div className={classes}>{children}</div>;
	};
	render() {
		return this.getVariant();
	}
}

export default Card;
