import "../styles/globals.css";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>George Vlassis | Full-Stack Web Developer</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
			</Head>

			<Layout {...pageProps}>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
