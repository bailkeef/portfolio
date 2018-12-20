import React, { Component } from "react";
import Main from "./presentational/pages/Main";

class App extends Component {
	componentDidMount = () => {
		document.title = "Natours - Where life happens";
	};
	render() {
		return <Main />;
	}
}

export default App;
