import React from "react";
import {
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
	item: {
		flex: "0 1 50%",
	},
});

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
