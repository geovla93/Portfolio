import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";

import { headingVariants } from "../../utils/framer-motion/headingVariants";

const useStyles = makeStyles({
	hover: {
		display: "inline-block",
	},
});

const Heading = ({ children }) => {
	const [isHovered, setIsHovered] = useState(false);

	const toggleHover = () => {
		setIsHovered(!isHovered);
	};

	const classes = useStyles();

	return (
		<motion.span
			className={classes.hover}
			onMouseEnter={toggleHover}
			onMouseLeave={toggleHover}
			variants={headingVariants}
			whileHover="hover"
		>
			{children === " " ? <span>&nbsp;</span> : children}
		</motion.span>
	);
};

export default Heading;
