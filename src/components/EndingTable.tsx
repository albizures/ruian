import React from 'react';
import { cases } from '../cases';
import { Genders, Cases } from '../types';
import Table from './Table';
import { getAnimEndings } from '../utils';

interface PropTypes {
	case: Cases;
	gender: Genders;
}

const EndingTable: React.FC<PropTypes> = (props) => {
	const endings =
		props.gender === Genders.Masculine
			? getAnimEndings(cases[props.case].nouns)
			: cases[props.case].nouns[props.gender];

	if (endings.length === 0) {
		return null;
	}

	const headers = endings[0];
	const rows = endings.slice(1);

	return <Table headers={headers} rows={rows} />;
};

export default EndingTable;
