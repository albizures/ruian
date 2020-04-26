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

const { Feminine, Neuter, Masculine } = Genders;

const emptyFallback = <p className="text-center">как один</p>;
const workInProgressFallback = (
	<p className="text-center">незавершенная работа</p>
);

const CaseTables: React.FC<PropTypes> = ({ name }) => {
	const data = cases[name];

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
									rows={getAnimEndings(data.nouns[Masculine])}
								/>
							</Box>
						</>
					) : (
						<Box title="он">
							<Table
								emptyFallback={emptyFallback}
								rows={getAnimEndings(data.nouns[Masculine])}
							/>
						</Box>
					)}
				</Column>
				<Column>
					<Box title="она">
						<Table emptyFallback={emptyFallback} rows={data.nouns[Feminine]} />
					</Box>
				</Column>
				<Column>
					<Box title="оно">
						<Table emptyFallback={emptyFallback} rows={data.nouns[Neuter]} />
					</Box>
				</Column>
				<Column className="row-span-1">
					{name === Cases.Accusative ? (
						<>
							<Box title="они - кого?">
								<Table
									emptyFallback={emptyFallback}
									rows={getAnimEndings(data.nouns.Plural)}
								/>
							</Box>
							<Box title="он - что?">
								<Table
									emptyFallback={emptyFallback}
									rows={getInanimEndings(data.nouns.Plural)}
								/>
							</Box>
						</>
					) : (
						<Box title="они">
							<Table
								emptyFallback={emptyFallback}
								rows={getAnimEndings(data.nouns.Plural)}
							/>
						</Box>
					)}
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
									rows={getAnimEndings(data.adjectives[Masculine])}
								/>
							</Box>
							<Box title="он - что?">
								<Table
									emptyFallback={emptyFallback}
									rows={getInanimEndings(data.adjectives[Masculine])}
								/>
							</Box>
						</>
					) : (
						<Box title="он">
							<Table
								emptyFallback={emptyFallback}
								rows={getAnimEndings(data.adjectives[Masculine])}
							/>
						</Box>
					)}
				</Column>
				<Column>
					<Box title="она">
						<Table
							emptyFallback={emptyFallback}
							rows={data.adjectives[Feminine]}
						/>
					</Box>
				</Column>
				<Column>
					<Box title="оно">
						<Table
							emptyFallback={emptyFallback}
							rows={data.adjectives[Neuter]}
						/>
					</Box>
				</Column>
				<Column className="row-span-1">
					{name === Cases.Accusative ? (
						<>
							<Box title="они - кого?">
								<Table
									emptyFallback={emptyFallback}
									rows={getAnimEndings(data.adjectives.Plural)}
								/>
							</Box>
							<Box title="он - что?">
								<Table
									emptyFallback={emptyFallback}
									rows={getInanimEndings(data.adjectives.Plural)}
								/>
							</Box>
						</>
					) : (
						<Box title="они">
							<Table
								emptyFallback={emptyFallback}
								rows={getAnimEndings(data.adjectives.Plural)}
							/>
						</Box>
					)}
				</Column>
			</Row>
		</>
	);
};

export default CaseTables;
