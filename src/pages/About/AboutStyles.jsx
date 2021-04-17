import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutContainer = styled(motion.div)`
	width: 95%;
	margin: 0 auto;
	min-height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: 768px) {
		width: 90%;
	}
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	height: 100%;
	margin: 5rem 0;
`;

export const BioContainer = styled.div`
	displa: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

export const SkillsContainer = styled.div`
	displa: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

export const HeadingOne = styled.h1`
	font-size: 3.5rem;
	color: #eefbfb;
	margin-top: 0;
	text-align: center;

	@media screen and (min-width: 768px) {
		text-align: left;
	}
`;
