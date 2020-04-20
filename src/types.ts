export enum Genders {
	Masculine = 'Masculine',
	Feminine = 'Feminine',
	Neuter = 'Neuter',
}

type CaseEndingRow = [string, string];

export enum Pronouns {
	Singular1st = 'я',
	Singular2nd = 'ты',
	Singular3rdMasculine = 'он',
	Singular3rdFeminine = 'она',
	Plural1st = 'мы',
	Plural2nd = 'вы',
	Plural3rd = 'они',
}

interface MutipleEndings {
	animate: CaseEndingRow[];
	inanimate: CaseEndingRow[];
}

export interface Endings {
	[Genders.Masculine]: CaseEndingRow[] | MutipleEndings;
	[Genders.Feminine]: CaseEndingRow[];
	[Genders.Neuter]: CaseEndingRow[];
	Plural?: CaseEndingRow[];
}

export interface Case {
	name: string;
	pronouns: {
		[Pronouns.Singular1st]: string;
		[Pronouns.Singular2nd]: string;
		[Pronouns.Singular3rdMasculine]: string;
		[Pronouns.Singular3rdFeminine]: string;
		[Pronouns.Plural1st]: string;
		[Pronouns.Plural2nd]: string;
		[Pronouns.Plural3rd]: string;
	};
	nouns: Endings;
	adjectives: Endings;
}

export enum Cases {
	Genitive = 2,
	Dative = 3,
	Accusative = 4,
	Instrumental = 5,
	Prepositional = 6,
}

export interface CasesList {
	[Cases.Genitive]: Case;
	[Cases.Dative]: Case;
	[Cases.Accusative]: Case;
	[Cases.Instrumental]: Case;
	[Cases.Prepositional]: Case;
}
