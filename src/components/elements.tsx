import React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 420px) {
		flex-flow: column;
	}
`;

const Card = styled.div`
	background: white;
	border-radius: 0.5em;
	box-shadow: rgba(184, 194, 215, 0.35) 0px 3px 6px 0px;
	margin: 4px;
	padding: 8px;
	overflow: auto;
`;

const GlobalStyles = () => (
	<Global
		styles={css`
			html,
			body {
				margin: 0;
				padding: 0;
				font-size: 18px;
			}

			html {
				background: #e5e9f0;
			}

			.centered-text {
				text-align: center;
			}

			.button {
				margin: 10px;
				padding: 10px;
				font-size: 1rem;
			}

			.emoji.button {
				padding: 0;
				background: transparent;
				border: 0;
				font-size: 2rem;
			}

			.flex {
				display: flex;
			}

			.flex {
			}

			.centered-flex {
				justify-content: center;
			}

			.space-arround {
				justify-content: space-around;
			}

			.space-between {
				justify-content: space-between;
			}

			.space-evenly {
				justify-content: space-evenly;
			}

			* {
				box-sizing: border-box;
			}
		`}
	/>
);

export { Flex, GlobalStyles, Card };
