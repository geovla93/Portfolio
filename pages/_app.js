import "../styles/globals.css";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { AnimatePresence } from "framer-motion";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import Loading from "../components/Loading/Loading";

function MyApp({ Component, pageProps, router }) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 3000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<>
			<Head>
				<title>George Vlassis | Full-Stack Web Developer</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
			</Head>
			<StylesProvider injectFirst>
				<AnimatePresence exitBeforeEnter>
					{loading ? (
						<Loading load={loading} />
					) : (
						<Component {...pageProps} key={router.route} />
					)}
				</AnimatePresence>
			</StylesProvider>
		</>
	);
}

export default MyApp;
