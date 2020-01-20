export enum Genders {
  Masculine,
  Feminine,
  Neuter,
}

export interface CaseEndingRow {
  [key: string]: string;
}

export interface Notes {
  [key: string]: string;
}

export enum Pronouns {
  Singular1st = 'Я',
  Singular2nd = 'Ты',
  Singular3rdMasculine = 'Он',
  Singular3rdFeminine = 'Она',
  Plural1st = 'Мы',
  Plural2nd = 'Вы',
  Plural3rd = 'Они',
}

export interface Case {
  name: string;
  notes?: Notes;
  pronouns: {
    [Pronouns.Singular1st]: string;
    [Pronouns.Singular2nd]: string;
    [Pronouns.Singular3rdMasculine]: string;
    [Pronouns.Singular3rdFeminine]: string;
    [Pronouns.Plural1st]: string;
    [Pronouns.Plural2nd]: string;
    [Pronouns.Plural3rd]: string;
  };
  endings: {
    [Genders.Masculine]: CaseEndingRow[];
    [Genders.Feminine]: CaseEndingRow[];
    [Genders.Neuter]: CaseEndingRow[];
  };
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
