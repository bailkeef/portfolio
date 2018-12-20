import React, { Component } from "react";

const variantClasses = {
	text: "btn-text",
	cool: "btn btn--white btn--animated"
};

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
