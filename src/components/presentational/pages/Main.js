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
		document.title = "Natours - Where life happens";
	};
	render() {
		return (
			<Fragment>
				<Hero />
				<main>
					<section className="section-about">
						<div className="u-center-text u-margin-bottom--big">
							<Typography variant="h2" className="u-margin-bottom--small">
								Exciting Tours for Adventurous People
							</Typography>
						</div>
						<Grid>
							<GridRow>
								<GridColumn size={6}>
									<Typography variant="h3" className="u-margin-bottom--small">
										You're going to fall in love with nature.
									</Typography>
									<Typography variant="p">
										Incididunt esse fugiat ipsum ea aliquip consequat aliqua
										aliquip. Aliquip duis voluptate in mollit ea. Occaecat
										incididunt exercitation ea esse labore dolor.
									</Typography>
									<Typography variant="h3" className="u-margin-bottom--small">
										Live adventures like you never have before.
									</Typography>
									<Typography variant="p">
										Ex in Lorem tempor deserunt sint fugiat eu duis laboris
										consequat eu anim voluptate. Adipisicing consequat anim in
										amet. Dolore enim anim labore eu amet sint anim occaecat
										enim culpa consequat labore enim fugiat.
									</Typography>
									<Button href="#" variant="text">
										Learn more &rarr;
									</Button>
								</GridColumn>
								<GridColumn size={6}>
									<div className="composition">
										<img
											src="/img/nat-1-large.jpg"
											className="composition__photo composition__photo--p1"
											alt="Tour 1"
										/>
										<img
											src="/img/nat-2-large.jpg"
											className="composition__photo composition__photo--p2"
											alt="Tour 2"
										/>
										<img
											src="/img/nat-3-large.jpg"
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
									<FeatureBox title="Explore the world" iconName="basic-world">
										Occaecat magna aliquip ea incididunt est eiusmod et ullamco
										reprehenderit exercitation officia.
									</FeatureBox>
								</GridColumn>
								<GridColumn size={3}>
									<FeatureBox title="Meet nature" iconName="basic-compass">
										Occaecat magna aliquip ea incididunt est eiusmod et ullamco
										reprehenderit exercitation officia.
									</FeatureBox>
								</GridColumn>
								<GridColumn size={3}>
									<FeatureBox title="Find your way" iconName="basic-map">
										Occaecat magna aliquip ea incididunt est eiusmod et ullamco
										reprehenderit exercitation officia.
									</FeatureBox>
								</GridColumn>
								<GridColumn size={3}>
									<FeatureBox
										title="Live a healthier life"
										iconName="basic-heart"
									>
										Occaecat magna aliquip ea incididunt est eiusmod et ullamco
										reprehenderit exercitation officia.
									</FeatureBox>
								</GridColumn>
							</GridRow>
						</Grid>
					</section>
					<section className="section-tours">
						<div className="u-center-text u-margin-bottom--big">
							<h2 className="heading-secondary">Most popular tours</h2>
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
