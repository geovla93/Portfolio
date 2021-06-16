import { useState } from "react";
import { motion } from "framer-motion";

import { headingVariants } from "../../utils/framer-motion/headingVariants";

const Heading = ({ children }) => {
	const [isHovered, setIsHovered] = useState(false);

	const toggleHover = () => {
		setIsHovered(!isHovered);
	};

	return (
		<motion.span
			className="hover:inline-block"
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
