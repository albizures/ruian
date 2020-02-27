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
	return [
		[pronoun],
		cases[Cases.Genitive].pronouns[pronoun],
		cases[Cases.Dative].pronouns[pronoun],
		cases[Cases.Accusative].pronouns[pronoun],
		cases[Cases.Instrumental].pronouns[pronoun],
		cases[Cases.Prepositional].pronouns[pronoun],
	];
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
