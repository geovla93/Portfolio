import { motion } from "framer-motion";

import { pageVariants } from "../../utils/framer-motion/pageVariants";

import Hamburger from "../Hamburger/Hamburger";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
	return (
		<div className="bg-primary flex flex-col min-h-screen">
			<Hamburger />
			<motion.main
				className="flex-grow flex items-center justify-center max-w-screen mx-auto"
				initial="hidden"
				animate="visible"
				exit="exit"
				variants={pageVariants}
			>
				{children}
			</motion.main>
			<Footer />
		</div>
	);
};

export default Layout;
