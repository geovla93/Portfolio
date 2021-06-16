import Document, { Html, Head, Main, NextScript } from "next/document";

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
					<div id="form-modal" />
					<div id="modal-root" />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
