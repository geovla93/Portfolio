import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import Hamburger from "../Hamburger/Hamburger";
import Footer from "../Footer/Footer";

import { pageVariants } from "../../utils/framer-motion/pageVariants";

function handleExitComplete() {
	if (typeof window !== "undefined") {
		window.scrollTo({ top: 0 });
	}
}

const Layout = ({ children }) => {
	const router = useRouter();
	return (
		<div className="bg-primary flex flex-col min-h-screen">
			<Hamburger />
			<AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
				<motion.main
					className="flex-grow flex items-center justify-center max-w-screen mx-auto"
					key={router.route}
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={pageVariants}
				>
					{children}
				</motion.main>
			</AnimatePresence>
			<Footer />
		</div>
	);
};

export default Layout;
