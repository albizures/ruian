import React from 'react';
import { cases } from '../cases';
import { Genders, Cases } from '../types';
import Table from './Table';

interface PropTypes {
  case: Cases;
  gender: Genders;
}

const EndingTable: React.FC<PropTypes> = (props) => {
  const rows = cases[props.case].endings[props.gender];

  if (rows.length === 0) {
    return null;
  }

  const headers = Object.keys(rows[0]);

  return <Table headers={headers} rows={rows} />;
};

export default EndingTable;
