import React from 'react';
import CaseTables from '../components/CaseTables';
import { Cases } from '../types';
import { Container } from '../components/elements';

const { Genitive, Dative, Accusative, Instrumental, Prepositional } = Cases;

const Index: React.FC = () => (
	<>
		<Container>
			<CaseTables name={Genitive} />
			<CaseTables name={Dative} />
			<CaseTables name={Accusative} />
			<CaseTables name={Instrumental} />
			<CaseTables name={Prepositional} />
		</Container>
	</>
);

export default Index;
