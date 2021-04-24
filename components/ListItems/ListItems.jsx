import React from "react";
import {
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	item: {
		flex: "0 1 50%",
		"@media (max-width: 576px)": {
			flex: "auto",
		},
	},
}));

const ListItems = ({ skills }) => {
	const classes = useStyles();
	return skills.map((skill, index) => {
		return (
			<ListItem key={index} className={classes.item}>
				<ListItemAvatar>
					<Avatar>
						<ChevronRightIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary={skill} />
			</ListItem>
		);
	});
};

export default ListItems;
