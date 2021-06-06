import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta
						name="description"
						content="George Vlassis Full-Stack Web Developer | Based in Ioannina, Greece."
					/>
					<meta name="theme-color" content="#000000" />
					{/* Fonts and icons */}
					<link
						rel="stylesheet"
						type="text/css"
						media="all"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons&display=swap"
					/>
				</Head>
				<body>
					<div id="page-transition" />
					<div id="overlay-root" />
					<div id="modal-root" />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	// Render app and page and get the context of the page with collected side effects.
	const materialSheet = new ServerStyleSheets();
	const styledComponentSheet = new ServerStyleSheet();
	const originalRenderPage = ctx.renderPage;

	try {
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) =>
					styledComponentSheet.collectStyles(
						materialSheet.collect(<App {...props} />)
					),
			});

		const initialProps = await Document.getInitialProps(ctx);

		return {
			...initialProps,
			// Styles fragment is rendered after the app and page rendering finish.
			styles: [
				...React.Children.toArray(initialProps.styles),
				materialSheet.getStyleElement(),
				styledComponentSheet.getStyleElement(),
			],
		};
	} finally {
		styledComponentSheet.seal();
	}
};

export default MyDocument;
