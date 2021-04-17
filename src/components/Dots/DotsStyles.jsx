import styled from "styled-components";

export const DotsContainer = styled.div`
	position: absolute;
	bottom: 25px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Dot = styled.span`
	padding: 10px;
	margin-right: 5px;
	cursor: pointer;
	border-radius: 50%;
	background: ${({ active }) => (active ? "#12232e" : "#4da8da")};
`;
