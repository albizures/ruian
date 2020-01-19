import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Genders, Cases, endings } from '../endings';

interface PropTypes {
  case: Cases;
  gender: Genders;
}

const Td = styled.td`
  padding: 4px 10px;
  text-align: center;
  border-left: 1px solid #e5e9f0;
  border-right: 1px solid #e5e9f0;
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
  margin-right: 18px;
`;

const Table: React.FC<PropTypes> = (props) => {
  const rows = endings[props.case][props.gender];

  if (rows.length === 0) {
    return null;
  }

  const headers = Object.keys(rows[0]);

  return (
    <StyledTable>
      <thead>
        <Tr>
          {headers.map((header, index) => (
            <TdHeader key={index}>{header}</TdHeader>
          ))}
        </Tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <Tr key={index}>
            {headers.map((header, index) => (
              <Td key={index}>{row[header]}</Td>
            ))}
          </Tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
