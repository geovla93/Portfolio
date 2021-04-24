import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";

import GridLayout from "../components/GridLayout/GridLayout";
import Hamburger from "../components/Hamburger/Hamburger";
import Footer from "../components/Footer/Footer";

import { pageVariants } from "../utils/framer-motion/pageVariants";

export default function Projects() {
	return (
		<motion.div
			className="container"
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={pageVariants}
		>
			<Head>
				<title>Projects | George Vlassis Full-Stack Web Developer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hamburger />
			<GridLayout />
			<Footer />
		</motion.div>
	);
}
