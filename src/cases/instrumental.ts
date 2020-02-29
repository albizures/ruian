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
	adjectives: {
		[Masculine]: [
			['1', '5'],
			['-ый', '-ым'],
			['-ий', '-им'],
		],
		[Feminine]: [
			['1', '5'],
			['-ая', '-ой'],
			['-яя', '-ей/-ею'],
		],
		[Neuter]: [
			['1', '5'],
			['-ое', '-ым'],
			['-ее', '-им'],
		],
	},
};

export { instrumental };
