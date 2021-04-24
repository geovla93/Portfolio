import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import ContactForm from "../components/ContactForm/ContactForm";
import Heading from "../components/Heading/Heading";
import Hamburger from "../components/Hamburger/Hamburger";
import Footer from "../components/Footer/Footer";

import { pageVariants } from "../utils/framer-motion/pageVariants";
import { ContactContainer } from "../styles/ContactStyles";

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
		cursor: "default",
		"&.MuiTypography-root": {
			textAlign: "center",
			"@media (min-width: 960px)": {
				textAlign: "left",
			},
		},
	},
});

const title = "Get In Touch";

export default function Contact() {
	const classes = useStyles();

	return (
		<motion.div
			className="container"
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={pageVariants}
		>
			<Head>
				<title>About | George Vlassis Full-Stack Web Developer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hamburger />
			<ContactContainer>
				<Grid className={classes.root} container spacing={5}>
					<Grid item container xs={12} md={6}>
						<Grid item xs={12}>
							<Typography className={classes.text} component="h1" variant="h2">
								{[...title].map((letter, index) => {
									return <Heading key={index}>{letter}</Heading>;
								})}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.text} variant="body1">
								Hello <strong>Visitor !!</strong>
								<br />
								Thank you for bumping in. If you have any
								questions/ideas/projects, feel free to <strong>PING</strong> me.
								I am always open for discussion. You can contact me via the
								Contact Form <strong>OR</strong> simply click on the social
								media icon if you are more comfortable there.
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={12} md={6}>
						<ContactForm />
					</Grid>
				</Grid>
			</ContactContainer>
			<Footer />
		</motion.div>
	);
}
