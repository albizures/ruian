import React from 'react';
import styled from '@emotion/styled';

interface PropTypes {
	headers?: string[];
	rows?: string[][];
	emptyFallback?: React.ReactNode;
}

const Td = styled.td`
	padding: 4px 10px;
	text-align: center;
	border-top: 1px solid #d8dee9;
	font-size: 1.1rem;
`;

const TdHeader = styled(Td)`
	color: #434c5e;
	border-top: 0px;
`;

const Tr = styled.tr``;

const StyledTable = styled.table`
	border-collapse: collapse;
	overflow: auto;
`;

const getHeaders = (props: PropTypes) => {
	const { rows, headers } = props;
	if (headers && headers.length !== 0) {
		return props;
	}

	if (!rows) {
		return {};
	}

	return {
		headers: rows[0],
		rows: rows.slice(1),
	};
};

const Table: React.FC<PropTypes> = (props) => {
	const { emptyFallback = null } = props;
	const { rows, headers } = getHeaders(props);

	if (!rows || rows.length === 0) {
		return <>{emptyFallback}</>;
	}

	return (
		<StyledTable className="w-full max-w-xs mx-auto">
			<thead className="bg-gray-100">
				<Tr>
					{headers.map((header, index) => (
						<TdHeader key={index}>{header}</TdHeader>
					))}
				</Tr>
			</thead>
			<tbody>
				{rows.map((row, index) => (
					<Tr key={index}>
						{row.map((row, index) => (
							<Td key={index}>{row}</Td>
						))}
					</Tr>
				))}
			</tbody>
		</StyledTable>
	);
};

export default Table;
