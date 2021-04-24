import React, { useState } from "react";
import { GridListTileBar, IconButton, Link } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import LinkIcon from "@material-ui/icons/Link";

import Modal from "../Modal/Modal";

import { useStyles } from "./TileStyles";

const Tile = ({ tile }) => {
	const [open, setOpen] = useState(false);

	const classes = useStyles();

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<GridListTileBar
				title={tile.title}
				className={classes.tileBar}
				actionIcon={
					<>
						<IconButton
							aria-label={`Info about ${tile.title}`}
							className={classes.icon}
							onClick={handleClickOpen}
						>
							<InfoIcon />
						</IconButton>
						<Link href={tile.path} target="_blank" rel="noopener noreferrer">
							<IconButton
								aria-label={`Link to ${tile.title}`}
								className={classes.icon}
							>
								<LinkIcon />
							</IconButton>
						</Link>
					</>
				}
			/>
			<Modal open={open} tile={tile} onClose={handleClose} />
		</>
	);
};

export default Tile;
