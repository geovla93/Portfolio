import React from "react";

import { ArrowContainer } from "./ArrowStyles";

import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";

const Arrow = ({ direction, currentSlide, onArrowClick }) => {
	const handleClick = () => {
		return direction === "right" ? onArrowClick("right") : onArrowClick("left");
	};

	return (
		<ArrowContainer direction={direction} onClick={handleClick}>
			{direction === "right" ? (
				<img src={rightArrow} alt={rightArrow} />
			) : (
				<img src={leftArrow} alt={leftArrow} />
			)}
		</ArrowContainer>
	);
};

export default Arrow;
