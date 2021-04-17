import React from "react";
import { Card, CardContent, Typography, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import ListItems from "../ListItems/ListItems";

const skills = [
	"HTML5",
	"CSS3",
	"JavaScript (ES6+)",
	"ReactJS",
	"Redux",
	"Node.js",
	"MongoDB",
	"Firebase",
];

const useStyles = makeStyles({
	list: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		minHeight: "40vh",
	},
});

const SkillsCard = () => {
	const classes = useStyles();
	return (
		<Card>
			<CardContent>
				<Typography component="h2" variant="h5" align="left" gutterBottom>
					Some of the technologies I work with:
				</Typography>
				<List className={classes.list}>
					<ListItems skills={skills} />
				</List>
			</CardContent>
		</Card>
	);
};

export default SkillsCard;
