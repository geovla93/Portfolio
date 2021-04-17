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

const Loading = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
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
