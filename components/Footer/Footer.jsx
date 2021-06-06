import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faGithub,
	faInstagram,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const date = new Date().getFullYear();

const socialItems = [
	{
		icon: faFacebookF,
		link: "https://www.facebook.com/george.vlassis.75/",
		color: "#3b5999",
		label: "Facebook",
	},
	{
		icon: faGithub,
		link: "https://github.com/geovla93",
		color: "#767676",
		label: "GitHub",
	},
	{
		icon: faInstagram,
		link: "https://www.instagram.com/geovla/",
		color: "#e4405f",
		label: "Instagram",
	},
	{
		icon: faLinkedinIn,
		link: "https://www.linkedin.com/in/george-vlassis-045844105/",
		color: "#0077B5",
		label: "LinkedIn",
	},
];

const Footer = () => {
	return (
		<footer className="w-full h-24 flex flex-col md:flex-row items-center text-white text-center justify-center space-y-2 md:space-y-0 md:justify-evenly">
			<div>
				{socialItems.map(({ icon, link, color, label }) => {
					return (
						<a
							className="hover:text-secondary mx-2"
							key={link}
							href={link}
							aria-label={label}
						>
							<FontAwesomeIcon icon={icon} size="2x" />
						</a>
					);
				})}
			</div>
			<p className="text-md md:text-lg">
				Copyright © {date} Designed by <strong>George Vlassis</strong>
			</p>
		</footer>
	);
};

export default Footer;
