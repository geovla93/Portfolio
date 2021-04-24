import React, { useState } from "react";
import Link from "next/link";

import {
	MenuLabel,
	Icon,
	NavBackground,
	Navigation,
	List,
	ItemLink,
} from "./HamburgerStyles";

const routes = [
	{
		id: 1,
		name: "Home",
		path: "/",
	},
	{
		id: 2,
		name: "Projects",
		path: "/projects",
	},
	{
		id: 3,
		name: "About",
		path: "/about",
	},
	{
		id: 4,
		name: "Contact",
		path: "/contact",
	},
];

const Hamburger = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<>
			<MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
				<Icon clicked={click}>&nbsp;</Icon>
			</MenuLabel>
			<NavBackground clicked={click}>&nbsp;</NavBackground>
			<Navigation clicked={click}>
				<List>
					{routes.map((route) => {
						return (
							<li key={route.id}>
								<Link href={route.path}>
									<ItemLink onClick={handleClick}>{route.name}</ItemLink>
								</Link>
							</li>
						);
					})}
				</List>
			</Navigation>
		</>
	);
};

export default Hamburger;
