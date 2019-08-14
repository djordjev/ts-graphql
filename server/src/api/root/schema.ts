import { gql } from 'apollo-server';

const schema = gql`
  type Query

  type Mutation

  schema {
    query: Query
    mutation: Mutation
  }
`;

export default schema;
