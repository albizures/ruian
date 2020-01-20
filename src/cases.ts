import { CasesList, Genders, Cases, Pronouns } from './types';

const cases: CasesList = {
  [Cases.Genitive]: {
    name: 'Родительный падеж',
    pronouns: {
      [Pronouns.Singular1st]: 'Меня',
      [Pronouns.Singular2nd]: 'Тебя',
      [Pronouns.Singular3rdMasculine]: 'Его',
      [Pronouns.Singular3rdFeminine]: 'Её',
      [Pronouns.Plural1st]: 'Нас',
      [Pronouns.Plural2nd]: 'Вас',
      [Pronouns.Plural3rd]: 'Их',
    },
    endings: {
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
  },
  [Cases.Dative]: {
    name: 'Дательный падеж',
    pronouns: {
      [Pronouns.Singular1st]: 'Мне',
      [Pronouns.Singular2nd]: 'Тебе',
      [Pronouns.Singular3rdMasculine]: 'Ему',
      [Pronouns.Singular3rdFeminine]: 'Ей',
      [Pronouns.Plural1st]: 'Нам',
      [Pronouns.Plural2nd]: 'Вам',
      [Pronouns.Plural3rd]: 'Им',
    },
    endings: {
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
  },
  [Cases.Accusative]: {
    name: 'винительный падеж',
    notes: {
      '*': 'only for animated things',
    },
    pronouns: {
      [Pronouns.Singular1st]: 'Меня',
      [Pronouns.Singular2nd]: 'Тебя',
      [Pronouns.Singular3rdMasculine]: 'Его',
      [Pronouns.Singular3rdFeminine]: 'Её',
      [Pronouns.Plural1st]: 'Нас',
      [Pronouns.Plural2nd]: 'Вас',
      [Pronouns.Plural3rd]: 'Их',
    },
    endings: {
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
  },
  [Cases.Instrumental]: {
    name: 'творительный падеж',
    pronouns: {
      [Pronouns.Singular1st]: 'Мной',
      [Pronouns.Singular2nd]: 'Тобой',
      [Pronouns.Singular3rdMasculine]: 'Им',
      [Pronouns.Singular3rdFeminine]: 'Ей',
      [Pronouns.Plural1st]: 'Нами',
      [Pronouns.Plural2nd]: 'Вами',
      [Pronouns.Plural3rd]: 'Ими',
    },
    endings: {
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
  },
  [Cases.Prepositional]: {
    name: 'Предложный падеж',
    pronouns: {
      [Pronouns.Singular1st]: 'Мне',
      [Pronouns.Singular2nd]: 'Тебе',
      [Pronouns.Singular3rdMasculine]: 'Нём',
      [Pronouns.Singular3rdFeminine]: 'Ней',
      [Pronouns.Plural1st]: 'Нас',
      [Pronouns.Plural2nd]: 'Вас',
      [Pronouns.Plural3rd]: 'Них',
    },
    endings: {
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
  },
};

export { cases };
