import Head from "next/head";

import ContactForm from "../components/ContactForm/ContactForm";
import Heading from "../components/Heading/Heading";

const title = "Get In Touch";

export default function Contact() {
	return (
		<>
			<Head>
				<title>About | George Vlassis Full-Stack Web Developer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col lg:flex-row py-20 px-4 lg:px-20 space-y-12 lg:space-y-0 lg:space-x-16 text-left">
				<div className="flex flex-col space-y-12 flex-1">
					<h1 className="text-5xl lg:text-7xl text-white font-bold tracking-wider lg:self-start cursor-default">
						{[...title].map((letter, index) => {
							return <Heading key={index}>{letter}</Heading>;
						})}
					</h1>
					<p className="text-white text-xl">
						Hello <strong>Visitor !!</strong>
						<br />
						Thank you for bumping in. If you have any questions/ideas/projects,
						feel free to <strong>PING</strong> me. I am always open for
						discussion. You can contact me via the Contact Form{" "}
						<strong>OR</strong> simply click on the social media icon if you are
						more comfortable there.
					</p>
				</div>
				<ContactForm />
			</div>
		</>
	);
}
