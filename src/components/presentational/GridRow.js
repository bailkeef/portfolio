import React, { Component } from "react";
class GridRow extends Component {
	render() {
		return <div className="grid__row">{this.props.children}</div>;
	}
}

export default GridRow;
