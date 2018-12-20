import React, { Component } from "react";
import Card from "./Card";
import FontIcon from "./FontIcon";
import Typography from "./Typography";

const variantClasses = {
	text: "btn-text",
	cool: "btn btn--white btn--animated"
};

class FeatureBox extends Component {
	getVariant = () => {
		const { className, variant, children, iconName, title } = this.props;
		let classes = className
			? `${className} ${variantClasses[variant]}`
			: variantClasses[variant];
		return (
			<Card className={classes}>
				<FontIcon className="feature-box__icon" type={iconName} />
				<Typography variant="h3">{title}</Typography>
				<Typography variant="p" className="feature-box__text">
					{children}
				</Typography>
			</Card>
		);
	};
	render() {
		return this.getVariant();
	}
}

export default FeatureBox;
