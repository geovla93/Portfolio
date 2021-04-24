import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import CustomButton from "../components/CustomButton/CustomButton";
import Heading from "../components/Heading/Heading";
import Hamburger from "../components/Hamburger/Hamburger";
import Footer from "../components/Footer/Footer";

import { HomeContainer } from "../styles/HomeStyles";
import styles from "../styles/Home.module.css";

import { pageVariants } from "../utils/framer-motion/pageVariants";
import { buttonVariants } from "../utils/framer-motion/buttonVariants";
import { motion } from "framer-motion";

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
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

export default function Home() {
	const classes = useStyles();

	return (
		<motion.div
			className={styles.container}
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={pageVariants}
		>
			<Head>
				<title>Home | George Vlassis Full-Stack Web Developer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hamburger />
			<HomeContainer>
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
							I am George Vlassis
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
							<Link href="/projects">
								<a>
									<CustomButton
										whileHover="hover"
										variants={buttonVariants}
										primary
										animate
									>
										View Portfolio
									</CustomButton>
								</a>
							</Link>
						</Grid>
						<Grid className={classes.button} item xs={12} md={3}>
							<Link href="/contact">
								<a>
									<CustomButton
										whileHover="hover"
										variants={buttonVariants}
										primary
										animate
									>
										Contact Me
									</CustomButton>
								</a>
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</HomeContainer>
			<Footer />
		</motion.div>
	);
}
