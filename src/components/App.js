import React, { Component, Fragment } from "react";
import Hero from "./presentational/Hero";

class App extends Component {
	componentDidMount = () => {
		document.title = "Natours - Where life happens";
	};
	render() {
		return <Hero />;
	}
}

export default App;
