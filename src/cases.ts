import { CasesList, Genders, Cases, Pronouns } from './types';

const {
	Singular1st,
	Singular2nd,
	Singular3rdMasculine,
	Singular3rdFeminine,
	Plural1st,
	Plural2nd,
	Plural3rd,
} = Pronouns;

const { Genitive, Dative, Accusative, Instrumental, Prepositional } = Cases;
const { Masculine, Feminine, Neuter } = Genders;

const cases: CasesList = {
	[Genitive]: {
		name: 'Родительный падеж',
		pronouns: {
			[Singular1st]: 'меня',
			[Singular2nd]: 'тебя',
			[Singular3rdMasculine]: '(н)его',
			[Singular3rdFeminine]: '(н)её',
			[Plural1st]: 'нас',
			[Plural2nd]: 'вас',
			[Plural3rd]: '(н)их',
		},
		endings: {
			[Masculine]: [
				['1', '2'],
				['-□', '-а'],
				['-й', '-я'],
				['-ь', '-я'],
			],
			[Feminine]: [
				['1', '2'],
				['-а', '-ы'],
				['-я', '-и'],
				['-га', '-ги'],
				['-ка', '-ки'],
				['-ха', '-хи'],
			],
			[Neuter]: [
				['1', '2'],
				['-о', '-а'],
				['-е', '-я'],
			],
		},
	},
	[Dative]: {
		name: 'Дательный падеж',
		pronouns: {
			[Singular1st]: 'мне',
			[Singular2nd]: 'тебе',
			[Singular3rdMasculine]: 'ему',
			[Singular3rdFeminine]: 'ей',
			[Plural1st]: 'нам',
			[Plural2nd]: 'вам',
			[Plural3rd]: 'им',
		},
		endings: {
			[Masculine]: [
				['1', '3'],
				['-□', '-у'],
				['-й', '-ю'],
				['-ь', '-ю'],
			],
			[Feminine]: [
				['1', '3'],
				['-а', '-е'],
				['-я', '-е'],
				['-ь', '-и'],
			],
			[Neuter]: [
				['1', '3'],
				['-о', '-у'],
				['-е', '-ю'],
			],
		},
	},
	[Accusative]: {
		name: 'винительный падеж',
		notes: {
			'*': 'only for animated things',
		},
		pronouns: {
			[Singular1st]: 'меня',
			[Singular2nd]: 'тебя',
			[Singular3rdMasculine]: 'его',
			[Singular3rdFeminine]: 'её',
			[Plural1st]: 'нас',
			[Plural2nd]: 'вас',
			[Plural3rd]: 'их',
		},
		endings: {
			[Masculine]: [
				['1', '4*'],
				['-□', '-а'],
				['-й', '-я'],
				['-ь', '-я'],
			],
			[Feminine]: [
				['1', '4'],
				['-а', '-у'],
				['-я', '-ю'],
			],
			[Neuter]: [],
		},
	},
	[Instrumental]: {
		name: 'творительный падеж',
		pronouns: {
			[Singular1st]: 'мной',
			[Singular2nd]: 'тобой',
			[Singular3rdMasculine]: '(н)им',
			[Singular3rdFeminine]: '(н)ей',
			[Plural1st]: 'нами',
			[Plural2nd]: 'вами',
			[Plural3rd]: '(н)ими',
		},
		endings: {
			[Masculine]: [
				['1', '5'],
				['-□', '-ом'],
				['-й', '-ем'],
			],
			[Feminine]: [
				['1', '5'],
				['-а', '-ой'],
				['-ь', '-ью'],
			],
			[Neuter]: [
				['1', '5'],
				['-е', '-ем'],
				['-о', '-ом'],
			],
		},
	},
	[Prepositional]: {
		name: 'Предложный падеж',
		pronouns: {
			[Singular1st]: 'мне',
			[Singular2nd]: 'тебе',
			[Singular3rdMasculine]: 'нём',
			[Singular3rdFeminine]: 'ней',
			[Plural1st]: 'нас',
			[Plural2nd]: 'вас',
			[Plural3rd]: 'них',
		},
		endings: {
			[Masculine]: [
				['1', '6'],
				['-□', '-е'],
				['-й', '-е'],
				['-ий', '-ии'],
				['-ь', '-е'],
			],
			[Feminine]: [
				['1', '6'],
				['-а', '-е'],
				['-я', '-е'],
				['-ия', '-ии'],
				['-ь', '-и'],
			],
			[Neuter]: [
				['1', '6'],
				['-о', '-е'],
				['-е', '-е'],
				['-ие', '-ии'],
			],
		},
	},
};

export { cases };
