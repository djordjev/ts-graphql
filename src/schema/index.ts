import { buildSchema, GraphQLSchema } from 'graphql';

const schema: GraphQLSchema = buildSchema(`
  type UserType {
    age: Int
    firstName: String
    id: String
  },
  type Query {
    user(id: String!): UserType
  }
`);

export default schema;
