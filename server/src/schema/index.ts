import { DocumentNode, GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

import rootSchema from './root';
import userSchema from './user';

import { getUsers } from '../api/users/resolvers';

const typeDefs: DocumentNode[] = [rootSchema, userSchema];

const rootResolvers = {
  Query: {
    getUsers
  }
};

const createSchema = (): GraphQLSchema => {
  const executibleSchema = makeExecutableSchema({
    resolvers: [rootResolvers],
    typeDefs
  });

  return executibleSchema;
};

export default createSchema;
