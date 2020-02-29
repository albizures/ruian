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

const prepositional: Case = {
	name: 'предложный падеж',
	pronouns: {
		[Singular1st]: 'мне',
		[Singular2nd]: 'тебе',
		[Singular3rdMasculine]: 'нём',
		[Singular3rdFeminine]: 'ней',
		[Plural1st]: 'нас',
		[Plural2nd]: 'вас',
		[Plural3rd]: 'них',
	},
	nouns: {
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
	adjectives: {
		[Masculine]: [
			['1', '6'],
			['-ый', '-ом'],
			['-ий', '-ем'],
		],
		[Feminine]: [
			['1', '6'],
			['-ая', '-ой'],
			['-яя', '-ей'],
		],
		[Neuter]: [
			['1', '6'],
			['-ое', '-ом'],
			['-ее', '-ем'],
		],
	},
};

export { prepositional };
