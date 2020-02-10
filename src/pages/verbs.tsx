import React from 'react';
import styled from '@emotion/styled';
import { pronouns } from '../pronouns';
import { verbs } from '../verbs';
import Layout from '../components/Layout';
import Table from '../components/Table';
import { usePronounTable } from '../components/Pronouns';
import {
	openReversoConjugation,
	openCoolConjugation,
	openTranslation,
	openReversoContext,
	getCombinations,
	suffleItems,
} from '../utils';
import { Card } from '../components/elements';
import { useList } from '../hooks/useList';

const getLastIndex = () => {
	const lastVerbIndex = Number(localStorage.getItem('lastVerbIndex'));

	return Number.isNaN(lastVerbIndex) ? 0 : lastVerbIndex;
};

const pronounCombinations = getCombinations(pronouns).filter(
	([first, second]) => {
		return !(
			(first === 'я' && second === 'мы') ||
			(second === 'я' && first === 'мы')
		);
	},
);

const getPronounList = () => {
	return suffleItems(pronounCombinations);
};

const defaultPronounList = getPronounList();

const CenteredCard = styled(Card)`
	display: flex;
	justify-content: center;
`;

const H4 = styled.div`
	margin-bottom: 4px;
`;

const CurrentPronounPair = styled.div`
	font-size: 2rem;
`;

const NotCurrentPronounPair = styled.div`
	font-size: 1.5rem;
	min-height: 32px;
`;

const PronounPairs = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	&::after {
		content: '';
		pointer-events: none;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 1) 0%,
			rgba(0, 0, 0, 0) 30%,
			rgba(0, 0, 0, 0) 70%,
			rgba(255, 255, 255, 1) 100%
		);
	}
`;

const VerbContainers = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	margin: 10px 0;
`;

const NotButton = styled.button`
	background: transparent;
	font-size: inherit;
	border: 0;
	margin: 0;
	padding: 0;
`;

const Verb = styled.h1`
	font-size: 3rem;
	margin: 10px 0;
	width: 500px;
`;

const Index = styled.h2`
	font-size: 1.5rem;
	margin: 0;
	padding: 0;
`;

const EachVerb: React.FC = () => {
	const [pronounList, setPronounList] = React.useState(defaultPronounList);
	const {
		setIndex: setPronounPairIndex,
		current: pronounPair,
		next: nextPronounPair,
		prev: prevPronounPair,
		selectNext: selectNextPronounPair,
		selectPrev: selectPrevPronounPair,
	} = useList({
		list: pronounList,
	});
	const {
		index,
		current: verb,
		setIndex,
		selectNext: selectNextVerb,
		selectPrev: selectPrevVerb,
	} = useList({
		list: verbs,
		loop: true,
	});
	const { headers, rows } = usePronounTable(pronounPair);

	React.useEffect(() => {
		const lastIndex = getLastIndex();

		setIndex(verbs.length < lastIndex ? 0 : lastIndex);
	}, [setIndex]);

	const onNext = () => {
		selectNextVerb();
		setPronounList(getPronounList());
		setPronounPairIndex(0);
		localStorage.setItem('lastVerbIndex', String(index));
	};

	const onPrevius = () => {
		selectPrevVerb();
		setPronounList(getPronounList());
		setPronounPairIndex(0);
		localStorage.setItem('lastVerbIndex', String(index));
	};

	const onTranslationClick = () => {
		openTranslation(verb);
	};

	const onReversoConjugationClick = () => {
		openReversoConjugation(verb);
	};

	const onCoolConjugationClick = () => {
		openCoolConjugation(verb);
	};

	const onReversoContextClick = () => {
		openReversoContext();
	};

	React.useEffect(() => {
		const onKeyUp = (event: KeyboardEvent) => {
			if (event.key === 'ArrowDown') {
				selectNextPronounPair();
				event.preventDefault();
			}
			if (event.key === 'ArrowUp') {
				selectPrevPronounPair();
				event.preventDefault();
			}
			if (event.key === 'ArrowRight') {
				selectNextVerb();
				event.preventDefault();
			}
			if (event.key === 'ArrowLeft') {
				selectPrevVerb();
				event.preventDefault();
			}
		};
		window.addEventListener('keyup', onKeyUp);
		return () => {
			window.removeEventListener('keyup', onKeyUp);
		};
	}, [
		selectNextPronounPair,
		selectPrevPronounPair,
		selectNextVerb,
		selectPrevVerb,
	]);

	return (
		<Layout>
			<div className="centered-text">
				<VerbContainers>
					<button className="emoji button" onClick={onPrevius}>
						⬅️
					</button>
					<div>
						<Index className="centered-text">{index + 1}</Index>
						<Verb className="centered-text">{verb}</Verb>
					</div>
					<button className="emoji button" onClick={onNext}>
						➡️
					</button>
				</VerbContainers>
			</div>
			<Container>
				<Col>
					<Card style={{ flexDirection: 'column' }} className="centered-text">
						<div>
							<H4 className="centered-text">Specific links</H4>
							<button className="button" onClick={onReversoConjugationClick}>
								reverso conjugation
							</button>
							<button className="button" onClick={onCoolConjugationClick}>
								cool conjugation
							</button>
						</div>
						<div>
							<H4 className="centered-text">General links</H4>
							<button className="button" onClick={onTranslationClick}>
								translation
							</button>
							<button className="button" onClick={onReversoContextClick}>
								Context Reverson
							</button>
						</div>
					</Card>
				</Col>
				<Col>
					<div className="flex centered-flex ">
						<Card style={{ width: '100%' }}>
							<PronounPairs>
								<NotCurrentPronounPair>
									{prevPronounPair && (
										<NotButton onClick={selectPrevPronounPair}>
											{prevPronounPair[0]} - {prevPronounPair[1]}
										</NotButton>
									)}
								</NotCurrentPronounPair>
								<CurrentPronounPair>
									{pronounPair[0]} - {pronounPair[1]}
								</CurrentPronounPair>
								<NotCurrentPronounPair>
									{nextPronounPair && (
										<NotButton onClick={selectNextPronounPair}>
											{nextPronounPair[0]} - {nextPronounPair[1]}
										</NotButton>
									)}
								</NotCurrentPronounPair>
							</PronounPairs>
						</Card>
					</div>
					<CenteredCard>
						<Table headers={headers} rows={rows} />
					</CenteredCard>
				</Col>
			</Container>
		</Layout>
	);
};

const Container = styled.div`
	max-width: 960px;
	display: flex;
	margin: 0 auto;
`;

const Col = styled.div`
	flex: 1;
`;

export default EachVerb;
