import React, { Component } from "react";
import FlipCard, { FlipCardBack, FlipCardFront } from "./FlipCard";
import Button from "./Button";
export default class ProjectFlipCard extends Component {
	render() {
		const { className, title, projectDescription, typeIndex, description } = this.props;
		return (
			<FlipCard className={className}>
				<FlipCardFront>
					<div
						className={`flip-card__picture flip-card__picture--${typeIndex}`}
					/>
					<h4 className="flip-card__header">
						<span
							className={`flip-card__header-span flip-card__header-span--${typeIndex}`}
						>
							{title}
						</span>
					</h4>
					<div className="flip-card__details">
						<ul>
							{description.map((desc, index) => {
								return <li key={index}>{desc}</li>;
							})}
						</ul>
					</div>
				</FlipCardFront>
				<FlipCardBack>
					<div className="flip-card__cta">
						<div className="flip-card__price-box">
							<p className="flip-card__price-value">{`${projectDescription}`}</p>
						</div>
						<Button variant="cool" href="#projects">Demo</Button>
					</div>
				</FlipCardBack>
			</FlipCard>
		);
	}
}
