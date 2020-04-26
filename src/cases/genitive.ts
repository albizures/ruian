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

const genitive: Case = {
	name: 'родительный падеж',
	pronouns: {
		[Singular1st]: 'меня',
		[Singular2nd]: 'тебя',
		[Singular3rdMasculine]: '(н)его',
		[Singular3rdFeminine]: '(н)её',
		[Plural1st]: 'нас',
		[Plural2nd]: 'вас',
		[Plural3rd]: '(н)их',
	},
	nouns: {
		[Masculine]: [
			['1', '2'],
			['-□', '-а'],
			['-й, -ь', '-я'],
		],
		[Feminine]: [
			['1', '2'],
			['-а', '-ы'],
			['-я', '-и'],
			['-га, -ка, -ха', '-ги, -ки, -хи'],
		],
		[Neuter]: [
			['1', '2'],
			['-о', '-а'],
			['-е', '-я'],
		],
		Plural: [
			['1', '2'],
			['-□', '-ов'],
			['-й', '-ев'],
			['-ь', '-ьей'],
			['-ж, -ш, -ч, -щ', '+ей'],
			['-е', '-ей'],
			['-а, -о', '-□'],
			['-ие, -ия', '-ий'],
		],
	},
	adjectives: {
		[Masculine]: [
			['1', '2'],
			['-ый', '-ого'],
			['-ий', '-его'],
		],
		[Feminine]: [
			['1', '2'],
			['-ая', '-ой'],
			['-яя', '-ей'],
		],
		[Neuter]: [
			['1', '2'],
			['-ое', '-ого'],
			['-ее', '-его'],
		],
		Plural: [
			['1', '2'],
			['-ого, -ой', '-ых'],
			['-его, -ей', '-их'],
		],
	},
};

export { genitive };
