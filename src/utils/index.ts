import { verbs } from '../verbs';

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

		console.table(weightedList);

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
	open(`https://context.reverso.net/перевод/русский-английский/`);
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

export {
	eachVerb,
	openPages,
	createRandomList,
	openReversoConjugation,
	openReversoContext,
	openCoolConjugation,
	openTranslation,
	getRandomElement,
};
