import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { XIcon } from "@heroicons/react/solid";

const ModalContent = ({ open, onClose }) => {
	const handleClose = () => onClose();

	return ReactDOM.createPortal(
		<>
			{open ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-4/5 md:w-3/5 lg:2/5 xl:1/5 my-6 mx-auto max-w-xl">
							{/* content */}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-64 bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-3xl font-semibold">
										Thanks for submitting
									</h3>
									<span
										onClick={handleClose}
										className="hover:bg-gray-200 p-3 cursor-pointer rounded-full group"
									>
										<XIcon className="h-6 w-6 group-hover:text-secondary" />
									</span>
								</div>
								{/* body */}
								<div className="relative p-6 flex-auto flex items-center">
									<p>
										Your message has been received! I will reply to you as soon
										as possible.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black" />
				</>
			) : null}
		</>,
		document.getElementById("form-modal")
	);
};

const ContactModal = ({ open, onClose }) => {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	if (isBrowser) {
		return <ModalContent open={open} onClose={onClose} />;
	} else {
		return null;
	}
};

export default ContactModal;
