import Head from "next/head";
import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";

import CustomButton from "../components/CustomButton/CustomButton";
import Heading from "../components/Heading/Heading";
import { buttonVariants } from "../utils/framer-motion/buttonVariants";

const heading1 = "Hello!";

export default function Home() {
	return (
		<>
			<Head>
				<title>Home | George Vlassis Full-Stack Web Developer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center py-16 px-4 space-y-12 md:space-y-20 text-center">
				<h1 className="text-white text-7xl font-bold tracking-wider">
					{[...heading1].map((letter, index) => {
						return <Heading key={index}>{letter}</Heading>;
					})}
				</h1>
				<h3 className="text-white text-5xl tracking-wide">
					I am George Vlassis
				</h3>
				<div className="text-white text-4xl tracking-wide">
					<ReactTypingEffect
						text="Full-Stack Web Developer based in Ioannina, Greece. "
						speed="100"
						eraseDelay="500000"
					/>
				</div>
				<div className="flex flex-col md:flex-row space-y-6 md:space-x-10 md:space-y-0 items-center">
					<Link href="/projects">
						<a>
							<CustomButton
								whileHover="hover"
								variants={buttonVariants}
								primary
								animate
							>
								View Portfolio
							</CustomButton>
						</a>
					</Link>
					<Link href="/contact">
						<a>
							<CustomButton
								whileHover="hover"
								variants={buttonVariants}
								primary
								animate
							>
								Contact Me
							</CustomButton>
						</a>
					</Link>
				</div>
			</div>
		</>
	);
}
