import { Case, Genders, Pronouns } from '../types';

const {
	Singular1st,
	Singular2nd,
	Singular3rdMasculine,
	Singular3rdFeminine,
	Plural1st,
	Plural2nd,
	Plural3rd,
} = Pronouns;

const { Masculine, Feminine, Neuter } = Genders;

const accusative: Case = {
	name: 'винительный падеж',
	pronouns: {
		[Singular1st]: 'меня',
		[Singular2nd]: 'тебя',
		[Singular3rdMasculine]: 'его',
		[Singular3rdFeminine]: 'её',
		[Plural1st]: 'нас',
		[Plural2nd]: 'вас',
		[Plural3rd]: 'их',
	},
	nouns: {
		[Masculine]: [
			['1', '4'],
			['-□', '-а'],
			['-й', '-я'],
			['-ь', '-я'],
		],
		[Feminine]: [
			['1', '4'],
			['-а', '-у'],
			['-я', '-ю'],
			['-ь', '-ь'],
		],
		[Neuter]: [],
		Plural: {
			animate: [],
			inanimate: [],
		},
	},
	adjectives: {
		[Masculine]: {
			animate: [
				['1', '4'],
				['-ый', '-ого'],
				['-ий', '-его'],
			],
			inanimate: [],
		},
		[Feminine]: [
			['1', '4'],
			['-ая', '-ую'],
			['-яя', '-юю'],
		],
		[Neuter]: [],
		Plural: {
			animate: [['', '-ых, -их']],
			inanimate: [],
		},
	},
};

export { accusative };
