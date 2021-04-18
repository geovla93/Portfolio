import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import ContactForm from "../../components/ContactForm/ContactForm";
import Heading from "../../components/Heading/Heading";

import { ContactContainer } from "./ContactStyles";

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
		cursor: "default",
		"&.MuiTypography-root": {
			textAlign: "center",
			"@media (min-width: 960px)": {
				textAlign: "left",
			},
		},
	},
});

const title = "Get In Touch!";

const Contact = () => {
	const classes = useStyles();
	return (
		<ContactContainer
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={pageVariants}
		>
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
							questions/ideas/projects, feel free to <strong>PING</strong> me. I
							am always open for discussion. You can contact me via the Contact
							Form <strong>OR</strong> simply click on the social media icon if
							you are more comfortable there.
						</Typography>
					</Grid>
				</Grid>
				<Grid item xs={12} md={6}>
					<ContactForm />
				</Grid>
			</Grid>
		</ContactContainer>
	);
};

export default Contact;
