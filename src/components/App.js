import React, { Component } from "react";
import Main from "./presentational/pages/Main";

class App extends Component {
	componentDidMount = () => {
		document.title = "Bailey Nicole Keefer";
	};
	render() {
		return <Main />;
	}
}

export default App;
