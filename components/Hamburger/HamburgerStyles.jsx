import styled, { css } from "styled-components";

const COLORS = {
	primaryDark: "#007cc7",
	primaryLight: "#4da8da",
};

export const MenuLabel = styled.label`
	background-color: ${COLORS.primaryLight};
	position: fixed;
	top: 1rem;
	right: 1rem;
	border-radius: 50%;
	height: 4rem;
	width: 4rem;
	cursor: pointer;
	z-index: 1000;
	box-shadow: 0 0rem 3rem rgb(78, 78, 80, 0.3);
	text-align: center;
`;

export const NavBackground = styled.div`
	position: fixed;
	top: 1rem;
	right: 1rem;
	background: rgb(78, 78, 80, 0.9);
	height: 4rem;
	width: 4rem;
	border-radius: 50%;
	z-index: 600;
	transform: ${({ clicked }) => (clicked ? "scale(80)" : "scale(0)")};
	transition: transform 0.8s;
`;

export const Icon = styled.span`
	position: relative;
	background-color: ${({ clicked }) => (clicked ? "transparent" : "black")};
	width: 2rem;
	height: 2px;
	display: inline-block;
	margin-top: 2rem;
	transition: all 0.3s;
	z-index: 1;

	&::before,
	&::after {
		content: "";
		background-color: black;
		width: 2rem;
		height: 2px;
		display: inline-block;
		position: absolute;
		left: 0;
		transition: all 0.3s;
	}
	&::before {
		top: ${({ clicked }) => (clicked ? "0" : "-0.8rem")};
		transform: ${({ clicked }) => (clicked ? "rotate(135deg)" : "rotate(0)")};
	}
	&::after {
		top: ${({ clicked }) => (clicked ? "0" : "0.8rem")};
		transform: ${({ clicked }) => (clicked ? "rotate(-135deg)" : "rotate(0)")};
	}

	${MenuLabel}:hover &::before {
		top: ${({ clicked }) => (clicked ? "0" : "-1rem")};
	}

	${MenuLabel}:hover &::after {
		top: ${({ clicked }) => (clicked ? "0" : "-1rem")};
	}
`;

export const Navigation = styled.nav`
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 600;
	width: ${({ clicked }) => (clicked ? "100%" : "0")};
	opacity: ${({ clicked }) => (clicked ? "1" : "0")};
	transition: width 0.8s, opacity 0.8s;
`;

export const List = styled.ul`
	position: absolute;
	list-style: none;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	width: 100%;
`;

export const ItemLink = styled.a`
	display: inline-block;
	font-size: 3rem;
	font-weight: 300;
	text-decoration: none;
	color: ${COLORS.primaryLight};
	padding: 1rem 2rem;
	background-image: linear-gradient(
		120deg,
		transparent 0%,
		transparent 50%,
		#fff 50%
	);
	background-size: 240%;
	transition: all 0.4s;
	&:hover,
	&:active {
		background-position: 100%;
		color: ${COLORS.primaryDark};
		transform: translateX(1rem);
	}
`;
