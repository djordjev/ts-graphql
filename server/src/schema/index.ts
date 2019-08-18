import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';
import typeDefs from './schemas';

const createSchema = (): GraphQLSchema => {
  const executibleSchema: GraphQLSchema = makeExecutableSchema({
    resolvers,
    typeDefs
  });

  return executibleSchema;
};

export default createSchema;
