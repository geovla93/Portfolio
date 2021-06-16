import Head from "next/head";

import Card from "../components/Card/Card";
import Heading from "../components/Heading/Heading";

const title = "About";

export default function About() {
	return (
		<>
			<Head>
				<title>About | George Vlassis Full-Stack Web Developer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center py-16 px-4 md:px-12 space-y-12 md:space-y-20">
				<h1 className="text-white text-7xl font-bold tracking-wider -mb-4 self-start cursor-default">
					{[...title].map((letter, index) => {
						return <Heading key={index}>{letter}</Heading>;
					})}
				</h1>
				<div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-6">
					<div className="flex-1 flex flex-col justify-around space-y-6 md:space-y-0">
						<p className="text-white text-xl">
							Hello, I'm George Vlassis. When I was at school, I was dreaming of
							becoming a game developer, so I started learning programming at a
							very young age. Later, I studied{" "}
							<strong>Computer Engineering</strong> at{" "}
							<a
								className="text-secondary"
								href="https://www.cse.uoi.gr"
								target="_blank"
								rel="noopener noreferrer"
							>
								University of Ioannina
							</a>{" "}
							where my passion for Web Development grew up.
						</p>
						<p className="text-white text-xl">
							My goal is to create a better web, by building fast, easy to use
							and beautiful web applications with best practices! Performance,
							interactivity and responsiveness for mobile devices is always a
							priority for me. I also love animations and UI effects.
						</p>
						<p className="text-white text-xl">
							Visit my{" "}
							<a
								className="text-secondary"
								href="https://github.com/geovla93"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>{" "}
							or{" "}
							<a
								className="text-secondary"
								href="https://www.linkedin.com/in/george-vlassis-045844105/"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>{" "}
							account to learn more.
						</p>
					</div>
					<div className="flex-1">
						<Card />
					</div>
				</div>
			</div>
		</>
	);
}
