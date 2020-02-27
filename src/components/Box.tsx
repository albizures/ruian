import React from 'react';
import { H4 } from './elements';

interface PropTypes {
	title: string;
	className?: string;
}

const Box: React.FC<PropTypes> = (props) => {
	const { title, children, className = '' } = props;

	return (
		<>
			<H4 className="text-2xl pl-3 mt-3 mb-2 capitalize font-light">{title}</H4>
			<div className={`rounded-sm bg-white shadow p-3 ${className}`}>
				{children}
			</div>
		</>
	);
};

export default Box;
