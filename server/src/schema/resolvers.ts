import { IResolvers } from 'graphql-tools';
import { merge } from 'lodash';

import signup from '../api/auth/signup/resolvers';
import { me } from '../api/user/me/resolvers';

const root: object = {
  Mutation: {
    signup
  },
  Query: {
    me
  }
};

const resolvers: IResolvers = merge(root);

export default resolvers;
