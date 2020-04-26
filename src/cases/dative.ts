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
	name: 'дательный падеж',
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
			['-й, -ь', '-ю'],
		],
		[Feminine]: [
			['1', '3'],
			['-а, -я', '-е'],
			['-ь', '-и'],
		],
		[Neuter]: [
			['1', '3'],
			['-о', '-у'],
			['-е', '-ю'],
		],
		Plural: [
			['1', '3'],
			['-□, -а, -о', 'ам'],
			['-й, -ь, -я, -е', 'ям'],
		],
	},
	adjectives: {
		[Masculine]: [
			['1', '3'],
			['-ый', '-ому'],
			['-ний', '-ему'],
			['-ж--, -ш--, -ч--, -щ--', '-ему'],
		],
		[Feminine]: [
			['1', '3'],
			['-ая', '-ой'],
			['-яя', '-ей'],
		],
		[Neuter]: [
			['1', '3'],
			['-ое', '-ому'],
			['-ее', '-ему'],
		],
		Plural: [
			['3', '3'],
			['-ому', '-ым'],
			['-ему', '-им'],
		],
	},
};

export { dative };
