import React, { Component, Fragment } from "react";
import Hero from "../Hero";
import Grid from "../Grid";
import GridRow from "../GridRow";
import GridColumn from "../GridColumn";
import Typography from "../Typography";
import Button from "../Button";
import FeatureBox from "../FeatureBox";
import ProjectFlipCard from "../ProjectFlipCard";
import Popup from "../Popup";

const info = [
	{
		id: 1,
		title: "Custom Finance App",
		description: "Customizable financial web application with bank integration and data visualization",
		link: "https://github.com/TheRunawaysGIRLS/capstone"
	},
	{
		id: 2,
		title: "Real Estate Lead Generator",
		description: "Web scrapes for For-Sale-By-Owner leads' phone numbers for real estate agents and mass texts the messages",
		link:"https://github.com/bailkeef/stackathon"
	},
	{
		id: 3,
		title: "Puzzle Party Store",
		description: "E-commerce website for selling puzzles that allows for customer and store admin user experiences",
		link: "https://github.com/PuzzleParty/PuzzleParty"
	},
	{
		id: 4,
		title: "Bailey Keefer Portfolio Site",
		description: "This is the site you are currently on! #Inception",
		link: "#"
	},
	{
		id: 5,
		title: "Deal Huntz",
		description: "Allows real estate investors to connect and list and buy deals. Users are able to see reviews for investors to make sure they are trustworthy",
		link:"https://github.com/bailkeef/dealhuntz"

	},
	{
		id: 6,
		title: "Cocktail Roulette",
		description: "Utilizes Cocktail DB Public API to give user a random cocktail recipe",
		link:"https://github.com/bailkeef/dealhuntz"
	},

]

class Main extends Component {
	constructor(){
		super();
		this.state = {
			show: null,
		}
		this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
	}

	handleShow(id){
		this.setState({show: id});
		console.log(this.state)
	}

	handleClose(){
		this.setState({show: null});
	}

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
								<GridColumn size={7}>
									<Typography variant="h3" className="u-margin-bottom--small">
										Professional Experience
									</Typography>
									<Typography variant="p">
										I am an incoming Software Engineer at VMware. My background is in the Aerospace Engineering Industry with Lockheed Martin Space Systems. I received my Bachelor's in Mechanical Engineering at the University of Michigan and attended the Grace Hopper Program through Full Stack Acacademy in NYC.
									</Typography>
									<Typography variant="h3" className="u-margin-bottom--small">
										Collaborative Team Member
									</Typography>
									<Typography variant="p">
										I believe that efficient communication can accelerate progress on a project level and individual level. I love working on teams so I can learn from experiences of others and provide my own insight as well.
									</Typography>
								</GridColumn>
								<GridColumn size={5}>
									<div className="composition">
										<img
											src="./img/node-1.png"
											className="composition__photo composition__photo--p1"
											alt="Tour 1"
										/>
										<img
											src="./img/react-1.png"
											className="composition__photo composition__photo--p2"
											alt="Tour 2"
										/>
										<img
											src="./img/postgres-1.png"
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
									<FeatureBox title="FRONT END" iconName="basic-webpage">
										<ul>
											<li>Redux</li>
											<li>React</li>
											<li>JavaScript ES6</li>
											<li>HTML/CSS</li>
										</ul>
									</FeatureBox>
								</GridColumn>
								<GridColumn size={3}>
									<FeatureBox title="SERVER" iconName="basic-share">
										<ul>
											<li>Node.js</li>
											<li>Express</li>
										</ul>
									</FeatureBox>
								</GridColumn>
								<GridColumn size={3}>
									<FeatureBox title="DATABASE" iconName="basic-server2">
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
										iconName="basic-cloud"
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
						{this.state.show ? <Popup showId={this.state.show} handleClose={this.handleClose} info={info}/> :
						<Grid>
							<GridRow>
								<GridColumn size={4}>
									<ProjectFlipCard
										typeIndex="1"
										projectDescription="Customizable financial web application with bank integration and data visualization"
										title="Custom Finance App"
										description={[
											"React | Redux",
											"Node.js | Express",
											"PostgreSQL",
											"d3.js",
											"Plaid API"
										]}
										handleShow={this.handleShow}
									/>
								</GridColumn>
								<GridColumn size={4}>
									<ProjectFlipCard
										typeIndex="2"
										projectDescription="Web scrapes for For-Sale-By-Owner leads' phone numbers for real estate agents and mass texts the messages"
										title="RE Lead Generator"
										description={[
											"React",
											"Node.js",
											"Express",
											"Puppeteer.js",
											"PostgreSQL"
										]}
										handleShow={this.handleShow}
										handleClose={this.handleClose}
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
										handleShow={this.handleShow}
										handleClose={this.handleClose}
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
										handleShow={this.handleShow}
										handleClose={this.handleClose}
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
										handleShow={this.handleShow}
										handleClose={this.handleClose}
									/>
								</GridColumn>
								<GridColumn size={4}>
									<ProjectFlipCard
										typeIndex="6"
										projectDescription="Utilizes Cocktail DB Public API to give user a random cocktail recipe"
										title="Cocktail Roulette"
										description={[
											"React | Redux",
											"Cocktail DB API",
											"Express"
										]}
										handleShow={this.handleShow}
										handleClose={this.handleClose}
									/>
								</GridColumn>
							</GridRow>
						</Grid>}
						<div className="u-center-text">
						</div>
					</section>
				</main>
			</Fragment>
		);
	}
}

export default Main;
