import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	icon: {
		color: "rgba(255, 255, 255, 0.54)",
		"&:hover": {
			color: "#4da8da",
		},
	},
	tileBar: {
		"&.MuiGridListTileBar-titlePositionBottom": {
			height: "4rem",
			textAlign: "left",
		},
	},
}));
