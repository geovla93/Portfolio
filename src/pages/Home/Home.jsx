import React from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import CustomButton from "../../components/CustomButton/CustomButton";
import Heading from "../../components/Heading/Heading";

import { HomeContainer } from "./HomeStyles";

import { pageVariants } from "../../utils/framer-motion/pageVariants";
import { buttonVariants } from "../../utils/framer-motion/buttonVariants";

const useStyles = makeStyles({
	root: {
		"&.MuiGrid-root": {
			"@media (max-width: 960px)": {
				marginTop: "5rem",
				marginBottom: "5rem",
			},
		},
	},
	button: {
		"&.MuiGrid-root": {
			"@media (max-width: 960px)": {
				margin: "1rem 0",
			},
		},
	},
	text: {
		cursor: "default",
	},
});

const heading1 = "Hello!";
const Heading2 = "I am George Vlassis";

const Home = () => {
	const classes = useStyles();

	return (
		<HomeContainer
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={pageVariants}
		>
			<Grid className={classes.root} container spacing={5}>
				<Grid item xs={12}>
					<Typography className={classes.text} component="h1" variant="h2">
						{[...heading1].map((letter, index) => {
							return <Heading key={index}>{letter}</Heading>;
						})}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.text} component="h2" variant="h3">
						{[...Heading2].map((letter, index) => {
							return <Heading key={index}>{letter}</Heading>;
						})}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography component="h3" variant="h4">
						<ReactTypingEffect
							text="Full-Stack Web Developer based in Ioannina, Greece. "
							speed="100"
							eraseDelay="500000"
						/>
					</Typography>
				</Grid>
				<Grid item container xs={12} justify="center">
					<Grid className={classes.button} item xs={12} md={3}>
						<Link to="/projects">
							<CustomButton
								whileHover="hover"
								variants={buttonVariants}
								primary
								animate
							>
								View Portfolio
							</CustomButton>
						</Link>
					</Grid>
					<Grid className={classes.button} item xs={12} md={3}>
						<Link to="/contact">
							<CustomButton
								whileHover="hover"
								variants={buttonVariants}
								primary
								animate
							>
								Contact Me
							</CustomButton>
						</Link>
					</Grid>
				</Grid>
			</Grid>
		</HomeContainer>
	);
};

export default Home;
