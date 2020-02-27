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
	nouns: {
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
};

export { genitive };
