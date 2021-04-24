import React, { useState, useEffect, useRef } from "react";
import * as emailjs from "emailjs-com";
import {
	FormControl,
	TextField,
	Button,
	CircularProgress,
	Dialog,
	DialogTitle,
	DialogContent,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { Form } from "./ContactFormStyles";

const useStyles = makeStyles((theme) => ({
	focus: {
		"& label": {
			color: "#fff",
		},
		"& label.Mui-focused": {
			color: "#4da8da",
		},
		"& .MuiOutlinedInput-root": {
			color: "#fff",
			"& fieldset": {
				borderColor: "#fff",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#4da8da",
			},
			"&:hover fieldset": {
				borderColor: "#4da8da",
			},
		},
	},
	input: {
		"@media (max-width: 960px)": {
			marginBottom: "0.5rem",
		},
	},
	button: {
		width: "35%",
		color: "#fff",
		borderColor: "#fff",
		position: "relative",
		"&:hover": {
			borderColor: "#4da8da",
			color: "#4da8da",
		},
	},
	loader: {
		position: "absolute",
		right: 12,
		color: "#4da8da",
	},
}));

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

	const classes = useStyles();

	const inputs = [
		{
			id: 1,
			type: "text",
			placeholder: "Name",
			name: "name",
			value: textInput.name,
		},
		{
			id: 2,
			type: "email",
			placeholder: "Email",
			name: "email",
			value: textInput.email,
		},
		{
			id: 3,
			type: "text",
			placeholder: "Subject",
			name: "subject",
			value: textInput.subject,
		},
		{
			id: 4,
			as: "textarea",
			placeholder: "Enter your message here...",
			name: "message",
			value: textInput.message,
			rows: 3,
		},
	];

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
		<Form onSubmit={handleSubmit}>
			{inputs.map(({ type, as, placeholder, name, value, rows, id }) => {
				return as ? (
					<FormControl key={id} className={classes.input}>
						<TextField
							className={classes.focus}
							type={type}
							label={placeholder}
							name={name}
							value={value}
							rows={rows}
							onChange={handleChange}
							multiline
							required
							variant="outlined"
						/>
					</FormControl>
				) : (
					<FormControl key={id} className={classes.input}>
						<TextField
							className={classes.focus}
							type={type}
							label={placeholder}
							name={name}
							value={value}
							rows={rows}
							onChange={handleChange}
							required
							variant="outlined"
						/>
					</FormControl>
				);
			})}
			<Button
				className={classes.button}
				type="submit"
				variant="outlined"
				size="large"
			>
				Send
				{loading && <CircularProgress size={24} className={classes.loader} />}
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="dialog-title"
				aria-describedby="dialog-description"
			>
				<DialogTitle id="dialog-title">
					<div>
						<Typography variant="h6" gutterBottom>
							Thanks for submitting!
						</Typography>
					</div>
				</DialogTitle>
				<DialogContent id="dialog-description">
					<Typography variant="body1">
						Your message has been received! I will reply to you as soon as
						possible.
					</Typography>
				</DialogContent>
			</Dialog>
		</Form>
	);
};

export default ContactForm;
