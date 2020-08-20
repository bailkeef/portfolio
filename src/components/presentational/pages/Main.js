import React, { Component, Fragment } from "react";
import Hero from "../Hero";
import Grid from "../Grid";
import GridRow from "../GridRow";
import GridColumn from "../GridColumn";
import Typography from "../Typography";
import Button from "../Button";
import FeatureBox from "../FeatureBox";
import TourFlipCard from "../TourFlipCard";
class Main extends Component {
	componentDidMount = () => {
		document.title = "Bailey Nicole Keefer";
	};
	render() {
		return (
			<Fragment>
				<Hero />
				<main>
					<section className="section-about">
						<div className="u-center-text u-margin-bottom--big">
							<Typography variant="h2" className="u-margin-bottom--small">
								Full Stack Software Engineer
							</Typography>
						</div>
						<Grid>
							<GridRow>
								<GridColumn size={6}>
									<Typography variant="h3" className="u-margin-bottom--small">
										Creative Problem Solver
									</Typography>
									<Typography variant="p">
										I am a continuous learner who is always looking for new ways to solve problems an produce results.
									</Typography>
									<Typography variant="h3" className="u-margin-bottom--small">
										Collaborative Team Member
									</Typography>
									<Typography variant="p">
										I have worked on many engineering teams, led a team of engineers, and understand that communication is the driving force of productivity.
									</Typography>
									<Button href="#" variant="text">
										Learn more &rarr;
									</Button>
								</GridColumn>
								<GridColumn size={6}>
									<div className="composition">
										<img
											src="/img/node-1.png"
											className="composition__photo composition__photo--p1"
											alt="Tour 1"
										/>
										<img
											src="/img/react-1.png"
											className="composition__photo composition__photo--p2"
											alt="Tour 2"
										/>
										<img
											src="/img/postgres-1.png"
											className="composition__photo composition__photo--p3"
											alt="Tour 3"
										/>
									</div>
								</GridColumn>
							</GridRow>
						</Grid>
					</section>
					<section className="section-features">
						<Grid>
							<GridRow>
								<GridColumn size={3}>
									<FeatureBox title="FRONT END" iconName="basic-world">
										JavaScript
										HTML
										CSS
										React
										Redux
									</FeatureBox>
								</GridColumn>
								<GridColumn size={3}>
									<FeatureBox title="SERVER" iconName="basic-compass">
										Node.js
										Express
									</FeatureBox>
								</GridColumn>
								<GridColumn size={3}>
									<FeatureBox title="DATABASE" iconName="basic-map">
										PostgreSQL
										MySQL
										MongoDB
									</FeatureBox>
								</GridColumn>
								<GridColumn size={3}>
									<FeatureBox
										title="OTHER"
										iconName="basic-heart"
									>
										Heroku
										Git
										GitHub
										d3.js
										Stripe API
										Plaid API
									</FeatureBox>
								</GridColumn>
							</GridRow>
						</Grid>
					</section>
					<section className="section-tours">
						<div className="u-center-text u-margin-bottom--big">
							<h2 className="heading-secondary">Technical Projects</h2>
						</div>
						<Grid>
							<GridRow>
								<GridColumn size={4}>
									<TourFlipCard
										typeIndex="2"
										price="297"
										title="The sea explorer"
										description={[
											"3 day tours",
											"Up to 30 people",
											"2 tour guides",
											"Sleep in cozy hotels",
											"Difficulty: easy"
										]}
									/>
								</GridColumn>
								<GridColumn size={4}>
									<TourFlipCard
										typeIndex="1"
										price="497"
										title="The forest hiker"
										description={[
											"7 day tours",
											"Up to 40 people",
											"6 tour guides",
											"Sleep in provided tents",
											"Difficulty: medium"
										]}
									/>
								</GridColumn>
								<GridColumn size={4}>
									<TourFlipCard
										typeIndex="3"
										price="897"
										title="The now adventurer"
										description={[
											"5 day tours",
											"Up to 15 people",
											"3 tour guides",
											"Sleep in provided tents",
											"Difficulty: hard"
										]}
									/>
								</GridColumn>
							</GridRow>
						</Grid>
						<div className="u-center-text">
							<Button
								variant="cool"
								color="green"
								className="u-margin-top--big"
							>
								Discover all tours
							</Button>
						</div>
					</section>
				</main>
			</Fragment>
		);
	}
}

export default Main;
