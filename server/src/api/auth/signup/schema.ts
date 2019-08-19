import { gql } from 'apollo-server-express';

export default gql`
  type AuthPayload {
    user: User
    token: String!
  }

  extend type Mutation {
    signup(
      username: String!
      password: String!
      firstName: String!
      lastName: String!
      role: String
      email: String
    ): AuthPayload!
  }
`;
