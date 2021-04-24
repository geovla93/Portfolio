import React, { useState, useEffect } from "react";

import {
	LoadingContainer,
	LogoContainer,
	Background,
	Logo,
	LoaderOne,
	LoaderTwo,
	LoaderThree,
	LoaderFour,
} from "./LoadingStyles";

const Loading = ({ load }) => {
	const [loading, setLoading] = useState(load);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(!loading);
		}, 2000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<LoadingContainer
			animate={!loading && { opacity: 0 }}
			transition={{ duration: 1, ease: "easeInOut" }}
		>
			<Background />
			<LogoContainer>
				<Logo>GV</Logo>
				<LoaderOne />
				<LoaderTwo />
				<LoaderThree />
				<LoaderFour />
			</LogoContainer>
		</LoadingContainer>
	);
};

export default Loading;
