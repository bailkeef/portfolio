import React, { Component } from "react";

const variantClasses = {
	h1: "heading-primary",
	h2: "heading-secondary",
	h3: "heading-tertiary",
	p: "paragraph"
};

class Typography extends Component {
	getVariant = variant => {
		let Component = variant;
		let classes = this.props.className
			? `${this.props.className} ${variantClasses[variant]}`
			: variantClasses[variant];
		return (
			<Component
				className={classes}
			>
				{this.props.children}
			</Component>
		);
	};
	render() {
		return this.getVariant(this.props.variant);
	}
}

export default Typography;
