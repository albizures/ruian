import React from 'react';
import { opneAdjectiveCoolConjugator, openReversoContext } from '../utils';
import { useList } from '../hooks/useList';
import { useLocalIndex } from '../hooks/useLocalIndex';
import { adjectives } from '../adjectives';

const Adjectives: React.FC = () => {
	const {
		index,
		setIndex: setAdjectiveIndex,
		current: adjective,
		selectNext: selectNextAdjective,
		selectPrev: selectPrevAdjective,
	} = useList({
		list: adjectives,
		loop: true,
	});

	const saveIndex = useLocalIndex('lastAdjetiveIndex', setAdjectiveIndex);

	const onPrevious = () => {
		selectPrevAdjective();
		saveIndex(index);
	};

	const onNext = () => {
		selectNextAdjective();
		saveIndex(index);
	};

	React.useEffect(() => {
		const onKeyUp = (event: KeyboardEvent) => {
			if (event.key === 'ArrowRight') {
				onNext();
				event.preventDefault();
			}
			if (event.key === 'ArrowLeft') {
				onPrevious();
				event.preventDefault();
			}
		};
		window.addEventListener('keyup', onKeyUp);
		return () => {
			window.removeEventListener('keyup', onKeyUp);
		};
	}, [selectNextAdjective, selectPrevAdjective]);

	const onCoolConjugatorClick = () => {
		opneAdjectiveCoolConjugator(adjective);
	};

	return (
		<div className="centered-text">
			<button className="emoji button" onClick={onPrevious}>
				⬅️
			</button>
			<h1>{adjective}</h1>
			<button className="emoji button" onClick={onNext}>
				➡️
			</button>
			<br />
			<button className="button" onClick={onCoolConjugatorClick}>
				Context Reverson
			</button>
			<button className="button" onClick={openReversoContext}>
				Context Reverson
			</button>
		</div>
	);
};

export default Adjectives;
