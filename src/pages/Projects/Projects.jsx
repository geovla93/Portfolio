import React from "react";
import { motion } from "framer-motion";

import GridLayout from "../../components/GridLayout/GridLayout";

import { pageVariants } from "../../utils/framer-motion/pageVariants";

const Projects = () => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={pageVariants}
		>
			<GridLayout />
		</motion.div>
	);
};

export default Projects;
