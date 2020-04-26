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
			['-□, -й, -ь', '-е'],
			['-ий', '-ии'],
		],
		[Feminine]: [
			['1', '6'],
			['-а, -я', '-е'],
			['-ия', '-ии'],
			['-ь', '-и'],
		],
		[Neuter]: [
			['1', '6'],
			['-о, -е', '-е'],
			['-ие', '-ии'],
		],
		Plural: [
			['1', '6'],
			['-□', '-ах'],
			['-я, -ь, -й, -е', '-ях'],
		],
	},
	adjectives: {
		[Masculine]: [
			['1', '6'],
			['-ый', '-ом'],
			['-ий', '-ем'],
			['-ч--, -ж--, -ш--, -щ--, -ц--', '-ем'],
		],
		[Feminine]: [
			['1', '6'],
			['-ая', '-ой'],
			['-яя', '-ей'],
			['-ч--, -ж--, -ш--, -щ--, -ц--', '-ей'],
		],
		[Neuter]: [
			['1', '6'],
			['-ое', '-ом'],
			['-ее', '-ем'],
		],
		Plural: [
			['6', '6'],
			['-ом, -ой', '-ых'],
			['-ем, -ей', '-их'],
		],
	},
};

export { prepositional };
