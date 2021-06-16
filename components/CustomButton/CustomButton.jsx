import React from "react";
import { motion } from "framer-motion";

const CustomButton = ({ children, ...otherProps }) => {
	return (
		<motion.button
			className="bg-transparent text-white px-8 py-4 border-2 border-secondary rounded-full text-base cursor-pointer"
			{...otherProps}
		>
			{children}
		</motion.button>
	);
};

export default CustomButton;
