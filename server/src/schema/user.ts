import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID
    firstName: String!
    age: Int
  }

  extend type Query {
    getUsers(userId: Int!): [User]!
  }
`;
