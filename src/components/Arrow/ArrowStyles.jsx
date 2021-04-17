import styled from "styled-components";

export const ArrowContainer = styled.div`
	display: flex;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	${({ direction }) => (direction === "right" ? "right: 0" : "left: 0")};
	height: 100%;
	width: 10%;
	justify-content: center;
	cursor: pointer;
	align-items: center;
	transition: transform ease-in 0.1s;
	outline: 0;
	border-left: 0px solid transparent;
	border-left-radius: 1rem;

	&:hover {
		background: rgb(0, 0, 0, 0.5);
	}
`;
