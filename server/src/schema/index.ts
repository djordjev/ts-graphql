import { DocumentNode, GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

import companySchema from '../api/company/schema';
import getUsersSchema from '../api/root/getUsers/schema';
import rootSchema from '../api/root/schema';
import userSchema from '../api/users/schema';

import getUsers from '../api/root/getUsers/resolvers';

const typeDefs: DocumentNode[] = [
  rootSchema,
  userSchema,
  companySchema,
  getUsersSchema
];

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
