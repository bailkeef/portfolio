import React, { Component, Fragment } from "react";
import Hero from "../Hero";
import Grid from "../Grid";
import GridRow from "../GridRow";
import GridColumn from "../GridColumn";
import Typography from "../Typography";
import Button from "../Button";
import FontIcon from "../FontIcon";
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
									<div className="feature-box">
										<FontIcon
											className="feature-box__icon"
											type="basic-world"
										/>
										<Typography variant="h3">Explore the world</Typography>
										<Typography variant="p" className="feature-box__text">
											Occaecat magna aliquip ea incididunt est eiusmod et
											ullamco reprehenderit exercitation officia.
										</Typography>
									</div>
								</GridColumn>
								<GridColumn size={3}>
									<div className="feature-box">
										<FontIcon
											className="feature-box__icon"
											type="basic-compass"
										/>
										<Typography variant="h3">Meet Nature</Typography>
										<Typography variant="p" className="feature-box__text">
											Occaecat magna aliquip ea incididunt est eiusmod et
											ullamco reprehenderit exercitation officia.
										</Typography>
									</div>
								</GridColumn>
								<GridColumn size={3}>
									<div className="feature-box">
										<FontIcon className="feature-box__icon" type="basic-map" />
										<Typography variant="h3">Find Your Way</Typography>
										<Typography variant="p" className="feature-box__text">
											Occaecat magna aliquip ea incididunt est eiusmod et
											ullamco reprehenderit exercitation officia.
										</Typography>
									</div>
								</GridColumn>
								<GridColumn size={3}>
									<div className="feature-box">
										<FontIcon
											className="feature-box__icon"
											type="basic-heart"
										/>
										<Typography variant="h3">Live a Healthier Life</Typography>
										<Typography variant="p" className="feature-box__text">
											Occaecat magna aliquip ea incididunt est eiusmod et
											ullamco reprehenderit exercitation officia.
										</Typography>
									</div>
								</GridColumn>
							</GridRow>
						</Grid>
					</section>
				</main>
			</Fragment>
		);
	}
}

export default Main;
