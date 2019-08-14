import { gql } from 'apollo-server-express';

export default gql`
  type AuthPayload {
    username: String!
    token: String!
  }

  extend type Mutation {
    signup(username: String!, password: String!): AuthPayload!
  }
`;
