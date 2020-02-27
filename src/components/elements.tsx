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

interface PropTypes {
	className?: string;
}

const Container: React.FC<PropTypes> = ({ children, className = '' }) => (
	<div className={`container mx-auto ${className}`}>{children}</div>
);

const Row: React.FC<PropTypes> = ({ children, className = '' }) => (
	<div className={`grid grid-cols-4 grid-rows-1 gap-4 ${className}`}>
		{children}
	</div>
);

const Column: React.FC<PropTypes> = ({ children, className = '' }) => (
	<div className={`col-span-4 sm:col-span-2 md:col-span-1 ${className}`}>
		{children}
	</div>
);

const H4 = styled.h4`
	white-space: nowrap;
	overflow: hidden;
	&::after {
		content: '';
		margin-left: 16px;
		background: rgba(50, 50, 50, 0.1);
		height: 1px;
		width: 100%;
		display: inline-block;
		vertical-align: middle;
	}
`;

const Subtitle: React.FC = ({ children }) => (
	<h3 className="text-3xl mt-4 mb-2 capitalize">{children}</h3>
);

export { Flex, GlobalStyles, Card, Container, Row, Column, H4, Subtitle };
