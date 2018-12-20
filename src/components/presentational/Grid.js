import React, { Component } from "react";
class Grid extends Component {
	render() {
		const className = this.props.className
			? `grid ${this.props.className}`
			: "grid";
		return <div className={className}>{this.props.children}</div>;
	}
}

export default Grid;
