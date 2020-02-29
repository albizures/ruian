import { Cases, Genders } from '../types';
import CaseTitle from './CaseTitle';
import { cases } from '../cases';
import { getAnimEndings, getInanimEndings } from '../utils';
import Table from './Table';
import { Row, Column, Subtitle, Title } from './elements';
import Box from './Box';

interface PropTypes {
	name: Cases;
}

const { Feminine, Neuter } = Genders;

const emptyFallback = <p className="text-center">как один</p>;

const CaseTables: React.FC<PropTypes> = ({ name }) => {
	return (
		<>
			<Title>
				<CaseTitle id={name} />
			</Title>
			<Subtitle className="mt-6">существительные</Subtitle>
			<Row>
				<Column>
					{name === Cases.Accusative ? (
						<>
							<Box title="он - кого?">
								<Table
									emptyFallback={emptyFallback}
									rows={getAnimEndings(cases[name].nouns)}
								/>
							</Box>
						</>
					) : (
						<Box title="он">
							<Table
								emptyFallback={emptyFallback}
								rows={getAnimEndings(cases[name].nouns)}
							/>
						</Box>
					)}
				</Column>
				<Column>
					<Box title="она">
						<Table
							emptyFallback={emptyFallback}
							rows={cases[name].nouns[Feminine]}
						/>
					</Box>
				</Column>
				<Column>
					<Box title="оно">
						<Table
							emptyFallback={emptyFallback}
							rows={cases[name].nouns[Neuter]}
						/>
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
					{name === Cases.Accusative ? (
						<>
							<Box title="он - кого?">
								<Table
									emptyFallback={emptyFallback}
									rows={getAnimEndings(cases[name].adjectives)}
								/>
							</Box>
							<Box title="он - что?">
								<Table
									emptyFallback={emptyFallback}
									rows={getInanimEndings(cases[name].adjectives)}
								/>
							</Box>
						</>
					) : (
						<Box title="он">
							<Table
								emptyFallback={emptyFallback}
								rows={getAnimEndings(cases[name].adjectives)}
							/>
						</Box>
					)}
				</Column>
				<Column>
					<Box title="она">
						<Table
							emptyFallback={emptyFallback}
							rows={cases[name].adjectives[Feminine]}
						/>
					</Box>
				</Column>
				<Column>
					<Box title="оно">
						<Table
							emptyFallback={emptyFallback}
							rows={cases[name].adjectives[Neuter]}
						/>
					</Box>
				</Column>
				<Column className="row-span-1">
					<Box className="text-center" title="они">
						незавершенная работа
					</Box>
				</Column>
			</Row>
		</>
	);
};

export default CaseTables;
