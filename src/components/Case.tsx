import React from 'react';
import styled from '@emotion/styled';
import Table from './Table';
import { Genders, Cases, endings } from '../endings';

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

const Container = styled.div`
  background: white;
  border-radius: 0.5em;
  box-shadow: rgba(184, 194, 215, 0.35) 0px 3px 6px 0px;
  margin: 4px;
  padding: 8px;
`;

const Title = styled.h3`
  text-align: center;
  margin: 0;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 1.2rem;
`;

const Case: React.FC<PropTypes> = (props) => {
  const { name, notes } = endings[props.case];

  const footNotes =
    notes &&
    Object.keys(notes).map((key) => (
      <p key={key}>
        {key} {notes[key]}
      </p>
    ));

  return (
    <Container>
      <Title>{name}</Title>

      <TablesContainer>
        <Table {...props} gender={Genders.Masculine} />
        <Table {...props} gender={Genders.Feminine} />
        <Table {...props} gender={Genders.Neuter} />
      </TablesContainer>
      {footNotes}
    </Container>
  );
};

export default Case;
