import styled from "styled-components";

export const Form = styled.form`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const Input = styled.input`
	background: transparent;
	min-height: 6.5vh;
	width: 100%;
	border: 2px solid #4da8da;
	border-radius: 0.3rem;
	padding: 4px 0 0 12px;

	&:focus {
		color: #eefbfb;
	}

	&::placeholder {
		color: rgb(238, 251, 251, 0.6);
	}
`;

export const SubmitButton = styled.button`
	background: transparent;
	border: 2px solid #4da8da;
	border-radius: 0.3rem;
	padding: 0.6rem 1.5rem;
	color: #eefbfb;

	&:hover {
		background-color: #eefbfb;
		border: 2px solid #007cc7;
		border-radius: 0.3rem;
		color: #007cc7;
	}
`;
