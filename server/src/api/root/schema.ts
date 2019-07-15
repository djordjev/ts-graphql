import { gql } from 'apollo-server';

const schema = gql`
  type Query

  schema {
    query: Query
  }
`;

export default schema;
