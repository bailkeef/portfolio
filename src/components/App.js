import React, { Component, Fragment } from "react";
import Hero from "./presentational/Hero";
import Grid from "./presentational/Grid";
import GridRow from "./presentational/GridRow";
import GridColumn from "./presentational/GridColumn";

class App extends Component {
	componentDidMount = () => {
		document.title = "Natours - Where life happens";
	};
	render() {
		return (
			<Fragment>
				<Hero />
				<Grid>
					<GridRow>
						<GridColumn size={12}>Col 1 of 1</GridColumn>
					</GridRow>
					<GridRow>
						<GridColumn size={6}>Col 1 of 12</GridColumn>
						<GridColumn size={6}>Col 1 of 12</GridColumn>
					</GridRow>
					<GridRow>
						<GridColumn size={4}>Col 4 of 12</GridColumn>
						<GridColumn size={4}>Col 4 of 12</GridColumn>
						<GridColumn size={4}>Col 4 of 12</GridColumn>
					</GridRow>
					<GridRow>
						<GridColumn size={6}>Col 6 of 12</GridColumn>
						<GridColumn size={6}>Col 6 of 12</GridColumn>
					</GridRow>
					<GridRow>
						<GridColumn size={3}>Col 3 of 12</GridColumn>
						<GridColumn size={3}>Col 3 of 12</GridColumn>
						<GridColumn size={3}>Col 3 of 12</GridColumn>
						<GridColumn size={3}>Col 3 of 12</GridColumn>
					</GridRow>
					<GridRow>
						<GridColumn size={3}>Col 3 of 12</GridColumn>
						<GridColumn size={3}>Col 3 of 12</GridColumn>
						<GridColumn size={6}>Col 6 of 12</GridColumn>
					</GridRow>
					<GridRow>
						<GridColumn size={3}>Col 3 of 12</GridColumn>
						<GridColumn size={9}>Col 9 of 12</GridColumn>
					</GridRow>
				</Grid>
			</Fragment>
		);
	}
}

export default App;
