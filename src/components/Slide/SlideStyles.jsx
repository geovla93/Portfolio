import styled from "styled-components";

export const SlideContainer = styled.div`
	height: 100;
	width: 100%;
	background-image: url("${({ content }) => content}");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;
