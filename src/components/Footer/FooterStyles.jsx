import styled from "styled-components";

export const FooterContainer = styled.div`
	margin-top: auto;
	width: 100%;
	min-height: 10vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	gap: 1rem;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}

	& div {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		gap: 1rem;

		& p {
			margin: 0;
		}
	}
`;

export const SocialIcon = styled.a.attrs((props) => ({
	href: props.href,
	target: "_blank",
	rel: "noopener noreferrer",
	background: props.color,
}))`
	color: #eefbfb;

	&:hover {
		color: ${(props) => props.background};
	}
`;
