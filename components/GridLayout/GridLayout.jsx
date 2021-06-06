import Tile from "../Tile/Tile";

import { tileData } from "../../public/tileData";

const GridLayout = () => {
	return (
		<div className="grid md:grid-cols-3 gap-1 min-h-screen grid-flow-row-dense">
			{tileData.map((tile) => {
				return <Tile key={tile.id} tile={tile} />;
			})}
		</div>
	);
};

export default GridLayout;
