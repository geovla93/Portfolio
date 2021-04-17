import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const COLORS = {
	primaryDark: "#007cc7",
	primaryLight: "#4da8da",
};

const Button = styled(motion.button).attrs((props) => ({
	type: "text" || props.type,
}))`
	background: ${(props) =>
		props.primary ? "transparent" : COLORS.primaryLight};
	color: #eefbfb;
	padding: 1rem 2rem;
	border: 2px solid ${COLORS.primaryLight};
	border-radius: 2rem;
	font-family: "Roboto", sans-serif;
	font-size: 1rem;
	cursor: pointer;

	&:hover {
		color: #eefbfb;
	}
`;

const CustomButton = ({ children, ...otherProps }) => {
	return <Button {...otherProps}>{children}</Button>;
};

export default CustomButton;
