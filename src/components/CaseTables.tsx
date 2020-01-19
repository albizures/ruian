import { Cases } from '../endings';
import Case from './Case';
import { Flex } from './elements';

const CaseTables = () => (
  <Flex>
    <Case case={Cases.Genitive} />
    <Case case={Cases.Dative} />
    <Case case={Cases.Accusative} />
    <Case case={Cases.Instrumental} />
    <Case case={Cases.Prepositional} />
  </Flex>
);

export default CaseTables;
