import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";

const loaderStyles = css`
	display: block;
	position: absolute;
	background-color: #3ebffa;
`;

const slide1 = keyframes` 
	50%{width:32vh; margin-left:0;}
	100%{margin-left:32vh;}
  
  `;

const slide2 = keyframes`
	50%{height:32vh; margin-top:0;}
	100%{margin-top:32vh;}
  `;

const slide3 = keyframes`
	50%{width:32vh; margin-right:0;}
	100%{margin-right:32vh;}
  `;

const slide4 = keyframes`
  	50%{height:32vh; margin-bottom:0}
	100%{margin-bottom:32vh;}
  `;

export const LoadingContainer = styled(motion.div)`
	background-color: #12232e;
`;

export const Background = styled.div`
	display: block;
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: #12232e;
	background: -webkit-radial-gradient(
		center,
		ellipse cover,
		#12232e 1%,
		#0d0011 100%
	);
	background: -moz-radial-gradient(
		center,
		ellipse cover,
		#12232e 1%,
		#0d0011 100%
	);
	background: -ie-radial-gradient(
		center,
		ellipse cover,
		#12232e 1%,
		#0d0011 100%
	);
`;

export const LogoContainer = styled.div`
	display: block;
	position: fixed;
	top: 50%;
	left: 50%;
	width: 34vh;
	height: 34vh;
	margin-left: -17vh;
	margin-top: -17vh;
	overflow: hidden;
	transition: background-color 500ms;
`;

export const Logo = styled.div`
	display: block;
	position: absolute;
	left: 2vh;
	top: 2vh;
	width: 30vh;
	height: 30vh;
	background: #34324b;
	background: -moz-linear-gradient(-45deg, #34324b 0%, #161222 100%);
	background: -webkit-linear-gradient(-45deg, #34324b 0%, #161222 100%);
	background: linear-gradient(135deg, #34324b 0%, #161222 100%);
	background-size: contain;
	font-family: Trebuchet MS, sans-serif;
	font-size: 20vh;
	font-weight: bold;
	color: #3ebffa;
	text-align: center;
	line-height: 30vh;
`;

export const LoaderOne = styled.div`
	${loaderStyles}

	left:2vh;
	top: 0;
	height: 2vh;
	width: 0;
	animation: ${slide1} 1s linear forwards infinite;
`;

export const LoaderTwo = styled.div`
	${loaderStyles}

	right:0;
	top: 2vh;
	width: 2vh;
	height: 0;
	animation: ${slide2} 1s linear forwards infinite;
	animation-delay: 0.5s;
`;

export const LoaderThree = styled.div`
	${loaderStyles}

	right:2vh;
	bottom: 0;
	height: 2vh;
	width: 0;
	animation: ${slide3} 1s linear forwards infinite;
`;

export const LoaderFour = styled.div`
	${loaderStyles}

	left:0;
	bottom: 2vh;
	width: 2vh;
	height: 0;
	animation: ${slide4} 1s linear forwards infinite;
	animation-delay: 0.5s;
`;
