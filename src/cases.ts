import { CasesList, Genders, Cases, Pronouns } from './types';

const cases: CasesList = {
	[Cases.Genitive]: {
		name: 'Родительный падеж',
		pronouns: {
			[Pronouns.Singular1st]: 'меня',
			[Pronouns.Singular2nd]: 'тебя',
			[Pronouns.Singular3rdMasculine]: '(н)его',
			[Pronouns.Singular3rdFeminine]: '(н)её',
			[Pronouns.Plural1st]: 'нас',
			[Pronouns.Plural2nd]: 'вас',
			[Pronouns.Plural3rd]: '(н)их',
		},
		endings: {
			[Genders.Masculine]: [
				{ '1': '-□', '2': '-а' },
				{ '1': '-й', '2': '-я' },
				{ '1': '-ь', '2': '-я' },
			],
			[Genders.Feminine]: [
				{ '1': '-а', '2': '-ы' },
				{ '1': '-я', '2': '-и' },
				{ '1': '-га', '2': '-ги' },
				{ '1': '-ка', '2': '-ки' },
				{ '1': '-ха', '2': '-хи' },
			],
			[Genders.Neuter]: [
				{ '1': '-о', '2': '-а' },
				{ '1': '-е', '2': '-я' },
			],
		},
	},
	[Cases.Dative]: {
		name: 'Дательный падеж',
		pronouns: {
			[Pronouns.Singular1st]: 'мне',
			[Pronouns.Singular2nd]: 'тебе',
			[Pronouns.Singular3rdMasculine]: 'ему',
			[Pronouns.Singular3rdFeminine]: 'ей',
			[Pronouns.Plural1st]: 'нам',
			[Pronouns.Plural2nd]: 'вам',
			[Pronouns.Plural3rd]: 'им',
		},
		endings: {
			[Genders.Masculine]: [
				{ '1': '-□', '3': '-у' },
				{ '1': '-й', '3': '-ю' },
				{ '1': '-ь', '3': '-ю' },
			],
			[Genders.Feminine]: [
				{ '1': '-а', '3': '-е' },
				{ '1': '-я', '3': '-е' },
				{ '1': '-ь', '3': '-и' },
			],
			[Genders.Neuter]: [
				{ '1': '-о', '3': '-у' },
				{ '1': '-е', '3': '-ю' },
			],
		},
	},
	[Cases.Accusative]: {
		name: 'винительный падеж',
		notes: {
			'*': 'only for animated things',
		},
		pronouns: {
			[Pronouns.Singular1st]: 'меня',
			[Pronouns.Singular2nd]: 'тебя',
			[Pronouns.Singular3rdMasculine]: 'его',
			[Pronouns.Singular3rdFeminine]: 'её',
			[Pronouns.Plural1st]: 'нас',
			[Pronouns.Plural2nd]: 'вас',
			[Pronouns.Plural3rd]: 'их',
		},
		endings: {
			[Genders.Masculine]: [
				{ '1': '-□', '4*': '-а' },
				{ '1': '-й', '4*': '-я' },
				{ '1': '-ь', '4*': '-я' },
			],
			[Genders.Feminine]: [
				{ '1': '-а', '4': '-у' },
				{ '1': '-я', '4': '-ю' },
			],
			[Genders.Neuter]: [],
		},
	},
	[Cases.Instrumental]: {
		name: 'творительный падеж',
		pronouns: {
			[Pronouns.Singular1st]: 'мной',
			[Pronouns.Singular2nd]: 'тобой',
			[Pronouns.Singular3rdMasculine]: '(н)им',
			[Pronouns.Singular3rdFeminine]: '(н)ей',
			[Pronouns.Plural1st]: 'нами',
			[Pronouns.Plural2nd]: 'вами',
			[Pronouns.Plural3rd]: '(н)ими',
		},
		endings: {
			[Genders.Masculine]: [
				{ '1': '-□', '5': '-ом' },
				{ '1': '-й', '5': '-ем' },
			],
			[Genders.Feminine]: [
				{ '1': '-а', '5': '-ой' },
				{ '1': '-ь', '5': '-ью' },
			],
			[Genders.Neuter]: [
				{ '1': '-е', '5': '-ем' },
				{ '1': '-о', '5': '-ом' },
			],
		},
	},
	[Cases.Prepositional]: {
		name: 'Предложный падеж',
		pronouns: {
			[Pronouns.Singular1st]: 'мне',
			[Pronouns.Singular2nd]: 'тебе',
			[Pronouns.Singular3rdMasculine]: 'нём',
			[Pronouns.Singular3rdFeminine]: 'ней',
			[Pronouns.Plural1st]: 'нас',
			[Pronouns.Plural2nd]: 'вас',
			[Pronouns.Plural3rd]: 'них',
		},
		endings: {
			[Genders.Masculine]: [
				{ '1': '-□', '6': '-е' },
				{ '1': '-й', '6': '-е' },
				{ '1': '-ий', '6': '-ии' },
				{ '1': '-ь', '6': '-е' },
			],
			[Genders.Feminine]: [
				{ '1': '-а', '6': '-е' },
				{ '1': '-я', '6': '-е' },
				{ '1': '-ия', '6': '-ии' },
				{ '1': '-ь', '6': '-и' },
			],
			[Genders.Neuter]: [
				{ '1': '-о', '6': '-е' },
				{ '1': '-е', '6': '-е' },
				{ '1': '-ие', '6': '-ии' },
			],
		},
	},
};

export { cases };
