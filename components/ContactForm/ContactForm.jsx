import { useState, useEffect, useRef } from "react";
import * as emailjs from "emailjs-com";

import ContactModal from "../ContactModal/ContactModal";

const ContactForm = () => {
	const [textInput, setTextInput] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);

	const timer = useRef();

	useEffect(() => {
		return () => {
			clearTimeout(timer.current);
		};
	}, []);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setTextInput((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const resetForm = () => {
		setTextInput({
			name: "",
			email: "",
			subject: "",
			message: "",
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!loading) {
			setLoading(true);
			timer.current = window.setTimeout(() => {
				setLoading(false);
				setOpen(true);
			}, 2000);
		}

		const { name, email, subject, message } = textInput;

		const templateParams = {
			from_name: name,
			from_email: email,
			to_email: "geovla93@gmail.com",
			subject: subject,
			message: message,
		};

		const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
		const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
		const userId = process.env.NEXT_PUBLIC_USER_ID;

		emailjs.send(serviceId, templateId, templateParams, userId).then(
			(result) => {
				resetForm();
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<form className="flex-1 flex flex-col space-y-4" onSubmit={handleSubmit}>
				<input
					className="outline-none bg-transparent text-gray-200 rounded-sm border-white border hover:border-secondary transition duration-300 p-3"
					type="text"
					placeholder="Name"
					value={textInput.name}
					name="name"
					onChange={handleChange}
					required
				/>
				<input
					className="outline-none bg-transparent text-gray-200 rounded-sm border-white border hover:border-secondary transition duration-300 p-3"
					type="email"
					placeholder="Email"
					value={textInput.email}
					name="email"
					onChange={handleChange}
					required
				/>
				<input
					className="outline-none bg-transparent text-gray-200 rounded-sm border-white border hover:border-secondary transition duration-300 p-3"
					type="text"
					placeholder="Subject"
					value={textInput.subject}
					name="subject"
					onChange={handleChange}
					required
				/>
				<textarea
					className="outline-none bg-transparent text-gray-200 rounded-sm border-white border hover:border-secondary transition duration-300 p-3"
					placeholder="Enter your message here..."
					value={textInput.message}
					name="message"
					rows="3"
					onChange={handleChange}
					required
				/>
				<button
					type="submit"
					className="relative border border-white rounded-sm block w-1/3 text-white p-3 outline-none hover:border-secondary hover:text-secondary transition duration-300"
				>
					Send
					{loading && (
						<svg
							className="w-6 h-6 absolute right-5 top-3"
							xmlns="http://www.w3.org/2000/svg"
							version="1.0"
							viewBox="0 0 128 128"
						>
							<script type="text/ecmascript" />
							<g>
								<linearGradient id="linear-gradient">
									<stop offset="0%" stop-color="rgba(77,168,218,0.2)" />
									<stop offset="100%" stop-color="#4da8da" />
								</linearGradient>
								<path
									d="M63.85 0A63.85 63.85 0 1 1 0 63.85 63.85 63.85 0 0 1 63.85 0zm.65 19.5a44 44 0 1 1-44 44 44 44 0 0 1 44-44z"
									fill="url(#linear-gradient)"
									fill-rule="evenodd"
								/>
								<animateTransform
									attributeName="transform"
									type="rotate"
									from="0 64 64"
									to="360 64 64"
									dur="1080ms"
									repeatCount="indefinite"
								></animateTransform>
							</g>
						</svg>
					)}
				</button>
			</form>
			<ContactModal open={open} onClose={handleClose} />
		</>
	);
};

export default ContactForm;
