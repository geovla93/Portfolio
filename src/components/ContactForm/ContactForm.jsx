import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { FormControl, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { Form } from "./ContactFormStyles";

const useStyles = makeStyles({
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
		width: "20%",
		color: "#fff",
		borderColor: "#fff",
		"&:hover": {
			borderColor: "#4da8da",
			color: "#4da8da",
		},
	},
});

const ContactForm = () => {
	const [textInput, setTextInput] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

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

		const { name, email, subject, message } = textInput;

		const templateParams = {
			from_name: name,
			from_email: email,
			to_email: "geovla93@gmail.com",
			subject: subject,
			message: message,
		};

		const serviceId = process.env.REACT_APP_SERVICE_ID;
		const templateId = process.env.REACT_APP_TEMPLATE_ID;
		const userId = process.env.REACT_APP_USER_ID;

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
			</Button>
		</Form>
	);
};

export default ContactForm;
