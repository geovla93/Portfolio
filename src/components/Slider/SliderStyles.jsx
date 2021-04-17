import styled, { css } from "styled-components";
import Modal from "@material-ui/core/Modal";

export const SliderContainer = styled.div`
	min-height: 100vh;
	max-width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

export const Slide = styled.div.attrs((props) => ({
	current: props.current,
	index: props.index,
}))`
	position: relative;
	${({ current, index }) =>
		index === current
			? css`
					opacity: 1;
					transition-duration: 1s;
					transform: scale(1.08);
			  `
			: css`
					opacity: 0;
					transition-duration: 1s ease;
			  `};
`;

export const Image = styled.img`
	width: 85vw;
	height: 100%;
	border-radius: 0.5rem;
`;

export const ButtonsContainer = styled.div`
	position: absolute;
	top: 1rem;
	left: 0;
	right: 0;
	margin: auto;
	width: 20%;
`;

export const InfoButton = styled.span`
	background: rgb(18, 35, 46, 0.7);
	border-radius: 0.3rem;
	margin: 0 0.5rem;
	border: 0;
	padding: 0.3rem 0.5rem;
	color: #4da8da;
	cursor: pointer;

	&:hover {
		background: rgb(18, 35, 46, 1);
		color: #4da8da;
	}
`;

export const StyledModal = styled(Modal)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Paper = styled.div`
	background-color: #414141;
	border: 2px solid #000;
	padding: 1rem;
`;
