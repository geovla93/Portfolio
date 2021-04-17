import React from "react";
import { motion } from "framer-motion";

import Slider from "../../components/Slider/Slider";

import { pageVariants } from "../../utils/framer-motion/pageVariants";

const Projects = () => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={pageVariants}
		>
			<Slider />
		</motion.div>
	);
};

export default Projects;
