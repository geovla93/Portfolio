import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	icon: {
		color: "rgba(255, 255, 255, 0.54)",
	},
	tileBar: {
		"&.MuiGridListTileBar-titlePositionBottom": {
			height: "4rem",
			textAlign: "left",
		},
	},
}));
