import React, { useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import Arrow from "../Arrow/Arrow";
import Dots from "../Dots/Dots";

import {
	SliderContainer,
	Slide,
	Image,
	ButtonsContainer,
	InfoButton,
	StyledModal,
	Paper,
} from "./SliderStyles";

import { tileData } from "../../assets/tileData";

const projects = tileData.map((tile, index) => {
	return { id: index, title: tile.title, techs: tile.technologies };
});

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const length = tileData.length;
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleClick = (direction) => {
		if (direction === "right") {
			nextSlide();
		} else {
			prevSlide();
		}
	};

	const nextSlide = () => {
		setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
	};

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
	};

	if (!Array.isArray(tileData) || tileData.length <= 0) {
		return null;
	}

	return (
		<SliderContainer>
			{tileData.map((tile, index) => {
				return (
					<Slide key={tile.id} current={currentSlide} index={index}>
						{index === currentSlide && (
							<>
								<Image key={tile.id} src={tile.image} alt={tile.title} />
								<ButtonsContainer>
									<InfoButton onClick={handleOpen}>More Info</InfoButton>
									<InfoButton
										as="a"
										href={tile.path}
										target="_blank"
										rel="noopener"
									>
										Visit
									</InfoButton>
								</ButtonsContainer>
								<Arrow
									direction="left"
									currentSlide={currentSlide}
									onArrowClick={handleClick}
								/>
								<Arrow
									direction="right"
									currentSlide={currentSlide}
									onArrowClick={handleClick}
								/>
								<Dots slides={tileData} activeIndex={currentSlide} />
							</>
						)}
					</Slide>
				);
			})}
			<StyledModal
				aria-labelledby="title"
				aria-describedby="title"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Paper>
						<h2 id="title">{projects[currentSlide].title}</h2>
						<p id="description">
							Made with: {projects[currentSlide].techs.join(", ")}
						</p>
					</Paper>
				</Fade>
			</StyledModal>
		</SliderContainer>
	);
};

export default Slider;
