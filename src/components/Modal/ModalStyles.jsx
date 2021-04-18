import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	dialogTitle: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: "absolute",
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
	dialogContent: {
		padding: theme.spacing(2),
	},
}));
