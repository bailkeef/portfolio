import React, { Component } from "react";

class Button extends Component {
	render() {
		return (
			<a href={this.props.href || "#"} className="btn btn--white btn--animated">
				Discover our tours
			</a>
		);
	}
}

export default Button;
