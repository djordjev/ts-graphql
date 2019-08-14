import { DocumentNode, GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

import signup from '../api/auth/resolvers';
import authSchema from '../api/auth/schema';
import companyResolvers from '../api/company/resolvers';
import companySchema from '../api/company/schema';
import getUsers from '../api/root/getUsers/resolvers';
import getUsersSchema from '../api/root/getUsers/schema';
import rootSchema from '../api/root/schema';
import userSchema from '../api/users/schema';

const typeDefs: DocumentNode[] = [
  rootSchema,
  userSchema,
  companySchema,
  getUsersSchema,
  authSchema
];

const rootResolvers = {
  Mutation: {
    signup
  },
  Query: {
    getUsers
  }
};

const resolvers = merge(rootResolvers, companyResolvers);

const createSchema = (): GraphQLSchema => {
  const executibleSchema = makeExecutableSchema({
    resolvers,
    typeDefs
  });

  return executibleSchema;
};

export default createSchema;
