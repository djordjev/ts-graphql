import { gql } from 'apollo-server';

export default gql`
  type User {
    id: ID
    firstName: String
    email: String
    lastName: String
    role: String
  }
`;
