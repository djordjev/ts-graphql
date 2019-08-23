import { IResolvers } from 'graphql-tools';
import { merge } from 'lodash';

import { login } from '../api/auth/login/resolver';
import { logout } from '../api/auth/logout/resolver';
import signup from '../api/auth/signup/resolvers';
import { me } from '../api/user/me/resolvers';

const root: object = {
  Mutation: {
    login,
    logout,
    signup
  },
  Query: {
    me
  }
};

const resolvers: IResolvers = merge(root);

export default resolvers;
