import React, { Component, Fragment } from "react";
import Hero from "../Hero";
import Grid from "../Grid";
import GridRow from "../GridRow";
import GridColumn from "../GridColumn";
import Typography from "../Typography";
import Button from "../Button";
import FeatureBox from "../FeatureBox";
import ProjectFlipCard from "../ProjectFlipCard";
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
							<Typography variant="h3" className="u-margin-bottom--small">
								University of Michigan Alum
							</Typography>
						</div>
						<Grid>
							<GridRow>
								<GridColumn size={6}>
									<Typography variant="h3" className="u-margin-bottom--small">
										Creative Problem Solver
									</Typography>
									<Typography variant="p">
										With a background in Aerospace Engineering, I bring unique perspectives when coming up with solutions to complex problems.
									</Typography>
									<Typography variant="h3" className="u-margin-bottom--small">
										Collaborative Team Member
									</Typography>
									<Typography variant="p">
										I believe that efficient communication can accelerate progress on a project level and individual level. I love working on teams so I can learn from experiences of others and provide my own insight as well.
									</Typography>
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
										<ul>
											<li>Redux</li>
											<li>React</li>
											<li>JavaScript ES6</li>
											<li>HTML/CSS</li>
										</ul>
									</FeatureBox>
								</GridColumn>
								<GridColumn size={3}>
									<FeatureBox title="SERVER" iconName="basic-compass">
										<ul>
											<li>Node.js</li>
											<li>Express</li>
										</ul>
									</FeatureBox>
								</GridColumn>
								<GridColumn size={3}>
									<FeatureBox title="DATABASE" iconName="basic-map">
										<ul>
											<li>PostgreSQL</li>
											<li>MySQL</li>
											<li>MongoDB</li>
										</ul>
									</FeatureBox>
								</GridColumn>
								<GridColumn size={3}>
									<FeatureBox
										title="OTHER"
										iconName="basic-heart"
									>
										<ul>
											<li>REST API</li>
											<li>Heroku</li>
											<li>Git</li>
											<li>GitHub</li>
										</ul>
									</FeatureBox>
								</GridColumn>
							</GridRow>
						</Grid>
					</section>
					<section className="section-tours">
						<div className="u-center-text u-margin-bottom--big">
							<h2 className="heading-secondary" id="projects">Technical Projects</h2>
						</div>
						<Grid>
							<GridRow>
								<GridColumn size={4}>
									<ProjectFlipCard
										typeIndex="2"
										projectDescription="Customizable financial web application with bank integration and data visualization"
										title="Custom Finance App"
										description={[
											"React | Redux",
											"Node.js | Express",
											"PostgreSQL",
											"d3.js",
											"Plaid API"
										]}
									/>
								</GridColumn>
								<GridColumn size={4}>
									<ProjectFlipCard
										typeIndex="1"
										projectDescription="Web scrapes for For-Sale-By-Owner leads' phone numbers for real estate agents and mass texts the messages"
										title="RE Lead Generator"
										description={[
											"React",
											"Node.js",
											"Express",
											"Puppeteer.js",
											"PostgreSQL"
										]}
									/>
								</GridColumn>
								<GridColumn size={4}>
									<ProjectFlipCard
										typeIndex="3"
										projectDescription="E-commerce website for selling puzzles that allows for customer and store admin user experiences"
										title="Puzzle Party"
										description={[
											"React | Redux",
											"Node.js",
											"Express",
											"PostgreSQL",
											"Stripe API"
										]}
									/>
								</GridColumn>
							</GridRow>
							<GridRow>
								<GridColumn size={4}>
									<ProjectFlipCard
										typeIndex="4"
										projectDescription="The site that you are currently on!"
										title="Bailey's Portfolio"
										description={[
											"React",
											"HTML",
											"CSS",
											"Sass",

										]}
									/>
								</GridColumn>
								<GridColumn size={4}>
									<ProjectFlipCard
										typeIndex="5"
										projectDescription="Allows real estate investors to connect and list and buy deals. Users are able to see reviews for investors to make sure they are trustworthy"
										title="Deal Huntz"
										description={[
											"React",
											"Node.js",
											"Express",
											"PostgreSQL"
										]}
									/>
								</GridColumn>
								<GridColumn size={4}>
									<ProjectFlipCard
										typeIndex="6"
										projectDescription="E-commerce website for selling puzzles that allows for customer and store admin user experiences"
										title="Cocktail Roulette"
										description={[
											"React | Redux",
											"Cocktail DB API",
											"Express"
										]}
									/>
								</GridColumn>
							</GridRow>
						</Grid>
						<div className="u-center-text">
						</div>
					</section>
				</main>
			</Fragment>
		);
	}
}

export default Main;