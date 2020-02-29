import React from 'react';
import { Cases, Genders } from '../types';
import Table from './EndingTable';
import { Flex, Card } from './elements';
import styled from '@emotion/styled';

const Container = styled(Card)`
	display: flex;
	overflow: auto;

	& > table:last-child {
		margin-right: 0;
	}
`;

const GenderTables = () => (
	<Flex>
		<Container>
			<Table case={Cases.Genitive} gender={Genders.Masculine} />
			<Table case={Cases.Dative} gender={Genders.Masculine} />
			<Table case={Cases.Accusative} gender={Genders.Masculine} />
			<Table case={Cases.Instrumental} gender={Genders.Masculine} />
			<Table case={Cases.Prepositional} gender={Genders.Masculine} />
		</Container>
		<Container>
			<Table case={Cases.Genitive} gender={Genders.Feminine} />
			<Table case={Cases.Dative} gender={Genders.Feminine} />
			<Table case={Cases.Accusative} gender={Genders.Feminine} />
			<Table case={Cases.Instrumental} gender={Genders.Feminine} />
			<Table case={Cases.Prepositional} gender={Genders.Feminine} />
		</Container>
		<Container>
			<Table case={Cases.Genitive} gender={Genders.Neuter} />
			<Table case={Cases.Dative} gender={Genders.Neuter} />
			<Table case={Cases.Accusative} gender={Genders.Neuter} />
			<Table case={Cases.Instrumental} gender={Genders.Neuter} />
			<Table case={Cases.Prepositional} gender={Genders.Neuter} />
		</Container>
	</Flex>
);

export default GenderTables;
