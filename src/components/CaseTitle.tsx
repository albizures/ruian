import React from 'react';
import { Cases } from '../types';
import { cases } from '../cases';

interface PropTypes {
	id: Cases;
}

const CaseTitle: React.FC<PropTypes> = (props) => {
	const { id } = props;
	const { name } = cases[id];
	return (
		<>
			<span className="opacity-50 text-3xl align-text-bottom">#{id}</span>{' '}
			{name}
		</>
	);
};

export default CaseTitle;
