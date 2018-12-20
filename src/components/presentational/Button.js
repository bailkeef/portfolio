import React, { Component } from "react";

const variantClasses = {
	text: "btn-text",
	cool: "btn btn--white btn--animated"
};

class Button extends Component {
	getVariant = () => {
		const { className, variant, href, children } = this.props;
		let classes = className
			? `${className} ${variantClasses[variant]}`
			: variantClasses[variant];
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
