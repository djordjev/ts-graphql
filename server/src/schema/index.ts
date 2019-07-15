import { DocumentNode, GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

import companySchema from '../api/company/schema';
import getUsersSchema from '../api/root/getUsers/schema';
import rootSchema from '../api/root/schema';
import userSchema from '../api/users/schema';

import companyResolvers from '../api/company/resolvers';
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

const resolvers = merge(rootResolvers, companyResolvers);

const createSchema = (): GraphQLSchema => {
  const executibleSchema = makeExecutableSchema({
    resolvers,
    typeDefs
  });

  return executibleSchema;
};

export default createSchema;
