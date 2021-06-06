import React, { useState } from "react";
import {
	InformationCircleIcon,
	ExternalLinkIcon,
} from "@heroicons/react/solid";

import Modal from "../Modal/Modal";

const Tile = ({ tile }) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<div
				key={tile.id}
				className={`min-h-96 relative flex ${
					tile.cols === 2 && "md:col-span-2"
				} ${tile.cols === 3 && "md:col-span-3"}`}
			>
				<img
					className="object-cover object-left-top w-full"
					loading="lazy"
					src={tile.image}
					alt={tile.title}
				/>
				<div className="absolute bottom-0 left-0 bg-black bg-opacity-70 h-16 2xl:h-24 w-full flex items-center justify-between px-3 2xl:px-6">
					<h4 className="text-white text-lg 2xl:text-2xl flex-grow">
						{tile.title}
					</h4>
					<div className="flex space-x-2">
						<span
							onClick={handleClickOpen}
							className="p-2 hover:bg-gray-300 hover:bg-opacity-30 flex rounded-full cursor-pointer group"
						>
							<InformationCircleIcon className="h-6 w-6 2xl:h-8 2xl:w-8 text-white group-hover:text-secondary" />
						</span>
						<a
							className="p-2 hover:bg-gray-300 hover:bg-opacity-30 flex rounded-full group"
							href={tile.path}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Link to ${tile.title}`}
						>
							<ExternalLinkIcon className="h-6 w-6 2xl:h-8 2xl:w-8 text-white group-hover:text-secondary" />
						</a>
					</div>
				</div>
			</div>
			<Modal open={open} tile={tile} onClose={handleClose} />
		</>
	);
};

export default Tile;
