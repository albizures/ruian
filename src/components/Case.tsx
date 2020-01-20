import React from 'react';
import styled from '@emotion/styled';
import Table from './EndingTable';
import { Card } from './elements';
import { Genders, Cases } from '../types';
import { cases } from '../cases';

interface PropTypes {
  case: Cases;
}

const TablesContainer = styled.div`
  display: flex;

  & > table:last-child {
    margin-right: 0;
  }

  overflow: auto;

  @media (max-width: 420px) {
    align-items: center;
  }
`;

const Title = styled.h3`
  text-align: center;
  margin: 0;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 1.2rem;
`;

const Case: React.FC<PropTypes> = (props) => {
  const { name, notes } = cases[props.case];

  const footNotes =
    notes &&
    Object.keys(notes).map((key) => (
      <p key={key}>
        {key} {notes[key]}
      </p>
    ));

  return (
    <Card>
      <Title>{name}</Title>

      <TablesContainer>
        <Table {...props} gender={Genders.Masculine} />
        <Table {...props} gender={Genders.Feminine} />
        <Table {...props} gender={Genders.Neuter} />
      </TablesContainer>
      {footNotes}
    </Card>
  );
};

export default Case;
