import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const GridLayoutContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	overflow: hidden;
	margin-bottom: 2rem;
`;

export const useStyles = makeStyles((theme) => ({
	gridList: {
		width: "100%",
		height: "100%",
	},
}));
