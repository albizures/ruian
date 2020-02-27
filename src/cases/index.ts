import { CasesList, Cases } from '../types';
import { genitive } from './genitive';
import { dative } from './dative';
import { accusative } from './accusative';
import { instrumental } from './instrumental';
import { prepositional } from './prepositional';

const { Genitive, Dative, Accusative, Instrumental, Prepositional } = Cases;

const cases: CasesList = {
	[Genitive]: genitive,
	[Dative]: dative,
	[Accusative]: accusative,
	[Instrumental]: instrumental,
	[Prepositional]: prepositional,
};

export { cases };
