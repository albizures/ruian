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
				{ '1': '-□', '2': '-а' },
				{ '1': '-й', '2': '-я' },
				{ '1': '-ь', '2': '-я' },
			],
			[Feminine]: [
				{ '1': '-а', '2': '-ы' },
				{ '1': '-я', '2': '-и' },
				{ '1': '-га', '2': '-ги' },
				{ '1': '-ка', '2': '-ки' },
				{ '1': '-ха', '2': '-хи' },
			],
			[Neuter]: [
				{ '1': '-о', '2': '-а' },
				{ '1': '-е', '2': '-я' },
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
				{ '1': '-□', '3': '-у' },
				{ '1': '-й', '3': '-ю' },
				{ '1': '-ь', '3': '-ю' },
			],
			[Feminine]: [
				{ '1': '-а', '3': '-е' },
				{ '1': '-я', '3': '-е' },
				{ '1': '-ь', '3': '-и' },
			],
			[Neuter]: [
				{ '1': '-о', '3': '-у' },
				{ '1': '-е', '3': '-ю' },
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
				{ '1': '-□', '4*': '-а' },
				{ '1': '-й', '4*': '-я' },
				{ '1': '-ь', '4*': '-я' },
			],
			[Feminine]: [
				{ '1': '-а', '4': '-у' },
				{ '1': '-я', '4': '-ю' },
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
				{ '1': '-□', '5': '-ом' },
				{ '1': '-й', '5': '-ем' },
			],
			[Feminine]: [
				{ '1': '-а', '5': '-ой' },
				{ '1': '-ь', '5': '-ью' },
			],
			[Neuter]: [
				{ '1': '-е', '5': '-ем' },
				{ '1': '-о', '5': '-ом' },
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
				{ '1': '-□', '6': '-е' },
				{ '1': '-й', '6': '-е' },
				{ '1': '-ий', '6': '-ии' },
				{ '1': '-ь', '6': '-е' },
			],
			[Feminine]: [
				{ '1': '-а', '6': '-е' },
				{ '1': '-я', '6': '-е' },
				{ '1': '-ия', '6': '-ии' },
				{ '1': '-ь', '6': '-и' },
			],
			[Neuter]: [
				{ '1': '-о', '6': '-е' },
				{ '1': '-е', '6': '-е' },
				{ '1': '-ие', '6': '-ии' },
			],
		},
	},
};

export { cases };
