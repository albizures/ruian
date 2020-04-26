import { verbs } from '../verbs';
import { Genders, Endings, MutipleEndings, CaseEndingRow } from '../types';

const { Masculine } = Genders;

interface WeightedItem<T extends unknown> {
	value: T;
	weight: number;
}

interface RandonList<T extends unknown> {
	getItem: () => T;
}

const cache = new WeakMap();

const createRandomList = <T extends unknown>(list: T[]): RandonList<T> => {
	if (cache.has(list)) {
		return cache.get(list);
	}

	let weightedList: WeightedItem<T>[] = list.map((item) => ({
		weight: 10,
		value: item,
	}));

	const getStats = () => {
		return weightedList.reduce(
			(result, item) => {
				return {
					bigger: item.weight > result.bigger ? item.weight : result.bigger,
					totalWeight: result.totalWeight + item.weight,
				};
			},
			{ totalWeight: 0, bigger: 20 },
		);
	};

	const getItem = (): T => {
		const { bigger, totalWeight } = getStats();
		let randomWeight = Math.floor(Math.random() * totalWeight);

		let index = weightedList.findIndex((item) => {
			randomWeight = randomWeight - item.weight;

			return randomWeight <= 0;
		});

		if (index === -1) {
			index = list.length - 1;
		}

		weightedList.forEach((item, currentIndex) => {
			if (currentIndex === index) {
				item.weight = item.weight - 5;
			} else {
				if (bigger > item.weight) {
					item.weight = item.weight + 2;
				}
			}
		});

		weightedList = weightedList.sort(
			(item1, item2) => item1.weight - item2.weight,
		);

		return list[index];
	};

	const randomList = {
		getItem,
	};

	cache.set(list, randomList);

	return randomList;
};

const getRandomElement = <T extends unknown>(items: T[]): T => {
	const index = Math.floor(Math.random() * items.length);
	return items[index];
};

const open = (link: string) => {
	window.open(link);
};

const openTranslation = (verb: string) => {
	const encodedVerb = encodeURIComponent(verb);
	open(`https://translate.yandex.com/?lang=ru-en&text=${encodedVerb}`);
};

const openReversoConjugation = (verb: string) => {
	const encodedVerb = encodeURIComponent(verb);
	open(
		`https://conjugator.reverso.net/conjugation-russian-verb-${encodedVerb}.html`,
	);
};
const openCoolConjugation = (verb: string) => {
	const encodedVerb = encodeURIComponent(verb);
	open(`https://cooljugator.com/ru/${encodedVerb}`);
};

const openReversoContext = () => {
	open(`https://context.reverso.net/translation/russian-english`);
};

const opneAdjectiveCoolConjugator = (adjective: string) => {
	const encodedAdjective = encodeURIComponent(adjective);

	open(`https://cooljugator.com/rua/${encodedAdjective}`);
};

const openPages = (verb: string) => {
	openTranslation(verb);
	openReversoConjugation(verb);
};

function* eachVerb(offset = 0) {
	for (let index = offset; index < verbs.length; index++) {
		const verb = verbs[index];

		yield {
			verb,
			index,
		};
	}
}

const getCombinations = <T>(items: T[]): [T, T][] => {
	let combinations = [];

	for (let i = 0; i < items.length - 1; i++) {
		for (let j = i + 1; j < items.length; j++) {
			combinations.push([items[i], items[j]]);
		}
	}

	return combinations;
};

const suffleItems = <T>(items: T[]): T[] => {
	const suffledItems = [].concat(items);
	for (let i = suffledItems.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));

		[suffledItems[i], suffledItems[j]] = [suffledItems[j], suffledItems[i]];
	}
	return suffledItems;
};

const getAnimEndings = (endings: CaseEndingRow[] | MutipleEndings) => {
	if (!endings) {
		return [];
	}

	if (Array.isArray(endings)) {
		return endings;
	}

	return endings.animate;
};

const getInanimEndings = (endings: CaseEndingRow[] | MutipleEndings) => {
	if (!endings) {
		return [];
	}

	if (Array.isArray(endings)) {
		return endings;
	}

	return endings.inanimate;
};

export {
	eachVerb,
	openPages,
	createRandomList,
	openReversoConjugation,
	openReversoContext,
	openCoolConjugation,
	openTranslation,
	getRandomElement,
	getCombinations,
	suffleItems,
	getAnimEndings,
	getInanimEndings,
	opneAdjectiveCoolConjugator,
};
