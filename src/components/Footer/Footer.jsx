import React from "react";
import { Typography } from "@material-ui/core";
import { FooterContainer, SocialIcon } from "./FooterStyles";
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
	},
	{
		icon: faGithub,
		link: "https://github.com/geovla93",
		color: "#767676",
	},
	{
		icon: faInstagram,
		link: "https://www.instagram.com/geovla/",
		color: "#e4405f",
	},
	{
		icon: faLinkedinIn,
		link: "https://www.linkedin.com/in/george-vlassis-045844105/",
		color: "#0077B5",
	},
];

const Footer = () => {
	return (
		<FooterContainer>
			<div>
				{socialItems.map(({ icon, link, color }) => {
					return (
						<SocialIcon key={link} href={link} color={color}>
							<FontAwesomeIcon icon={icon} size="2x" />
						</SocialIcon>
					);
				})}
			</div>
			<div>
				<Typography variant="body1">
					Designed by George Vlassis @ {date}
				</Typography>
			</div>
		</FooterContainer>
	);
};

export default Footer;
