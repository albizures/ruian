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

export interface CaseEnding {
  name: string;
  notes?: Notes;
  [Genders.Masculine]: CaseEndingRow[];
  [Genders.Feminine]: CaseEndingRow[];
  [Genders.Neuter]: CaseEndingRow[];
}

export enum Cases {
  Genitive,
  Dative,
  Accusative,
  Instrumental,
  Prepositional,
}

export interface CaseEndings {
  [Cases.Genitive]: CaseEnding;
  [Cases.Dative]: CaseEnding;
  [Cases.Accusative]: CaseEnding;
  [Cases.Instrumental]: CaseEnding;
  [Cases.Prepositional]: CaseEnding;
}

const endings: CaseEndings = {
  [Cases.Genitive]: {
    name: 'Родительный падеж',
    [Genders.Masculine]: [
      { '1': '-□', '2': '-а' },
      { '1': '-й', '2': '-я' },
      { '1': '-ь', '2': '-я' },
    ],
    [Genders.Feminine]: [
      { '1': '-а', '2': '-ы' },
      { '1': '-я', '2': '-и' },
      { '1': '-га', '2': '-ги' },
      { '1': '-ка', '2': '-ки' },
      { '1': '-ха', '2': '-хи' },
    ],
    [Genders.Neuter]: [
      { '1': '-о', '2': '-а' },
      { '1': '-е', '2': '-я' },
    ],
  },
  [Cases.Dative]: {
    name: 'Дательный падеж',
    [Genders.Masculine]: [
      { '1': '-□', '3': '-у' },
      { '1': '-й', '3': '-ю' },
      { '1': '-ь', '3': '-ю' },
    ],
    [Genders.Feminine]: [
      { '1': '-а', '3': '-е' },
      { '1': '-я', '3': '-е' },
      { '1': '-ь', '3': '-и' },
    ],
    [Genders.Neuter]: [
      { '1': '-о', '3': '-у' },
      { '1': '-е', '3': '-ю' },
    ],
  },
  [Cases.Accusative]: {
    name: 'винительный падеж',
    notes: {
      '*': 'only for animated things',
    },
    [Genders.Masculine]: [
      { '1': '-□', '4*': '-а' },
      { '1': '-й', '4*': '-я' },
      { '1': '-ь', '4*': '-я' },
    ],
    [Genders.Feminine]: [
      { '1': '-а', '4': '-у' },
      { '1': '-я', '4': '-ю' },
    ],
    [Genders.Neuter]: [],
  },
  [Cases.Instrumental]: {
    name: 'творительный падеж',
    [Genders.Masculine]: [
      { '1': '-□', '5': '-ом' },
      { '1': '-й', '5': '-ем' },
    ],
    [Genders.Feminine]: [
      { '1': '-а', '5': '-ой' },
      { '1': '-ь', '5': '-ью' },
    ],
    [Genders.Neuter]: [
      { '1': '-е', '5': '-ем' },
      { '1': '-о', '5': '-ом' },
    ],
  },
  [Cases.Prepositional]: {
    name: 'Предложный падеж',
    [Genders.Masculine]: [
      { '1': '-□', '6': '-е' },
      { '1': '-й', '6': '-е' },
      { '1': '-ий', '6': '-ии' },
      { '1': '-ь', '6': '-е' },
    ],
    [Genders.Feminine]: [
      { '1': '-а', '6': '-е' },
      { '1': '-я', '6': '-е' },
      { '1': '-ия', '6': '-ии' },
      { '1': '-ь', '6': '-и' },
    ],
    [Genders.Neuter]: [
      { '1': '-о', '6': '-е' },
      { '1': '-е', '6': '-е' },
      { '1': '-ие', '6': '-ии' },
    ],
  },
};

export { endings };
