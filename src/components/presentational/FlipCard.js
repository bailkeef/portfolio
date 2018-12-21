import React, { Component } from "react";

export default class TourFlipCard extends Component {
	render() {
		const { className, children } = this.props;
		let classes = className ? `${className} flip-card` : "flip-card";
		return <div className={classes}>{children}</div>;
	}
}

export class FlipCardFront extends Component {
	render() {
		const { className, children } = this.props;
		const flipCardBackClasses = "flip-card__side flip-card__side--front";
		let classes = className
			? `${className} ${flipCardBackClasses}`
			: flipCardBackClasses;
		return <div className={classes}>{children}</div>;
	}
}

export class FlipCardBack extends Component {
	render() {
		const { className, children } = this.props;
		const flipCardBackClasses =
			"flip-card__side flip-card__side--back flip-card__side--back-1";
		let classes = className
			? `${className} ${flipCardBackClasses}`
			: flipCardBackClasses;
		return <div className={classes}>{children}</div>;
	}
}
