import React from "react";

import { DotsContainer, Dot } from "./DotsStyles";

const Dots = ({ slides, activeIndex }) => {
	return (
		<DotsContainer>
			{slides.map((slide, index) => {
				return <Dot key={index} active={activeIndex === index} />;
			})}
		</DotsContainer>
	);
};

export default Dots;
