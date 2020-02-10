import React from 'react';
import { Cases, Pronouns } from '../types';
import { Card, Flex } from './elements';
import Table from './Table';
import { cases } from '../cases';
import styled from '@emotion/styled';

const Container = styled(Flex)`
	justify-content: center;
`;

interface PropTypes {
	filter?: string[];
	className?: string;
	styles?: React.CSSProperties;
}

const rows = Object.keys(Pronouns).map((key) => {
	const pronoun = Pronouns[key];
	return {
		1: pronoun,
		[Cases.Genitive]: cases[Cases.Genitive].pronouns[pronoun],
		[Cases.Dative]: cases[Cases.Dative].pronouns[pronoun],
		[Cases.Accusative]: cases[Cases.Accusative].pronouns[pronoun],
		[Cases.Instrumental]: cases[Cases.Instrumental].pronouns[pronoun],
		[Cases.Prepositional]: cases[Cases.Prepositional].pronouns[pronoun],
	};
});

const usePronounTable = (filter?: string[]) => {
	const filteredRows = filter
		? rows.filter((row) => {
				return filter.includes(row['1']);
		  })
		: rows;

	const headers = [
		'1',
		String(Cases.Genitive),
		String(Cases.Dative),
		String(Cases.Accusative),
		String(Cases.Instrumental),
		String(Cases.Prepositional),
	];

	return {
		headers,
		rows: filteredRows,
	};
};

const PronounTable: React.FC<PropTypes> = (props) => {
	const { headers, rows } = usePronounTable(props.filter);

	return (
		<Container>
			<Card>
				<Table headers={headers} rows={rows} />
			</Card>
		</Container>
	);
};

export { usePronounTable };

export default PronounTable;
