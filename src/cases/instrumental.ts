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

const instrumental: Case = {
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
	nouns: {
		[Masculine]: [
			['1', '5'],
			['-□', '-ом'],
			['-й', '-ем'],
			['-ч, -ж, -ш, -щ, -ц', '+ем'],
		],
		[Feminine]: [
			['1', '5'],
			['-а', '-ой'],
			['-я', '-ей'],
			['-ч-, -ж-, -ш-, -щ-, -ц-', '-ей'],
			['-ь', '-ью'],
		],
		[Neuter]: [
			['1', '5'],
			['-о', '-ом'],
			['-е', '-ем'],
		],
		Plural: [
			['5', '5'],
			['-ом, -ой', '-ами'],
			['-ем, -ей', '-ями'],
		],
	},
	adjectives: {
		[Masculine]: [
			['1', '5'],
			['-ый', '-ым'],
			['-ий', '-им'],
			['-ч--, -ж--, -ш--, -щ--, -ц--', '-им'],
		],
		[Feminine]: [
			['1', '5'],
			['-ая', '-ой'],
			['-яя', '-ей'],
			['-ч--, -ж--, -ш--, -щ--, -ц--', '-ей'],
		],
		[Neuter]: [
			['1', '5'],
			['-ое', '-ым'],
			['-ее', '-им'],
		],
		Plural: [
			['5', '5'],
			['-ым, -ой', '-ыми'],
			['-им, -ей', '-ими'],
		],
	},
};

export { instrumental };
