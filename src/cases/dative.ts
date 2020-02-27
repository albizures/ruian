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

const dative: Case = {
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
	nouns: {
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
};

export { dative };
