import React from 'react';
import { cases } from '../cases';
import { Genders, Cases } from '../types';
import Table from './Table';

interface PropTypes {
	case: Cases;
	gender: Genders;
}

const EndingTable: React.FC<PropTypes> = (props) => {
	const endings = cases[props.case].nouns[props.gender];

	if (endings.length === 0) {
		return null;
	}

	const headers = endings[0];
	const rows = endings.slice(1);

	return <Table headers={headers} rows={rows} />;
};

export default EndingTable;
