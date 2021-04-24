import React from "react";
import Image from "next/image";
import { GridList, GridListTile } from "@material-ui/core";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import Tile from "../Tile/Tile";

import { GridLayoutContainer, useStyles } from "./GridLayoutStyles";

import { tileData } from "../../public/tileData";

const GridLayout = (props) => {
	const classes = useStyles();

	const getGridListCols = () => {
		return isWidthUp("md", props.width) ? 3 : 1;
	};

	return (
		<GridLayoutContainer>
			<GridList
				cellHeight={300}
				className={classes.gridList}
				cols={getGridListCols()}
			>
				{tileData.map((tile) => {
					return (
						<GridListTile
							key={tile.id}
							cols={getGridListCols() === 3 ? tile.cols : 1}
						>
							<Image
								src={tile.image}
								alt={tile.title}
								objectFit="cover"
								layout="fill"
							/>
							<Tile tile={tile} />
						</GridListTile>
					);
				})}
			</GridList>
		</GridLayoutContainer>
	);
};

export default withWidth()(GridLayout);
