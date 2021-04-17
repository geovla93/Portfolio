import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import Card from "../../components/Card/Card";

import { AboutContainer } from "./AboutStyles";

import { pageVariants } from "../../utils/framer-motion/pageVariants";

const useStyles = makeStyles({
	root: {
		"&.MuiGrid-root": {
			"@media (max-width: 960px)": {
				marginTop: "5rem",
				marginBottom: "5rem",
			},
		},
	},
	text: {
		"&.MuiTypography-root": {
			textAlign: "center",
			"@media (min-width: 960px)": {
				textAlign: "left",
			},
		},
	},
	padding: {
		padding: "1rem 0",
	},
});

const About = () => {
	const classes = useStyles();
	return (
		<AboutContainer
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={pageVariants}
		>
			<Grid className={classes.root} container spacing={5}>
				<Grid className={classes.padding} item xs={12}>
					<Typography className={classes.text} component="h1" variant="h2">
						About
					</Typography>
				</Grid>
				<Grid item container xs={12} md={6}>
					<Grid className={classes.padding} item xs={12}>
						<Typography className={classes.text} variant="body1">
							Hello, I'm George Vlassis. When I was at school, I was dreaming of
							becoming a game developer, so I started learning programming at a
							very young age. Later, I studied{" "}
							<strong>Computer Engineering</strong> at{" "}
							<a
								href="https://www.cse.uoi.gr"
								target="_blank"
								rel="noopener noreferrer"
							>
								University of Ioannina
							</a>{" "}
							where my passion for Web Development grew up.
						</Typography>
					</Grid>
					<Grid className={classes.padding} item xs={12}>
						<Typography className={classes.text} variant="body1">
							My goal is to create a better web, by building fast, easy to use
							and beautiful web applications with best practices! Performance,
							interactivity and responsiveness for mobile devices is always a
							priority for me. I also love animations and UI effects.
						</Typography>
					</Grid>
					<Grid className={classes.padding} item xs={12}>
						<Typography className={classes.text} variant="body1">
							Visit my{" "}
							<a
								href="https://github.com/geovla93"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>{" "}
							or{" "}
							<a
								href="https://www.linkedin.com/in/george-vlassis-045844105/"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>{" "}
							account to learn more.
						</Typography>
					</Grid>
				</Grid>
				<Grid item xs={12} md={6}>
					<Card />
				</Grid>
			</Grid>
		</AboutContainer>
	);
};

export default About;
