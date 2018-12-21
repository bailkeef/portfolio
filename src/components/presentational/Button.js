import React, { Component } from "react";

const getClass = (type, color = "white") => {
	const variantClasses = {
		text: "btn-text",
		cool: `btn btn--${color} btn--animated`
	};
	return variantClasses[type];
};

class Button extends Component {
	getVariant = () => {
		const { className, variant, href, children, color } = this.props;
		let classes = className
			? `${className} ${getClass(variant, color)}`
			: getClass(variant, color);
		return (
			<a href={href || "#"} className={classes}>
				{children}
			</a>
		);
	};
	render() {
		return this.getVariant();
	}
}

export default Button;
