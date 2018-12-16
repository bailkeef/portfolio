import React, { Component } from "react";
class GridColumn extends Component {
	getSize = () => {
		return `grid__row__col--${this.props.size}`;
	};
	render() {
		return <div className={this.getSize()}>{this.props.children}</div>;
	}
}

export default GridColumn;
