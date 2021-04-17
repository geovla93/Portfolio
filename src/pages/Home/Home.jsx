import React from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import CustomButton from "../../components/CustomButton/CustomButton";
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
});

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
					<Typography component="h1" variant="h2">
						Hello!
					</Typography>{" "}
				</Grid>
				<Grid item xs={12}>
					<Typography component="h2" variant="h3">
						I am <strong>George Vlassis</strong>
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
