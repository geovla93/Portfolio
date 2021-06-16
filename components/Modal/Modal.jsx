import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { CheckIcon, XIcon } from "@heroicons/react/solid";

const ModalContent = ({ open, tile, onClose }) => {
	const handleClose = () => onClose();

	return ReactDOM.createPortal(
		<>
			{open ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-4/5 md:w-3/5 lg:2/5 xl:1/5 my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-3xl font-semibold">{tile.title}</h3>
									<span
										onClick={handleClose}
										className="hover:bg-gray-200 p-3 cursor-pointer rounded-full group"
									>
										<XIcon className="h-6 w-6 group-hover:text-secondary" />
									</span>
								</div>
								{/*body*/}
								<div className="relative p-6 flex-auto">
									<ul className="flex flex-col flex-wrap h-40">
										{tile.technologies.map((tech) => (
											<li
												key={tech}
												className="flex items-center mb-3 space-x-4"
											>
												<span className="p-2 bg-gray-300 rounded-full">
													<CheckIcon className="h-6 w-6 text-secondary" />
												</span>
												<span>{tech}</span>
											</li>
										))}
									</ul>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
									<button
										className="text-secondary background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={handleClose}
									>
										Close
									</button>
									<a
										className="text-secondary hover:bg-secondary hover:text-white active:bg-secondary font-bold uppercase text-sm px-6 py-3 rounded border border-secondary shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										href={tile.github}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`GitHub link for ${tile.title}`}
									>
										GitHub Repository
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>,
		document.getElementById("modal-root")
	);
};

const Modal = ({ open, tile, onClose }) => {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	if (isBrowser) {
		return <ModalContent open={open} tile={tile} onClose={onClose} />;
	} else {
		return null;
	}
};

export default Modal;
