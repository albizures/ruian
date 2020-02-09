import React from 'react';
import { pronouns } from '../pronouns';
import { verbs } from '../verbs';
import Layout from '../components/Layout';
import Pronouns from '../components/Pronouns';
import {
	openReversoConjugation,
	openCoolConjugation,
	openTranslation,
	getRandomElement,
	openReversoContext,
} from '../utils';
import styled from '@emotion/styled';

const getLastIndex = () => {
	const lastVerbIndex = Number(localStorage.getItem('lastVerbIndex'));

	return Number.isNaN(lastVerbIndex) ? 0 : lastVerbIndex;
};

const createPronounList = () => {
	const first = pronouns.map(() => getRandomElement(pronouns));
	const second = pronouns.map((_pronoun, index) => {
		let pronoun = getRandomElement(pronouns);
		while (first[index] === pronoun) {
			pronoun = getRandomElement(pronouns);
		}

		return pronoun;
	});
	return {
		first,
		second,
	};
};

const defaultPronounList = createPronounList();

const H4 = styled.div`
	margin-bottom: 4px;
`;

const EachVerb: React.FC = () => {
	const [index, setIndex] = React.useState(0);
	const [{ first, second }, setPronounList] = React.useState(
		defaultPronounList,
	);
	const verb = verbs[index];

	React.useEffect(() => {
		const lastIndex = getLastIndex();

		setIndex(verbs.length < lastIndex ? 0 : lastIndex);
	}, []);

	const onNext = () => {
		const newIndex = index + 1;
		setIndex(verbs.length < newIndex ? 0 : newIndex);
		localStorage.setItem('lastVerbIndex', String(index));
	};

	const onPrevius = () => {
		const newIndex = index - 1;
		setIndex(newIndex < 0 ? verbs.length - 1 : newIndex);
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

	return (
		<Layout>
			<div className="flex space-evenly">
				<div>
					<h3 className="centered-text">{index + 1}</h3>
					<h1 className="centered-text">{verb}</h1>
					<div className="centered-text">
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
						<div>
							<H4 className="centered-text">Actions</H4>
							<button className="emoji button" onClick={onPrevius}>
								⬅️
							</button>
							<button className="emoji button" onClick={onNext}>
								➡️
							</button>
						</div>
					</div>
				</div>
				<div>
					<div className="flex centered-flex ">
						<ul>
							{first.map((pronoun, index) => (
								<li key={index}>{pronoun}</li>
							))}
						</ul>
						<ul>
							{second.map((pronoun, index) => (
								<li key={index}>{pronoun}</li>
							))}
						</ul>
					</div>
					<Pronouns />
				</div>
			</div>
		</Layout>
	);
};

export default EachVerb;
