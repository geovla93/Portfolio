import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

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
	const [toggleClick, setToggleClick] = useState(false);

	const handleClick = () => setToggleClick(!toggleClick);

	return (
		<>
			<label
				className="fixed bg-secondary top-4 right-4 rounded-full h-16 w-16 cursor-pointer z-50 shadow-md flex items-center justify-center"
				htmlFor="navi-toggle"
				onClick={handleClick}
			>
				{toggleClick ? (
					<XIcon className="h-10 w-10 text-white" />
				) : (
					<MenuIcon className="h-10 w-10 text-white" />
				)}
			</label>
			<div
				className={`fixed top-4 right-4 bg-gray-600 bg-opacity-95 h-16 w-16 z-40 rounded-full transform transition-transform duration-1000 ${
					toggleClick ? "scale-800" : "scale-0"
				}`}
			/>
			<nav
				className={`h-screen fixed top-0 right-0 z-40 ${
					toggleClick ? "w-full opacity-100" : "w-0 opacity-0"
				} transition-all duration-1000`}
			>
				<ul className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-center w-full">
					{routes.map((route) => (
						<li key={route.id}>
							<Link href={route.path}>
								<a className="nav-link" onClick={handleClick}>
									{route.name}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};

export default Hamburger;
