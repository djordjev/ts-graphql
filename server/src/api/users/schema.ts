import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID
    firstName: String!
    age: Int
    company: Company
  }
`;
