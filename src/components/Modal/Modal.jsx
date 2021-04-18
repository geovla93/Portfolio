import React from "react";
import {
	IconButton,
	Typography,
	Dialog,
	DialogTitle,
	DialogContent,
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";

import { useStyles } from "./ModalStyles";

const Modal = ({ open, tile, onClose }) => {
	const classes = useStyles();
	return (
		<Dialog
			onClose={onClose}
			aria-labelledby="project-dialog"
			open={open}
			fullWidth
		>
			<DialogTitle className={classes.dialogTitle} id={tile.id}>
				<Typography variant="h6" align="left">
					{tile.title}
				</Typography>
				{open && (
					<IconButton
						aria-label="close"
						className={classes.closeButton}
						onClick={onClose}
					>
						<CloseIcon />
					</IconButton>
				)}
			</DialogTitle>
			<DialogContent className={classes.dialogContent} dividers>
				<Typography variant="h6" gutterBottom align="left">
					Build with:
				</Typography>
				<List dense={false}>
					{tile.technologies.map((tech, index) => {
						return (
							<ListItem key={index}>
								<ListItemAvatar>
									<Avatar>
										<DoneIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary={tech} />
							</ListItem>
						);
					})}
				</List>
			</DialogContent>
		</Dialog>
	);
};

export default Modal;
