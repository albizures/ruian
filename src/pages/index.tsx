import React from 'react';
import CaseTitle from '../components/CaseTitle';
import Table from '../components/Table';
import Box from '../components/Box';
import { Container, Row, Column, Subtitle } from '../components/elements';
import { Cases, Genders } from '../types';
import { cases } from '../cases';

const { Genitive } = Cases;
const { Masculine, Feminine } = Genders;

const Index: React.FC = () => (
	<>
		<Container>
			<div className="w-full px-2">
				<h2 className="text-4xl text-center font-thin">
					<CaseTitle id={Genitive} />
				</h2>
			</div>
			<Subtitle>существительные</Subtitle>
			<Row>
				<Column>
					<Box title="он">
						<Table rows={cases[Genitive].endings[Masculine]} />
					</Box>
				</Column>
				<Column>
					<Box title="она">
						<Table rows={cases[Genitive].endings[Feminine]} />
					</Box>
				</Column>
				<Column>
					<Box title="оно">
						<Table rows={cases[Genitive].endings[Feminine]} />
					</Box>
				</Column>
				<Column className="row-span-1">
					<Box className="text-center" title="они">
						незавершенная работа
					</Box>
				</Column>
			</Row>
			<Subtitle>прилагательное</Subtitle>
			<Row>
				<Column>
					<Box title="он">
						<Table rows={cases[Genitive].endings[Masculine]} />
					</Box>
				</Column>
				<Column>
					<Box title="она">
						<Table rows={cases[Genitive].endings[Feminine]} />
					</Box>
				</Column>
				<Column>
					<Box title="оно">
						<Table rows={cases[Genitive].endings[Feminine]} />
					</Box>
				</Column>
				<Column className="row-span-1">
					<Box className="text-center" title="они">
						незавершенная работа
					</Box>
				</Column>
			</Row>
		</Container>
	</>
);

export default Index;
