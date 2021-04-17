import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeContainer = styled(motion.div)`
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
